const ToolTip = ({ active, payload }) => {
  return (
    <>
      <div className="~sm/md:~p-1/2 rounded-sm bg-darkBrown md:rounded-md">
        {active && payload && (
          <span className="~sm/md:~text-xs/sm font-medium text-paleOrange">{`$${payload[0].value}`}</span>
        )}
      </div>
    </>
  );
};

export default ToolTip;
