import { useSectionData } from "../hooks/useSectionData";
import ResponsiveShape from "./ResponsiveShape";

export default function SkillsSection() {
  /*const { locale } = useAppContext();
  const data = useSelector((state) => state.data);
  const skillsSection = data[locale].skillsSection;*/
  const skillsSection = useSectionData("skillsSection");

  if (!skillsSection) return null;

  return (
    <section className="releative z-0 py-12 px-2 md:px-0 w-auto mx-auto relative dark:bg-[#484148]">
      <div className="flex flex-col md:flex-col items-center justify-end gap-6 max-w-[932px] mx-auto  pt-8 pb-10">
        <h2 className="font-inter text-5xl leading-[100%] tracking-[0.025em] items-center justify-center md:text-5xl font-medium pb-6 text-[#0A0A14] dark:text-[#F4F4F4]">
          {skillsSection.title}
        </h2>
        <div className="flex flex-wrap md:flex-row gap-6 justify-center items-center">
          {skillsSection.skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center w-32">
              <img
                src={`${skill.icon}`}
                alt={skill.name}
                className="w-30 h-30 object-cover"
              />
              <span className="font-medium text-2xl font-inter leading-[150%] text-[#777777] dark:text-[#D9D9D9] text-center pt-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveShape
        xPercent={0.66}
        yPercent={0.0}
        offsetHalfHeight={true}
        responsiveScale={true}
        maxSize={121}
        minSize={36}
        borderBase={20}
        className="w-[121px] h-[121px] border-[20px] bg-transparent border-[#D9D9D9] dark:border-[#525252] rounded-full"
      />
      <ResponsiveShape
        xPercent={0.0}
        bottomPercent={0.1}
        offsetHalfWidth={true}
        maxSizeH={49}
        maxSizeW={181}
        minSizeH={20}
        minSizeW={100}
        responsiveScale={true}
        className="w-[181px] h-[49px] bg-[#525252] rounded-[30px]"
      />
    </section>
  );
}
