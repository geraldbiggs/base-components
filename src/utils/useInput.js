export const useInput = (type) => {
  let component = "InputText";

  if (type === "number") component = "InputNumber";
  if (type === "textarea") component = "TextArea";
  if (type === "date") component = "InputDate";
  if (type === "time") component = "InputTime";
  if (type === "text") component = "InputText";
  if (type === "money") component = "InputMoney";
  if (type === "money") component = "InputMoney";

  // const input = resolveComponent(component);

  return component;
};
