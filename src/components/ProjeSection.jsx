import ProjectCard from "./ProjectCard";
import { useAppContext } from "../context/AppContext";
import { useSectionData } from "../hooks/useSectionData";

export default function ProjeSection() {
  const { locale } = useAppContext();
  /*const data = useSelector((state) => state.data);
  const projects = data[locale].projects*/
  const projects = useSectionData("projects");

  if (!projects) return null;

  return (
    <section className="pt-16 pb-14 px-2 md:px-0 lg:pb-30 w-auto mx-auto dark:bg-[#484148]">
      <h2 className="text-4xl font-medium text-center leading-[100%] -tracking-tighter pb-12 text-[#0A0A14] dark:text-white font-inter">
        {locale === "tr" ? "Projeler" : "Projects"}
      </h2>
      <div className="flex flex-col flex-wrap lg:gap-y-24 lg:flex-row gap-14 justify-center items-center">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}
