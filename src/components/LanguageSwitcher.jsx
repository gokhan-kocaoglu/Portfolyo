import { useAppContext } from "../context/AppContext";
export default function LanguageSwitcher() {
  const { locale, switchLocale } = useAppContext();
  return (
    <button
      onClick={switchLocale}
      className="text-pink-600 font-inter tracking-widest text-[15px] font-[700]"
      aria-label="Dili değiştir"
    >
      {locale === "tr" ? (
        "ENGLISH"
      ) : (
        <>
          TÜRKÇE
          <span className="text-[#777777] dark:text-[#ffffff]">'YE GEÇ</span>
        </>
      )}
    </button>
  );
}
