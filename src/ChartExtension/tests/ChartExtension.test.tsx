import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartExtension } from "../Extension";
import { extension_config } from "../config";
import type { ExtensionPayload } from "../config";

// Mock the chart rendering since we're only testing that the component itself renders
jest.mock("react-chartjs-2", () => ({
  Bar: () => <div data-testid="bar-chart">Bar Chart</div>,
  Line: () => <div data-testid="line-chart">Line Chart</div>,
  Pie: () => <div data-testid="pie-chart">Pie Chart</div>,
  Doughnut: () => <div data-testid="doughnut-chart">Doughnut Chart</div>,
  Radar: () => <div data-testid="radar-chart">Radar Chart</div>,
  PolarArea: () => <div data-testid="polararea-chart">Polar Area Chart</div>,
  Bubble: () => <div data-testid="bubble-chart">Bubble Chart</div>,
  Scatter: () => <div data-testid="scatter-chart">Scatter Chart</div>,
}));

describe("ChartExtension", () => {
  const createElementWithExtension = (payload: ExtensionPayload) => {
    const element = document.createElement("div");
    ChartExtension.render?.({
      trace: {
        type: extension_config.id,
        payload: {
          name: extension_config.id,
          ...payload,
        },
      },
      element,
    });
    return element;
  };

  test("renders bar chart properly", () => {
    const samplePayload: ExtensionPayload = {
      chart_type: "bar",
      title: "Test Bar Chart",
      data: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Test Dataset",
            data: [10, 20],
          },
        ],
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  test("renders line chart properly", () => {
    const samplePayload: ExtensionPayload = {
      chart_type: "line",
      title: "Test Line Chart",
      data: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Test Dataset",
            data: [10, 20],
          },
        ],
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });

  test("renders pie chart properly", () => {
    const samplePayload: ExtensionPayload = {
      chart_type: "pie",
      title: "Test Pie Chart",
      data: {
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "Test Dataset",
            data: [30, 70],
          },
        ],
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
  });

  test("renders doughnut chart properly", () => {
    const samplePayload: ExtensionPayload = {
      chart_type: "doughnut",
      title: "Test Doughnut Chart",
      data: {
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "Test Dataset",
            data: [30, 70],
          },
        ],
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    expect(screen.getByTestId("doughnut-chart")).toBeInTheDocument();
  });

  test("renders with custom styling", () => {
    const samplePayload: ExtensionPayload = {
      chart_type: "bar",
      title: "Test Bar Chart",
      data: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Test Dataset",
            data: [10, 20],
          },
        ],
      },
      style: {
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        padding: "20px",
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    // Get the container div
    const container = screen.getByTestId("bar-chart").parentElement;

    // Check styling
    expect(container).toHaveStyle("background-color: #f5f5f5");
    expect(container).toHaveStyle("border-radius: 10px");
    expect(container).toHaveStyle("padding: 20px");
  });

  test("handles unsupported chart type", () => {
    const samplePayload = {
      chart_type: "unsupported" as any,
      data: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Test Dataset",
            data: [10, 20],
          },
        ],
      },
    };

    const element = createElementWithExtension(samplePayload);
    render(<div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />);

    expect(screen.getByText(/Unsupported chart type/)).toBeInTheDocument();
  });
});
