export const print = <T extends object>(element: T, text: string) => {
  let propText = "";
  for (const propName in element) {
    element[propName];
    propText += `${propName}:${element[propName]} `;
  }
  console.log(`${text}: ${propText}`);
};
