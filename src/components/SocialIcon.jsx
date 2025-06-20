export default function SocialIcon({ logo, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={`${logo}`}
        alt={alt}
        className="w-8 h-8 object-contain transition-transform hover:scale-110 dark:invert"
      />
    </a>
  );
}
