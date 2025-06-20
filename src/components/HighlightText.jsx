import { useHighlight } from "../context/HighlightContext";
import { useAppContext } from "../context/AppContext";

export default function HighlightText({
  text,
  highlight: propHighlight,
  override,
}) {
  const { config, highlightWords } = useHighlight();
  const { locale } = useAppContext();

  const highlight = propHighlight || highlightWords[locale];

  if (!highlight || !text.includes(highlight)) {
    return <p>{text}</p>;
  }

  const startIndex = text.indexOf(highlight);
  const endIndex = startIndex + highlight.length;

  const before = text.slice(0, startIndex);
  const highlighted = text.slice(startIndex, endIndex);
  const after = text.slice(endIndex);

  const cfg = { ...config, ...override };

  return (
    <p className="relative inline-block">
      {before}
      <span className="relative inline-block z-10">
        <span
          className={`absolute ${cfg.color} ${cfg.zIndex} ${cfg.height} ${cfg.width} ${cfg.left} ${cfg.top} ${cfg.borderRadius} ${cfg.darkColor} ${cfg.mdTop}`}
        />
        {highlighted}
      </span>
      {after}
    </p>
  );
}
