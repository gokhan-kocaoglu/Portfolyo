import arrowRightIcon from "../assets/images/arrow-right.svg";
import { useAppContext } from "../context/AppContext";

export default function ProjectCard({ project }) {
  const { locale } = useAppContext();
  return (
    <div
      className={`relative flex-1 rounded-2xl ${project.bg} p-10 flex flex-col md:h-[670px] max-w-[500px] justify-center items-start`}
    >
      <div className="max-w-[370px]">
        <h3 className="font-playFair text-[29px] leading-[100%] text-black dark:text-white tracking-wider font-bold pt-5 pb-6">
          {project.title}
        </h3>
        <p className="font-inter font-normal text-[16px] leading-[150%] tracking-normal text-black dark:text-white pb-8">
          {project.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-3 pb-8 max-w-[270px]">
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#525252] px-4 py-2 pb-2.5 rounded-[76px] font-playFair text-[16px] leading-none tracking-wider font-bold text-black flex items-center justify-center"
            >
              <span className="text-black dark:text-white">{tag}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Butonlar */}
      <div className="flex flex-wrap gap-y-4 justify-between items-center pb-10 w-full md:w-[420px] font-semibold">
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-inter text-[20px] font-semibold leading-[150%] tracking-normal text-black dark:text-white"
          >
            {locale === "en" ? "View on Github" : "Github'da görüntüle"}
          </a>
        </div>
        <div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group font-inter text-[20px] font-semibold leading-[150%] tracking-normal  text-black dark:text-white"
          >
            {locale === "en" ? "Go to app " : "Uygulamaya Git "}
            <img
              src={arrowRightIcon}
              alt=""
              className="w-6 h-6 transition-transform group-hover:translate-x-2 dark:invert"
            />
          </a>
        </div>
      </div>
      {/* Görsel */}
      <div className="flex-1 lg:w-full lg:max-w-[500px] lg:max-h-[287px] lg:mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-[500px] lg:absolute left-1/2 lg:-translate-x-1/2 lg:bottom-[-46px] lg:max-w-[500px] object-contain"
        />
      </div>
    </div>
  );
}
