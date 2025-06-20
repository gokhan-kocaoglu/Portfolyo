import { useSelector } from "react-redux";
import { useAppContext } from "../context/AppContext";
import { selectSection } from "../selectors/dataSelectors";

export function useSectionData(section) {
  const { locale } = useAppContext();
  return useSelector(selectSection(section)(locale));
}
