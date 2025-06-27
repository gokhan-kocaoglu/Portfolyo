import HighlightText from "./HighlightText";
import { useSectionData } from "../hooks/useSectionData";
import { useAppContext } from "../context/AppContext";
import ResponsiveShape from "./ResponsiveShape";
import { motion } from "framer-motion";
import React from "react";
import PercentPositionedBox from "./PercentPositionedBox";

export default function AboutSection() {
  /*const data = useSelector((state) => state.data);
  const about = data[locale].aboutSection;*/
  const { locale } = useAppContext();
  const about = useSectionData("aboutSection");
  if (!about || !about.title) return null;

  return (
    <section className="z-0 pt-10 md:pb-18 px-2 md:px-0 w-auto mx-auto relative bg-[#F4F4F4] dark:bg-[#2A262B]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col max-w-6xl items-center justify-center mx-auto"
      >
        {/* Başlık */}
        <h2 className="font-inter text-4xl font-[500px] leading-[100%] tracking-[0.01em] text-center text-[#0A0A14] dark:text-[#F4F4F4] pt-8 pb-10">
          {about.title}
        </h2>
        <div className="flex w-full flex-col lg:flex-row justify-around items-center gap-18">
          {/* Bilgi kartı */}
          <div className="flex flex-col max-w-[460px] md:w-[460px] lg:w-[500px] bg-white dark:bg-[#525252] rounded-xl shadow-[8px_8px_0_0_#52525280]">
            <h2 className="text-[#EA2678] font-playFair font-normal text-2xl tracking-[0.01em] leading-[100%] pt-4 pl-4 py-5 md:pt-10 md:pl-10 md:py-10">
              {about.titleBasic}
            </h2>
            <ul className="mb-4 flex flex-col gap-8 pb-8">
              {about.info.map((item, idx) => (
                <li
                  key={idx}
                  className="pl-4 md:pl-10 flex flex-row items-start gap-2"
                >
                  <span className="font-inter text-[16px] md:text-[18px] font-[600] leading-[100%] tracking-[0.01em] dark:text-white text-black w-[180px]">
                    {item.label}
                  </span>
                  <span className="font-inter text-[16px] md:text-[18px] max-w-[120px] md:max-w-[200px] md:font-normal leading-[100%]  dark:text-white tracking-[0.01em]">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Hakkımda */}
          <div className=" flex flex-col md:w-[400px] lg:w-[476px]">
            <h3 className="font-playFair text-2xl font-normal leading-[100%] tracking-[0.01em] text-black dark:text-[#F4F4F4] pt-4 pb-8">
              {locale === "en" ? (
                <HighlightText
                  text={about.titleAbout}
                  highlight={about.titleAboutHightlight}
                  override={{
                    top: "top-3.5",
                    left: "-left-3",
                    width: "w-[90px]",
                    darkColor: "dark:bg-[#82BBFF]",
                  }}
                />
              ) : (
                <HighlightText
                  text={about.titleAbout}
                  highlight={about.titleAboutHightlight}
                  override={{
                    top: "top-3.5",
                    left: "-left-3",
                    width: "w-[105px]",
                    darkColor: "dark:bg-[#82BBFF]",
                  }}
                />
              )}
            </h3>
            <div className="flex flex-col gap-2">
              {about.content.map((text, i) => (
                <p
                  key={i}
                  className="pb-6 font-inter text-center md:text-left font-normal leading-[150%] tracking-[0.01em] text-lg text-black dark:text-gray-300"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {/*<ResponsiveShape
        rightPercent={0.01}
        yPercent={0.05}
        responsiveScale={true}
        offsetHalfHeight={true}
        offsetHalfWidth={true}
        borderBase={21}
        className="w-[121px] h-[121px] border-[21px] bg-transparent border-[#EA2678] rounded-full"
      />*/}

      {/*çember*/}
      <PercentPositionedBox
        top={0}
        right={0}
        width={6.5}
        borderPercent={15}
        borderColor="#EA2678"
        darkBorderColor="#EA2678" // Border genişliğinin %15'i kadar olacak
        style={{
          borderRadius: "50%",
          background: "transparent",
          transform: "translate(35%, -25%)",
        }}
        className="-z-[1]"
      />
    </section>
  );
}
