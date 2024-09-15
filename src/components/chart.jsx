import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useCallback } from "react";

const Chart = ({ data }) => {
  const [activeBar, setActiveBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback((data, index, event) => {
    const barElement = event.target.getBoundingClientRect();
    const chartContainer = event.currentTarget
      .closest(".recharts-wrapper")
      .getBoundingClientRect();
    const xPosition =
      barElement.left + barElement.width / 2 - chartContainer.left;
    const yPosition = barElement.top - chartContainer.top - 10;

    setActiveBar(index);
    setTooltipPosition({ x: xPosition, y: yPosition });
  }, []);

  const toolTip = ({ payload, active }) => {
    if (active && activeBar !== null && payload && payload.length) {
      return (
        <div
          className="absolute rounded border border-gray-300 bg-darkBrown p-2"
          style={{
            pointerEvents: "none",
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="text-cream">{`$${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, bottom: 5 }}>
        <XAxis axisLine={false} tickLine={false} dataKey="day" />
        <Tooltip content={toolTip} cursor={false} />
        <Bar
          dataKey="amount"
          className="hover:fill-hoverOrange cursor-pointer fill-softRed"
          onMouseEnter={(data, index, event) =>
            handleMouseEnter(data, index, event)
          }
          onMouseLeave={() => setActiveBar(null)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
