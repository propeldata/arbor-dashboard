"use client";

import { AgChartProps, AgCharts } from "ag-charts-react";

export function Chart(props: AgChartProps) {
  return (
    <AgCharts
      {...props}
    />
  );
}
