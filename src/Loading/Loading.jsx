import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh-78px)]">
        <p className="text-7xl font-thin">L</p>
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600"></div>
        <p className="text-7xl font-thin">ADING.......</p>
      </div>
    </div>
  );
};

export default Loading;
