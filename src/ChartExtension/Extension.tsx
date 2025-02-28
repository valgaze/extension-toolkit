import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  PieController,
  DoughnutController,
  RadarController,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Bubble,
  Scatter,
} from "react-chartjs-2";

import type {
  RenderExtension,
  VoiceflowTrace,
} from "../../util/types/extension";
import {
  extension_config,
  type ExtensionPayload,
  type ChartType,
} from "./config";

// Register all chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  PieController,
  DoughnutController,
  RadarController,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Tooltip,
  Legend,
  Title,
  SubTitle
);

// Chart component that renders the appropriate chart based on type
const ChartComponent: React.FC<ExtensionPayload> = ({
  chart_type,
  data,
  options = {},
  style = {},
  title,
  subtitle,
}) => {
  // Default container styles
  const containerStyle = {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "sans-serif",
    ...style,
  };

  // Add title and subtitle to options if provided
  const chartOptions = { ...options };

  // Add plugins if they don't exist
  if (!chartOptions.plugins) {
    chartOptions.plugins = {};
  }

  // Add title if provided
  if (title && chartOptions.plugins) {
    chartOptions.plugins.title = {
      display: true,
      text: title,
      font: {
        size: 18,
        weight: "bold",
      },
      ...chartOptions.plugins.title,
    };
  }

  // Add subtitle if provided
  if (subtitle && chartOptions.plugins) {
    chartOptions.plugins.subtitle = {
      display: true,
      text: subtitle,
      font: {
        size: 14,
      },
      ...chartOptions.plugins.subtitle,
    };
  }

  // Set legend defaults if not provided
  if (chartOptions.plugins && !chartOptions.plugins.legend) {
    chartOptions.plugins.legend = {
      display: true,
      position: "top",
    };
  }

  // Set responsive defaults
  if (chartOptions.responsive === undefined) {
    chartOptions.responsive = true;
  }

  if (chartOptions.maintainAspectRatio === undefined) {
    chartOptions.maintainAspectRatio = true;
  }

  // Render the appropriate chart based on type
  const renderChart = () => {
    switch (chart_type) {
      case "bar":
        return <Bar data={data} options={chartOptions as any} />;
      case "line":
        return <Line data={data} options={chartOptions as any} />;
      case "pie":
        return <Pie data={data} options={chartOptions as any} />;
      case "doughnut":
        return <Doughnut data={data} options={chartOptions as any} />;
      case "radar":
        return <Radar data={data} options={chartOptions as any} />;
      case "polarArea":
        return <PolarArea data={data} options={chartOptions as any} />;
      case "bubble":
        return <Bubble data={data} options={chartOptions as any} />;
      case "scatter":
        return <Scatter data={data} options={chartOptions as any} />;
      default:
        return <div>Unsupported chart type: {chart_type}</div>;
    }
  };

  return <div style={containerStyle}>{renderChart()}</div>;
};

export const ChartExtension: RenderExtension = {
  name: extension_config.reference_name,
  type: "response",
  match: ({ trace }: { trace: VoiceflowTrace<unknown> }) =>
    trace.type === extension_config.id ||
    trace.payload?.name === extension_config.id,
  render: ({ trace, element }) => {
    const payload = trace.payload as ExtensionPayload;
    const root = ReactDOM.createRoot(element);

    root.render(
      <React.StrictMode>
        <ChartComponent {...payload} />
      </React.StrictMode>
    );

    // Cleanup function
    return () => {
      root.unmount();
    };
  },
};
