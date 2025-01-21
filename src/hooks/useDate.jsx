import { useEffect, useState } from "react";

const useDate = () => {
  const [day, setDay] = useState(null);

  useEffect(() => {
    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date();
    const currentDay = weekdays[today.getDay()];
    setDay(currentDay);
  }, []);

  return { day };
};

export default useDate;
