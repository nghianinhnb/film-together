export const removeUndefind = (obj: any) => {
  for (let key in obj) if (obj[key] === undefined) delete obj[key];
  return obj;
}
