import createHttpError from "http-errors";
import {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  updateQuiz,
} from "../services/quiz.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getQuizzesCtrl = async (req, res) => {
  const { page, perPage, sortBy, order } = req.query;

  const paginationParams = parsePaginationParams(page, perPage);

  const { quizzes, totalPages, currentPage, total } = await getQuizzes({
    ...paginationParams,
    sortBy,
    order,
  });

  res.json({
    status: 200,
    data: {
      quizzes,
      total,
      totalPages,
      currentPage,
    },
  });
};

export const createQuizCtrl = async (req, res) => {
  const payload = req.body;

  if (!req.user) {
    throw createHttpError(401, "Unauthorized");
  }

  const quiz = await createQuiz({ ...payload, userId: req.user._id });

  res.json({
    status: 201,
    message: "Quiz created",
    data: {
      quiz,
    },
  });
};

export const deleteQuizCtrl = async (req, res) => {
  const { quizId } = req.params;

  await deleteQuiz(quizId);

  res.json({
    status: 204,
    message: "Quiz deleted successfully",
  });
};

export const updateQuizCtrl = async (req, res) => {
  const { quizId } = req.params;
  const payload = req.body;

  const updatedQuiz = await updateQuiz(quizId, payload);

  res.json({
    status: 200,
    message: "Quiz updated successfully",
    data: {
      quiz: updatedQuiz,
    },
  });
};
