export const selectSection = (section) => (locale) => (state) => {
  return state.data?.[locale]?.[section];
};