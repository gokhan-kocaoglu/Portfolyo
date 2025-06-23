import { useAppContext } from "../context/AppContext";
import useToastRedirect from "../hooks/useToastRedirect";
import React from "react";

export default function SocialIcon({ logo, alt, link }) {
  const { locale } = useAppContext();
  const handleClick = useToastRedirect({
    toastMessage: (alt, s) =>
      locale === "tr"
        ? `${s} sn sonra ${alt} sayfasına yönlendirileceksiniz...`
        : `You will be redirected to ${alt} page in ${s} seconds...`,
    loadingMessage: locale === "tr" ? "Yönlendiriliyor..." : "Redirecting...",
  });
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => handleClick(e, { href: link, alt })}
    >
      <img
        src={`${logo}`}
        alt={alt}
        className="w-8 h-8 object-contain transition-transform hover:scale-110 dark:invert"
      />
    </a>
  );
}
