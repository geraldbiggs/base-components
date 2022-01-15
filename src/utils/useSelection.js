export const useSelection = (type) => {
  let component = "dropdown";

  if (type === "radioGroup") component = "radio-group";
  if (type === "select") component = "select";
  if (type === "buttonToggle") component = "button-toggle";
  if (type === "yesNo") component = "yes-no-buttons";
  if (type === "checkboxGroup") component = "checkbox-group";
  if (type === "dropdown") component = "dropdown";
  if (type === "checkbox") component = "checkbox";
  if (type === "resourceSelect") component = "resourceSelect";

  // const input = resolveComponent(component);

  return component;
};
