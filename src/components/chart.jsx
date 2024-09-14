import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useCallback } from "react";

const Chart = ({ data }) => {
  const [activeBar, setActiveBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const date = new Date();
  const day = date.getUTCDay();

  const handleMouseEnter = useCallback((data, index) => {
    setActiveBar(index);
    setTooltipPosition({ x: data.x + 50, y: data.y - 10 });
  }, []);

  const toolTip = ({ payload, active }) => {
    if (active && activeBar !== null && payload && payload.length) {
      return (
        <div
          className="absolute rounded border border-gray-300 bg-darkBrown p-2"
          style={{
            pointerEvents: "none",
            left: tooltipPosition.x,
            top: tooltipPosition.y,
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
          onMouseEnter={(data, index) => handleMouseEnter(data, index)}
          onMouseLeave={() => setActiveBar(null)}
          dataKey="amount"
          className="cursor-pointer fill-softRed"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
