import { useAppContext } from "../context/AppContext";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialIcon from "./SocialIcon";
import HighlightText from "./HighlightText";
import { useSectionData } from "../hooks/useSectionData";
import ResponsiveShape from "./ResponsiveShape";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { locale } = useAppContext();
  /*const data = useSelector((state) => state.data);
  const hero = data[locale].heroSection;*/
  const hero = useSectionData("heroSection");

  if (!hero) return null;

  return (
    <section className="bg-[#F4F4F4] dark:bg-[#2A262B] transition-colors relative z-0 py-20 px-2 md:px-0">
      <div className="flex flex-col md:flex-col items-center justify-end gap-6 max-w-6xl mx-auto">
        <div className="pr-2 flex md:flex-row flex-row justify-end w-full items-center gap-6 mb-4">
          <DarkModeSwitch />
          <p className="tracking-widest text-[15px] font-[700] font-inter text-[#777777]">
            |
          </p>
          <LanguageSwitcher />
        </div>
        <div className="pl-2 pr-2 flex md:flex-row flex-col items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-4 w-full"
          >
            <span className="font-inter text-[30px] dark:text-white font-normal">
              {hero.greeting} 👋
            </span>
            <h1 className="font-inter font-[500] text-[42px] dark:text-white leading-snug">
              {locale === "en" ? (
                <HighlightText
                  text={hero.intro}
                  highlight={hero.introHighlight}
                  override={{
                    width: "w-[142px]",
                    color: "bg-[#E92577]",
                    darkColor: "dark:bg-[#E92577]",
                    height: "h-7",
                    left: "-left-3",
                    top: "top-9",
                  }}
                />
              ) : (
                <HighlightText
                  text={hero.intro}
                  highlight={hero.introHighlight}
                  override={{
                    width: "w-[158px]",
                    color: "bg-[#E92577]",
                    darkColor: "dark:bg-[#E92577]",
                    height: "h-7",
                    left: "-left-3",
                    top: "top-9",
                  }}
                />
              )}
            </h1>
            <div className="flex gap-4 mt-6">
              {hero.socials.map((s, i) => (
                <SocialIcon
                  key={i}
                  logo={s.logo}
                  alt={s.alt_text}
                  link={s.link}
                />
              ))}
            </div>
            <div
              className="rich-text tracking-[0.05em] pt-4 md:max-w-[540px] text-[18px] font-inter font-normal leading-8 text-gray-700 dark:text-white"
              dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col items-center justify-center md:items-end mt-8 md:mt-0 w-full"
          >
            <img
              src={`${hero.profileImage}`}
              alt="profile"
              className="rounded-2xl object-cover w-[360px] h-[360px]"
            />
          </motion.div>
        </div>
      </div>
      <ResponsiveShape
        xPercent={0.32}
        yPercent={0.0}
        offsetHalfHeight={true}
        responsiveScale={true}
        maxSize={112}
        minSize={36}
        className="w-28 h-28 bg-[#D9D9D9] dark:bg-[#525252] rounded-full"
      />
      <ResponsiveShape
        rightPercent={-0.05}
        bottomPercent={0.12}
        maxSizeH={59}
        maxSizeW={217}
        minSizeW={100}
        minSizeH={20}
        responsiveScale={true}
        className="w-[217px] h-[59px] bg-[#EA2678] rounded-[30px]"
      />
    </section>
  );
}
