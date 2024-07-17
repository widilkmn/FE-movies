import { NavigateFunction } from "react-router-dom";

export const handlePageNext = (page: string, navigate: NavigateFunction) => {
  const numPage = Number(page);
  navigate(`?page=${numPage + 1}`);
};

export const handlePageBack = (page: string, navigate: NavigateFunction) => {
  const numPage = Number(page);
  navigate(`?page=${numPage > 1 ? numPage - 1 : numPage}`);
};
