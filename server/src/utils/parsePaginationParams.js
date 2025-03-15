import { parseNumber } from "./parseNumber.js";

export const parsePaginationParams = (page, perPage) => {
  return {
    page: parseNumber(page) ?? 1,
    perPage: parseNumber(perPage) ?? 10,
  };
};
