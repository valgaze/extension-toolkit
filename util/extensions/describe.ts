import { z } from 'zod';
import type { ZodTypeAny, ZodObject, ZodRawShape } from 'zod';
import { META_KEY } from './index'; // Assuming META_KEY is exported from index

import type {ExtensionMeta, RenderExtension} from './types';


export type VoiceflowTrace<T = any> = {
  type: string;
  payload: T & { 
    name?: string;
    $config?: any;
  };
};

export type ParsedParam = {
  key: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: any;
  enumValues?: string[];
};

export class ExtensionDescription {
  private extension: RenderExtension;
  private meta: ExtensionMeta<ZodTypeAny>;
  private params: ParsedParam[] = [];
  private outputType: string | undefined;

  constructor(extension: RenderExtension) {
    this.extension = extension;
    
    // Extract metadata
    const meta = this.extractMetadata();
    if (!meta) {
      throw new Error(`Extension ${extension.name} is missing metadata`);
    }
    
    this.meta = meta;
    
    // Parse inputs
    if (meta.inputs instanceof z.ZodObject) {
      this.params = this.parseZodObject(meta.inputs as ZodObject<ZodRawShape>);
    }
    
    // Parse outputs if they exist
    if (meta.outputs) {
      if (meta.outputs instanceof z.ZodObject) {
        this.outputType = `Object with properties: ${Object.keys((meta.outputs as ZodObject<ZodRawShape>).shape).join(', ')}`;
      } else {
        this.outputType = this.getZodTypeName(meta.outputs);
      }
    }
  }

  /**
   * Extract metadata from the extension
   */
  private extractMetadata(): ExtensionMeta<ZodTypeAny> | undefined {
    return (this.extension.render as any)[META_KEY] as ExtensionMeta<ZodTypeAny> | undefined;
  }

  /**
   * Get the type name of a Zod schema
   */
  private getZodTypeName(schema: ZodTypeAny): string {
    if (schema instanceof z.ZodString) {
      return 'string';
    } else if (schema instanceof z.ZodNumber) {
      return 'number';
    } else if (schema instanceof z.ZodBoolean) {
      return 'boolean';
    } else if (schema instanceof z.ZodEnum) {
      const values = (schema as any)._def.values;
      return `enum (${values.join(', ')})`;
    } else if (schema instanceof z.ZodArray) {
      const itemType = this.getZodTypeName((schema as any)._def.type);
      return `array of ${itemType}`;
    } else if (schema instanceof z.ZodObject) {
      return 'object';
    } else if (schema instanceof z.ZodOptional) {
      return `optional ${this.getZodTypeName((schema as any)._def.innerType)}`;
    } else if (schema instanceof z.ZodDefault) {
      const innerType = this.getZodTypeName((schema as any)._def.innerType);
      const defaultValue = (schema as any)._def.defaultValue();
      return innerType;
    } else if (schema instanceof z.ZodLiteral) {
      return `literal: ${(schema as any)._def.value}`;
    } else if (schema instanceof z.ZodNullable) {
      return `nullable ${this.getZodTypeName((schema as any)._def.innerType)}`;
    } else {
      return 'unknown';
    }
  }

  /**
   * Check if a schema is required
   */
  private isRequired(schema: ZodTypeAny): boolean {
    return !(schema.isOptional?.() || false);
  }

  /**
   * Get the default value if any
   */
  private getDefaultValue(schema: ZodTypeAny): any {
    if (schema instanceof z.ZodDefault) {
      return (schema as any)._def.defaultValue();
    }
    
    return undefined;
  }

  /**
   * Get the description from a schema
   */
  private getDescription(schema: ZodTypeAny): string {
    return (schema as any)._def?.description || '';
  }

  /**
   * Get enum values if any
   */
  private getEnumValues(schema: ZodTypeAny): string[] | undefined {
    if (schema instanceof z.ZodEnum) {
      return (schema as any)._def.values;
    } else if (schema instanceof z.ZodOptional || schema instanceof z.ZodDefault) {
      return this.getEnumValues((schema as any)._def.innerType);
    }
    
    return undefined;
  }

  /**
   * Parse a Zod object schema into an array of parameters
   */
  private parseZodObject(schema: ZodObject<ZodRawShape>): ParsedParam[] {
    const shape = schema.shape;
    const params: ParsedParam[] = [];

    for (const [key, fieldSchema] of Object.entries(shape)) {
      const type = this.getZodTypeName(fieldSchema);
      const description = this.getDescription(fieldSchema);
      const required = this.isRequired(fieldSchema);
      const defaultValue = this.getDefaultValue(fieldSchema);
      const enumValues = this.getEnumValues(fieldSchema);
      
      params.push({
        key,
        type,
        description,
        required,
        defaultValue,
        enumValues
      });
    }

    return params;
  }

  /**
   * Get the extension's name
   */
  getName(): string {
    return this.extension.name || '';
  }

  /**
   * Get the extension's LLM description
   */
  getLLMDescription(): string {
    return this.meta.llmDescription;
  }

  /**
   * Get the parsed parameters
   */
  getParams(): ParsedParam[] {
    return this.params;
  }

  /**
   * Get the output type description if available
   */
  getOutputType(): string | undefined {
    return this.outputType;
  }

  /**
   * Format a parameter for display in the prompt
   */
  private formatParam(param: ParsedParam): string {
    const requiredText = param.required ? 'Required' : 'Optional';
    let typeDisplay = param.type;
    
    // Add default value if exists
    let defaultText = '';
    if (param.defaultValue !== undefined) {
      const displayValue = typeof param.defaultValue === 'string' 
        ? `"${param.defaultValue}"` 
        : String(param.defaultValue);
      defaultText = ` (default: ${displayValue})`;
    }
    
    let paramString = `- ${param.key} (${typeDisplay})${defaultText} [${requiredText}]`;
    
    if (param.description) {
      paramString += `\n  Description: ${param.description}`;
    }
    
    return paramString;
  }

  /**
   * Generate the inputs section of the prompt
   */
  getInputsRaw(): string {
    if (this.params.length === 0) {
      return 'No inputs required.';
    }

    return this.params.map(param => this.formatParam(param)).join('\n\n');
  }

  /**
   * Generate the full prompt for this extension
   */
  buildPrompt(): string {
    let prompt = `## ${this.getName()}\n\n${this.getLLMDescription()}\n\n`;
    
    prompt += "### Inputs:\n";
    prompt += this.getInputsRaw();
    
    if (this.outputType) {
      prompt += "\n\n### Output:\n";
      prompt += this.outputType;
    }
    
    return prompt;
  }
}

/**
 * Create an ExtensionDescription instance from an extension
 */
export function describeExtension(extension: RenderExtension): ExtensionDescription {
  return new ExtensionDescription(extension);
}

/**
 * Create a full prompt from multiple extensions
 */
export function buildFullPrompt(extensions: RenderExtension[]): string {
  return extensions
    .map(ext => describeExtension(ext).buildPrompt())
    .join('\n\n---\n\n');
}

// Import createExtension to make this file work with the existing code
import { createExtension } from './index'; // Update this path as needed

// Example usage
export function createAndDescribe<TSchema extends ZodTypeAny>(params: ExtensionMeta<TSchema>) {
  const extension = createExtension(params);
  return {
    extension,
    description: describeExtension(extension)
  };
}