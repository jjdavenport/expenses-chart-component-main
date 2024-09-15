import data from "./assets/data.json";
import Chart from "./chart";

const Card = () => {
  return (
    <>
      <main className="rounded-xl bg-paleOrange p-6 text-left">
        <h1 className="text-2xl font-bold text-darkBrown">
          Spending - Last 7 days
        </h1>
        <Chart data={data} />
        <div className="flex justify-between border-t-2 border-cream pt-4">
          <div className="flex flex-col gap-1 text-left">
            <span className="text-mediumBrown">Total this month</span>
            <span className="text-4xl font-bold text-darkBrown">$478.33</span>
          </div>
          <div className="flex flex-col justify-end text-right">
            <span className="font-bold text-darkBrown">+2.4% </span>
            <span className="text-mediumBrown">from last month</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
