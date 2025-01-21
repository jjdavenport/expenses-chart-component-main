const CustomBar = ({
  x,
  y,
  width,
  height,
  fill,
  opacity,
  isToday,
  onMouseOver,
  onMouseOut,
}) => {
  const borderRadius = 4;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={isToday ? "hsl(186, 34%, 60%)" : fill}
      rx={borderRadius}
      ry={borderRadius}
      style={{
        transition: "opacity 0.3s ease-in-out",
        opacity: opacity,
        cursor: "pointer",
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default CustomBar;
