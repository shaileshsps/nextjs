import { useEffect, useState } from "react";

export default function ProgressBar({ progress }) {

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress])

  return (
    <div className="outer">
      <div className="inner" style={{ /* transform: `translateX(${animatedProgress - 100}%)` ,*/width: `${animatedProgress}%`, color: (progress <= 0) ? 'black' : 'white' }}>
        {animatedProgress}%
      </div>
    </div >
  );
}