import { useEffect, useState } from "react";

export default function TimerCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer cleared");
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Seconds: {count}
      </h1>
    </div>
  );
}