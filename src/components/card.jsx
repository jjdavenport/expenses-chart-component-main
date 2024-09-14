import data from "./assets/data.json";
import Chart from "./chart";

const Card = () => {
  return (
    <>
      <section className="bg-paleOrange rounded-lg text-left">
        <h1 className="p-4">Spending - Last 7 days</h1>
        <Chart data={data} />
        <div className="flex justify-between p-4">
          <div className="flex flex-col">
            <span>Total this month</span>
            <span>$478.33</span>
          </div>
          <div className="flex flex-col">
            <span>+2.4% </span>
            <span>from last month</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
