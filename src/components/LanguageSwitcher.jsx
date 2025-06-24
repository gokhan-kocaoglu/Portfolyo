import { useAppContext } from "../context/AppContext";
import React from "react";
export default function LanguageSwitcher() {
  const { locale, switchLocale } = useAppContext();
  return (
    <button
      onClick={switchLocale}
      className="text-pink-600 font-inter tracking-widest text-[15px] font-[700]"
      aria-label="Dili değiştir"
      data-testid="btnLangSwitch"
    >
      {locale === "tr" ? (
        <span data-testid="lang-label">ENGLISH</span>
      ) : (
        <>
          <span data-testid="lang-label">TÜRKÇE</span>
          <span className="text-[#777777] dark:text-[#ffffff]">'YE GEÇ</span>
        </>
      )}
    </button>
  );
}
