import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChartExtension } from "../Extension";
import { extension_config } from "../config";
import type { ExtensionPayload, ChartType } from "../config";

const meta = {
  title: "Extensions/Chart",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;
type Story = StoryObj<typeof HTMLDivElement>;

// Debug panel component for response extensions
const ResponseDebugPanel: React.FC<{
  configId: string;
  payload: ExtensionPayload;
  onTrigger: (payload: ExtensionPayload) => void;
}> = ({ configId, payload, onTrigger }) => {
  const [editablePayload, setEditablePayload] = React.useState(
    JSON.stringify(payload, null, 2)
  );
  const [error, setError] = React.useState<string | null>(null);

  const handleTrigger = () => {
    try {
      const parsed = JSON.parse(editablePayload);
      setError(null);
      onTrigger(parsed);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "500px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "monospace",
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <strong>Chart Extension Debug</strong>
        <span
          style={{
            color: "#999",
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        >
          {configId}
        </span>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <textarea
          value={editablePayload}
          onChange={(e) => setEditablePayload(e.target.value)}
          style={{
            width: "100%",
            height: "300px",
            padding: "8px",
            fontFamily: "monospace",
            fontSize: "12px",
            border: error ? "1px solid #ff5252" : "1px solid #ddd",
            borderRadius: "4px",
            resize: "vertical",
          }}
        />
        {error && (
          <div
            style={{
              color: "#ff5252",
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            {error}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={handleTrigger}
          style={{
            padding: "8px 16px",
            background: "#5468ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Update Chart
        </button>
      </div>
    </div>
  );
};

// Create a story template for response extensions
const createResponseStory = (payload: ExtensionPayload): Story => ({
  render: () => {
    const [currentPayload, setCurrentPayload] = React.useState(payload);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleTrigger = (newPayload: ExtensionPayload) => {
      setCurrentPayload(newPayload);

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        ChartExtension.render?.({
          trace: {
            type: extension_config.id,
            payload: {
              name: extension_config.id,
              ...newPayload,
            },
          },
          element: containerRef.current,
        });
      }
    };

    React.useEffect(() => {
      if (containerRef.current) {
        ChartExtension.render?.({
          trace: {
            type: extension_config.id,
            payload: {
              name: extension_config.id,
              ...currentPayload,
            },
          },
          element: containerRef.current,
        });
      }
    }, []);

    return (
      <>
        <div style={{ padding: "20px", maxWidth: "800px" }}>
          <h3>Chart Extension Demo</h3>
          <p>Use the debug panel to customize the chart.</p>
          <div
            ref={containerRef}
            style={{ marginTop: "20px", width: "100%" }}
          />
        </div>
        <ResponseDebugPanel
          configId={extension_config.id}
          payload={currentPayload}
          onTrigger={handleTrigger}
        />
      </>
    );
  },
});

// Sample chart payloads
const chartExamples = {
  barChart: {
    chart_type: "bar" as ChartType,
    title: "Monthly Revenue",
    subtitle: "Last 6 months of sales data",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 19000, 15000, 25000, 22000, 30000],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [8000, 12000, 10000, 14000, 13000, 17000],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Amount ($)",
          },
        },
      },
    },
  },

  lineChart: {
    chart_type: "line" as ChartType,
    title: "Website Traffic",
    subtitle: "Daily visits over the past week",
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Visitors",
          data: [1200, 1900, 1700, 2400, 2800, 1800, 2500],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Visitors",
          },
        },
      },
    },
  },

  pieChart: {
    chart_type: "pie" as ChartType,
    title: "Customer Distribution",
    subtitle: "By region",
    data: {
      labels: [
        "North America",
        "Europe",
        "Asia",
        "Australia",
        "Africa",
        "South America",
      ],
      datasets: [
        {
          label: "Customer Distribution",
          data: [35, 25, 20, 10, 5, 5],
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },

  doughnutChart: {
    chart_type: "doughnut" as ChartType,
    title: "Budget Allocation",
    subtitle: "Current fiscal year",
    data: {
      labels: [
        "Development",
        "Marketing",
        "Operations",
        "Customer Support",
        "Admin",
      ],
      datasets: [
        {
          label: "Budget Allocation",
          data: [40, 20, 15, 15, 10],
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {} as any,
      },
    },
  },

  radarChart: {
    chart_type: "radar" as ChartType,
    title: "Skill Assessment",
    subtitle: "Team capabilities",
    data: {
      labels: [
        "Technical",
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
        "Leadership",
      ],
      datasets: [
        {
          label: "Team A",
          data: [80, 90, 85, 70, 75, 65],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Team B",
          data: [75, 70, 90, 80, 85, 75],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    options: {
      scales: {} as any,
    },
  },

  polarAreaChart: {
    chart_type: "polarArea" as ChartType,
    title: "Product Performance",
    subtitle: "Sales by category",
    data: {
      labels: ["Electronics", "Clothing", "Books", "Home & Kitchen", "Beauty"],
      datasets: [
        {
          label: "Product Performance",
          data: [300, 200, 150, 250, 180],
          backgroundColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },

  scatterChart: {
    chart_type: "scatter" as ChartType,
    title: "Performance vs. Cost",
    subtitle: "Product analysis",
    data: {
      datasets: [
        {
          label: "Products",
          data: [
            { x: 10, y: 71 },
            { x: 20, y: 51 },
            { x: 30, y: 82 },
            { x: 40, y: 63 },
            { x: 50, y: 59 },
            { x: 60, y: 95 },
            { x: 70, y: 78 },
            { x: 80, y: 89 },
            { x: 90, y: 84 },
            { x: 100, y: 92 },
          ],
          backgroundColor: "rgba(75, 192, 192, 0.8)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          pointRadius: 6,
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Cost ($)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Performance Score",
          },
          min: 0,
          max: 100,
        },
      },
    },
  },

  bubbleChart: {
    chart_type: "bubble" as ChartType,
    title: "Project Analysis",
    subtitle: "Cost vs. Time vs. Complexity",
    data: {
      datasets: [
        {
          label: "Projects",
          data: [
            { x: 10, y: 20, r: 5 },
            { x: 15, y: 10, r: 10 },
            { x: 20, y: 30, r: 7 },
            { x: 25, y: 15, r: 12 },
            { x: 30, y: 25, r: 8 },
            { x: 35, y: 18, r: 15 },
            { x: 40, y: 35, r: 9 },
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(201, 203, 207, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(201, 203, 207, 1)",
          ],
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Time (weeks)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Cost ($1000s)",
          },
        },
      },
    },
  },
};

// Export all chart stories
export const BarChart = createResponseStory(chartExamples.barChart);
export const LineChart = createResponseStory(chartExamples.lineChart);
export const PieChart = createResponseStory(chartExamples.pieChart);
export const DoughnutChart = createResponseStory(chartExamples.doughnutChart);
export const RadarChart = createResponseStory(chartExamples.radarChart);
export const PolarAreaChart = createResponseStory(chartExamples.polarAreaChart);
export const ScatterChart = createResponseStory(chartExamples.scatterChart);
export const BubbleChart = createResponseStory(chartExamples.bubbleChart);
