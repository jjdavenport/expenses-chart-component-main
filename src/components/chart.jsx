import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import data from "../assets/data.json";
import ToolTip from "./tooltip";
import useDate from "../hooks/useDate";
import CustomBar from "./custom-bar";
import { ChartContainer, ChartTooltip } from "@/ui/chart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const Chart = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const { day: today } = useDate();
  const [hover, setHover] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <Card className="~sm/md:~p-0/2 rounded-xl border-none shadow-none outline-none md:rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-darkBrown">
          Spending - Last 7 days
        </CardTitle>
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
              tick={{
                fill: "hsl(28, 10%, 53%)",
                fontWeight: "500",
                fontSize: desktop ? "14px" : "12px",
              }}
            />
            <ChartTooltip
              position={{ x: position.x, y: position.y }}
              cursor={false}
              content={<ToolTip />}
              active={hover !== null}
            />
            <Bar
              dataKey="amount"
              fill="var(--color-desktop)"
              shape={({ x, y, width, height, fill, payload, index }) => (
                <CustomBar
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fill}
                  opacity={hover === index ? 0.6 : 1}
                  isToday={payload.day === today}
                  onMouseOver={() => {
                    setHover(index);
                    setPosition(
                      desktop
                        ? { x: x - 5, y: y - 40 }
                        : { x: x - 6, y: y - 30 },
                    );
                  }}
                  onMouseOut={() => {
                    setHover(null);
                  }}
                />
              )}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="mx-6 border border-cream"></div>
      <CardFooter className="flex items-end justify-between pt-6">
        <div className="~sm/md:~gap-1/2 flex flex-col">
          <div className="~sm/md:~text-sm/base flex font-medium leading-none text-mediumBrown">
            Total this month
          </div>
          <div className="~sm/md:~text-3xl/4xl flex font-bold leading-none text-darkBrown">
            $476.33
          </div>
        </div>
        <div className="~sm/md:~gap-0/1 flex flex-col items-end">
          <div className="text-muted-foreground text-sm font-bold leading-none text-darkBrown">
            +2.4%
          </div>
          <div className="text-muted-foreground ~sm/md:~text-sm/base leading-none text-mediumBrown">
            from last month
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Chart;
