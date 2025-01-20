const ToolTip = ({ active, payload }) => {
  return (
    <>
      <div className="rounded-md bg-darkBrown p-2">
        {active && payload && (
          <span className="text-sm font-medium text-paleOrange">{`$${payload[0].value}`}</span>
        )}
      </div>
    </>
  );
};

export default ToolTip;
