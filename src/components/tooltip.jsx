const ToolTip = ({ active, payload }) => {
  return (
    <>
      <div className="rounded-md bg-black p-2">
        {active && payload && (
          <span className="text-sm text-white">{`$${payload[0].value}`}</span>
        )}
      </div>
    </>
  );
};

export default ToolTip;
