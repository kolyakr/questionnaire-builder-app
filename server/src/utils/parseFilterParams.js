import { getQuizzesQueryParams } from "../constants/index.js";

export const parseFilterParams = (sortBy, order) => {
  const isSortByValid = getQuizzesQueryParams.includes(sortBy.toLowerCase());
  const isOrderValid = ["asc", "desc"].includes(order.toLowerCase(0));

  return {
    sortBy: isSortByValid ? sortBy : null,
    order: isOrderValid ? order : null,
  };
};
