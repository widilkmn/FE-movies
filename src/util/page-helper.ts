import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handlePageNext = (page: string) => {
  const numPage = Number(page);
  navigate(`?page=${numPage + 1}`);
};

const handlePageBack = (page: string) => {
  const numPage = Number(page);
  navigate(`?page=${numPage > 1 ? numPage - 1 : numPage}`);
};

export { handlePageBack, handlePageNext };
