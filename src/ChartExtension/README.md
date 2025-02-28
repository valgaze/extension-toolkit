# Chart Extension

A versatile charting extension powered by Chart.js that makes it easy to visualize data in various chart formats.

## Features

- 📊 Multiple chart types: bar, line, pie, doughnut, radar, polarArea, scatter, and bubble
- 🎨 Customizable styles and colors
- 📝 Built-in title and subtitle support
- 📱 Responsive and mobile-friendly
- 🎛️ Fine-grained control over chart options

## Usage

### Basic Structure

The Chart Extension accepts a payload with the following structure:

```typescript
{
  chart_type: "bar" | "line" | "pie" | "doughnut" | "radar" | "polarArea" | "scatter" | "bubble",
  data: {
    labels?: string[],  // Labels for the x-axis or segments (for pie/doughnut)
    datasets: [
      {
        label: string,  // Dataset name
        data: number[] | { x: number, y: number, r?: number }[],  // Data points
        backgroundColor?: string | string[],
        borderColor?: string | string[],
        // Additional styling options...
      }
    ]
  },
  options?: {
    // Chart.js options
  },
  style?: {
    // Container styles
  },
  title?: string,  // Chart title
  subtitle?: string  // Chart subtitle
}
```

### Examples

Here are examples of how to use the Chart Extension with different chart types:

#### Bar Chart

```json
{
  "chart_type": "bar",
  "title": "Monthly Revenue",
  "subtitle": "Last 6 months of sales data",
  "data": {
    "labels": ["January", "February", "March", "April", "May", "June"],
    "datasets": [
      {
        "label": "Revenue",
        "data": [12000, 19000, 15000, 25000, 22000, 30000],
        "backgroundColor": "rgba(54, 162, 235, 0.6)",
        "borderColor": "rgba(54, 162, 235, 1)",
        "borderWidth": 1
      },
      {
        "label": "Expenses",
        "data": [8000, 12000, 10000, 14000, 13000, 17000],
        "backgroundColor": "rgba(255, 99, 132, 0.6)",
        "borderColor": "rgba(255, 99, 132, 1)",
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true,
        "title": {
          "display": true,
          "text": "Amount ($)"
        }
      }
    }
  }
}
```

#### Line Chart

```json
{
  "chart_type": "line",
  "title": "Website Traffic",
  "subtitle": "Daily visits over the past week",
  "data": {
    "labels": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "datasets": [
      {
        "label": "Visitors",
        "data": [1200, 1900, 1700, 2400, 2800, 1800, 2500],
        "borderColor": "rgba(75, 192, 192, 1)",
        "backgroundColor": "rgba(75, 192, 192, 0.2)",
        "tension": 0.4,
        "fill": true
      }
    ]
  }
}
```

#### Pie Chart

```json
{
  "chart_type": "pie",
  "title": "Customer Distribution",
  "subtitle": "By region",
  "data": {
    "labels": [
      "North America",
      "Europe",
      "Asia",
      "Australia",
      "Africa",
      "South America"
    ],
    "datasets": [
      {
        "label": "Customer Distribution",
        "data": [35, 25, 20, 10, 5, 5],
        "backgroundColor": [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)"
        ]
      }
    ]
  }
}
```

#### Scatter Plot

```json
{
  "chart_type": "scatter",
  "title": "Performance vs. Cost",
  "subtitle": "Product analysis",
  "data": {
    "datasets": [
      {
        "label": "Products",
        "data": [
          { "x": 10, "y": 71 },
          { "x": 20, "y": 51 },
          { "x": 30, "y": 82 },
          { "x": 40, "y": 63 },
          { "x": 50, "y": 59 }
        ],
        "backgroundColor": "rgba(75, 192, 192, 0.8)"
      }
    ]
  },
  "options": {
    "scales": {
      "x": {
        "title": {
          "display": true,
          "text": "Cost ($)"
        }
      },
      "y": {
        "title": {
          "display": true,
          "text": "Performance Score"
        }
      }
    }
  }
}
```

## Connecting to AWS Backend Data

To use the Chart Extension with data from your AWS backend:

1. Make sure your backend API returns data in a format that can be easily transformed to match the structure required by the Chart Extension.

2. Fetch the data from your API and transform it to the expected format:

```javascript
// Assuming you're using a fetch call to your AWS API
fetch("https://your-api-gateway.amazonaws.com/dev/metrics")
  .then((response) => response.json())
  .then((data) => {
    // Transform API data to Chart Extension format
    const chartData = {
      chart_type: "bar",
      title: "API Data Visualization",
      data: {
        labels: data.map((item) => item.category),
        datasets: [
          {
            label: "Values",
            data: data.map((item) => item.value),
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
    };

    // Use the transformed data with your extension
    // ...
  });
```

## Customization

### Container Styling

You can customize the container's appearance using the `style` property:

```json
{
  "chart_type": "bar",
  "data": { ... },
  "style": {
    "width": "100%",
    "maxWidth": "600px",
    "backgroundColor": "#f8f9fa",
    "borderRadius": "16px",
    "padding": "24px",
    "boxShadow": "0 8px 16px rgba(0, 0, 0, 0.1)"
  }
}
```

### Chart Options

The extension supports all Chart.js options through the `options` property. For detailed documentation on available options, refer to the [Chart.js documentation](https://www.chartjs.org/docs/latest/).

## Storybook Examples

The extension comes with a set of Storybook examples that demonstrate different chart types and configurations. Run Storybook to explore these examples and experiment with different options.

```bash
npm run storybook
```

Then navigate to the "Extensions/Chart" section to view all available examples.
