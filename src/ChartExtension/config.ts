import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_chart",
  reference_name: "ChartExtension",
  supports_dark_mode: true,
  description: "A versatile charting extension powered by Chart.js",
};

// Supported chart types
export type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "doughnut"
  | "radar"
  | "polarArea"
  | "bubble"
  | "scatter";

// Basic data point structure
export interface DataPoint {
  x?: string | number;
  y?: number;
  label?: string;
  value?: number;
  r?: number; // For bubble charts
}

// Chart dataset structure
export interface ChartDataset {
  label: string;
  data: (number | DataPoint)[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  tension?: number; // For curved lines
  pointRadius?: number;
  pointBackgroundColor?: string | string[];
  pointBorderColor?: string | string[];
  pointHoverRadius?: number;
  // Additional dataset options can go here
}

// Chart style options
export interface ChartStyle {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  fontFamily?: string;
}

// Chart options that match Chart.js options structure
export interface ChartOptions {
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  plugins?: {
    title?: {
      display?: boolean;
      text?: string;
      font?: {
        size?: number;
        weight?: string;
      };
      color?: string;
    };
    subtitle?: {
      display?: boolean;
      text?: string;
      font?: {
        size?: number;
        weight?: string;
      };
      color?: string;
    };
    legend?: {
      display?: boolean;
      position?: "top" | "left" | "bottom" | "right";
      align?: "start" | "center" | "end";
    };
    tooltip?: {
      enabled?: boolean;
      mode?:
        | "point"
        | "nearest"
        | "index"
        | "dataset"
        | "x"
        | "y"
        | "nearest"
        | "point";
    };
  };
  scales?: {
    x?: {
      title?: {
        display?: boolean;
        text?: string;
      };
      grid?: {
        display?: boolean;
      };
      beginAtZero?: boolean;
    };
    y?: {
      title?: {
        display?: boolean;
        text?: string;
      };
      grid?: {
        display?: boolean;
      };
      beginAtZero?: boolean;
    };
  };
}

// Extension payload type
export interface ExtensionPayload {
  chart_type: ChartType;
  data: {
    labels?: string[];
    datasets: ChartDataset[];
  };
  options?: ChartOptions;
  style?: ChartStyle;
  title?: string;
  subtitle?: string;
}
