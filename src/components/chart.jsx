import React, { useRef, useEffect, useState } from "react";

const Chart = ({ data }) => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height: 300 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const { width, height } = dimensions;
  const maxValue = Math.max(...data.map((item) => item.amount));

  return (
    <div className="relative w-full pb-4">
      <svg ref={svgRef} className="h-[300px] w-full">
        {data.map((item, index) => {
          const barHeight = (item.amount / maxValue) * (height - 40);
          const barWidth = `${90 / data.length}%`;
          const barX = `${index * (100 / data.length)}%`;
          const barY = height - barHeight - 30;
          return (
            <g key={item.day}>
              <rect
                className="hover:fill-hoverOrange cursor-pointer fill-softRed transition-colors duration-300"
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
                x={`${index * (100 / data.length) + 45 / data.length}%`}
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
          className="absolute -translate-x-1/2 transform rounded bg-darkBrown px-2 py-1 text-xs font-bold text-white"
          style={{
            left: `calc(${hoveredBar * (100 / data.length)}% + ${45 / data.length}%)`,
            top: `${height - (data[hoveredBar].amount / maxValue) * (height - 40) - 70}px`,
          }}
        >
          ${data[hoveredBar].amount.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Chart;
