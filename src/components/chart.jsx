import { useRef, useEffect, useState } from "react";

const Chart = ({ data }) => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });
  const [hoveredBar, setHoveredBar] = useState(null);
  const [todayIndex, setTodayIndex] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height: 300 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = weekdays[new Date().getDay()];
    const todayIdx = data.findIndex((item) => item.day === today);
    setTodayIndex(todayIdx);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [data]);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const { width, height } = dimensions;
  const maxValue = Math.max(...data.map((item) => item.amount));
  const topPadding = 60;
  const bottomPadding = 30;
  const gapPercentage = 20;

  return (
    <div className="relative w-full pb-4 md:pt-4">
      <svg ref={svgRef} className="h-[300px] w-full">
        {data.map((item, index) => {
          const barHeight =
            (item.amount / maxValue) * (height - topPadding - bottomPadding);
          const barWidth = `${(100 - gapPercentage) / data.length}%`;
          const barX = `${index * (100 / data.length) + gapPercentage / (2 * data.length)}%`;
          const barY = height - barHeight - bottomPadding;
          return (
            <g key={item.day}>
              <rect
                className={`cursor-pointer transition-colors duration-300 ${
                  index === todayIndex
                    ? "hover:fill-hoverCyan fill-cyan"
                    : "hover:fill-hoverOrange fill-softRed"
                }`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                rx="6"
                ry="6"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              <text
                className="fill-current text-mediumBrown"
                x={`${index * (100 / data.length) + 50 / data.length}%`}
                y={height - 10}
                textAnchor="middle"
              >
                {item.day}
              </text>
            </g>
          );
        })}
      </svg>
      {hoveredBar !== null && (
        <div
          className="tooltip absolute -translate-x-1/2 transform rounded bg-darkBrown p-2 text-sm font-bold text-white"
          style={{
            left: `${hoveredBar * (100 / data.length) + 50 / data.length}%`,
            top: `${height - (data[hoveredBar].amount / maxValue) * (height - topPadding - bottomPadding) - topPadding - 10}px`,
          }}
        >
          ${data[hoveredBar].amount.toFixed(2)}
        </div>
      )}
      <style jsx>{`
        @media (min-width: 768px) {
          .tooltip {
            top: ${height -
            (data[hoveredBar]?.amount / maxValue) *
              (height - topPadding - bottomPadding) -
            topPadding +
            5}px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Chart;
