import React, { useEffect } from "react";
import { AppProvider, useAppContext } from "./context/AppContext";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import { HighlightProvider } from "./context/HighlightContext.jsx";
import ProjectCarousel from "./components/ProjectCarusel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/actions/dataActions.js";
import LoadingFullScreen from "./components/LoadingFullScreen.jsx";
import { ToastContainer } from "react-toastify";

function AppInner() {
  const { theme } = useAppContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading)
    return (
      <div>
        <LoadingFullScreen></LoadingFullScreen>
      </div>
    );
  if (error) return <div>Hata: {error}</div>;

  return (
    <main className="overflow-x-hidden">
      <HeroSection></HeroSection>
      <SkillsSection></SkillsSection>
      <AboutSection></AboutSection>
      <ProjectCarousel></ProjectCarousel>
      <FooterSection></FooterSection>
      <ToastContainer></ToastContainer>
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HighlightProvider>
        <AppInner />
      </HighlightProvider>
    </AppProvider>
  );
}
