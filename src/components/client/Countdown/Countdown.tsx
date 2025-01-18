import { useEffect, useState } from "react";
import CountdownCard from "../Countdown-Card/CountdownCard";

type Props = {
  date: Date;
};

const Countdown = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = props.date.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [props.date]);

  return (
    <div>
      <div className="flex items-center justify-start gap-2">
        <CountdownCard value={timeLeft.days} content="Ngày" />
        <CountdownCard value={timeLeft.hours} content="Giờ" />
        <CountdownCard value={timeLeft.minutes} content="Phút" />
        <CountdownCard value={timeLeft.seconds} content="Giây" />
      </div>
    </div>
  );
};

export default Countdown;
