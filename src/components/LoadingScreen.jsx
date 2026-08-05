import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 theme-app flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold theme-text">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] rounded relative overflow-hidden bg-[color:var(--border)]">
        <div className="w-[30%] h-full theme-accent-bg shadow-[0_0_15px_rgba(59,130,246,0.45)] animate-loading-bar"></div>
      </div>
    </div>
  );
};
