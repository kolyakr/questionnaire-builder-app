export const parseNumber = (unknown) => {
  if (typeof unknown !== "string" || unknown.trim() === "") {
    return null;
  }

  const number = Number(unknown);

  return Number.isInteger(number) ? number : null;
};
