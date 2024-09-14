import data from "./assets/data.json";
import Chart from "./chart";

const Card = () => {
  return (
    <>
      <section>
        <h1>Spending - Last 7 days</h1>
        <div className="flex gap-8">
          <Chart data={data} />
        </div>
        <div>
          <span>Total this month</span>
          <span>$478.33</span>
          <span>+2.4% </span>
          <span>from last month</span>
        </div>
      </section>
    </>
  );
};

export default Card;
