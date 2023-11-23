import { useState, useEffect } from "react";

function DynamicScroll() {
  const [size, setSize] = useState(1);

  function scrollEvent() {
    if (window.scrollY > 800) {
      setSize(size - 1);
    } else {
      setSize(size - window.scrollY * 0.002);
    }
    console.log(window.scrollY);
  }

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);
    watchScroll();
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex justify-end items-end text-7xl">
      <div
        style={{ width: 450 * size, height: 850 * size }}
        className="bg-red-100 absolute top-0 left-0"
      ></div>
      <div>Scam is Money 💵</div>
    </div>
  );
}

export default DynamicScroll;
