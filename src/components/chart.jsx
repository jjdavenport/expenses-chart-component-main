import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import data from "./assets/data.json";
import ToolTip from "./tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const Chart = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Spending - Last 7 days</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              position={{ x: position.x, y: position.y }}
              cursor={false}
              content={<ToolTip />}
            />
            <Bar
              className="cursor-pointer"
              onMouseOver={(data) => {
                if (data.height) {
                  setPosition({
                    x: data.x - 5,
                    y: data.y - 40,
                  });
                }
              }}
              dataKey="amount"
              fill="var(--color-desktop)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 text-sm">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 font-medium leading-none">
            Total this month
          </div>
          <div className="flex gap-2 font-medium leading-none">$476.33</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground leading-none">+2.4%</div>
          <div className="text-muted-foreground leading-none">
            from last month
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Chart;
