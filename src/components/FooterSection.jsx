import { useAppContext } from "../context/AppContext";
import HighlightText from "./HighlightText";
import { useSectionData } from "../hooks/useSectionData";

export default function FooterSection() {
  /*const data = useSelector((state) => state.data);
  const footer = data[locale].footerSection;*/
  const { locale } = useAppContext();
  const footer = useSectionData("footerSection");
  if (!footer) return null;
  return (
    <footer className="w-auto bg-white dark:bg-[#484148]">
      <div className="pt-16 pb-32 lg:pr-16 max-w-6xl mx-auto flex flex-col gap-14 md:flex-row items-center md:items-center justify-end">
        <div className="w-full md:w-[510px] flex flex-col items-center md:items-end">
          <h2 className="text-[32px] md:text-[32px] lg:text-[42px] leading-[150%] tracking-[0.01em] lg:text-right font-inter font-medium text-center text-[#0A0A14] dark:text-white pb-4">
            {/*<span className="relative z-10">
              {footer.title}
              <span
                className={`absolute ${
                  locale === "en"
                    ? "left-30 bottom-[62px] w-[250px]"
                    : "left-22 bottom-[0px] w-[310px]"
                }  h-4 rounded-[3px] bg-[#82BBFF] dark:bg-[#3968A0] z-[-2]`}
              ></span>
            </span>*/}
            {/*{footer.titleTop}{" "}
            <span className="relative z-10">
              {footer.titleHighlight}
              <span className="absolute left-5 -bottom-0.5 w-[250px] h-4 rounded-[4px] bg-blue-300 z-[-1]"></span>
            </span>
            <br />
            {footer.titleBottom}*/}
            {locale === "en" ? (
              <HighlightText
                text={footer.title}
                highlight={footer.titleHighlight}
              />
            ) : (
              <HighlightText
                text={footer.title}
                highlight={footer.titleHighlight}
                override={{ width: "w-[220px] lg:w-[300px] md:w-[220px]" }}
              />
            )}
          </h2>
        </div>
        <div className="flex flex-col items-center min-w-80 md:max-w-40 md:items-start">
          {footer.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className={`${link.color} font-medium font-inter text-2xl leading-[150%] tracking-normal hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
