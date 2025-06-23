import React, { createContext, useContext, useState } from "react";

const HighlightContext = createContext();

export function HighlightProvider({ children }) {
  const [config, setConfig] = useState({
    color: "bg-[#82BBFF]",
    darkColor: "dark:bg-[#3968A0]",
    height: "h-5",
    width: "w-[190px] lg:w-[250px] md:w-[190px]",
    left: "left-4 lg:left-5 md:left-4",
    top: "lg:top-11 md:top-8 top-8",
    borderRadius: "rounded-sm",
    zIndex: "z-[-1]",
  });

  const [highlightWords, setHighlightWords] = useState({
    en: "work together",
    tr: "birlikte çalışalım",
    // başka diller eklenebilir
  });

  return (
    <HighlightContext.Provider
      value={{ config, setConfig, highlightWords, setHighlightWords }}
    >
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  return useContext(HighlightContext);
}
