import { FC } from "react";

interface PaginationMenuProps {
  handlePagNextOnClick: () => void;
  handlePagPreOnClick: () => void;
  handlePaginationOnClick: (event: any) => void;
  totalPages: number;
  page: number;
}

const Pagination: FC<PaginationMenuProps> = ({
  handlePagNextOnClick,
  handlePagPreOnClick,
  handlePaginationOnClick,
  totalPages,
  page,
}) => {
  const listPageNumbers = () => {
    const itemsList = [];
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = page === i ? "bg-indigo-200" : "";
      itemsList.push(
        <li
          key={i}
          className={`${activeClass} flex items-center h-10 px-5 text-indigo-600 focus:shadow-outline hover:bg-indigo-100`}
        >
          <button
            className="page-link"
            onClick={handlePaginationOnClick}
            value={i}
          >
            {i}
          </button>
        </li>
      );
    }
    return itemsList;
  };
  return (
    <nav className="flex fixed justify-center border-t bg-gray-100 bottom-0 px-5 z-0 w-full">
      <ul className="inline-flex ">
        <li>
          <button
            className="h-10 px-5 text-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={handlePagPreOnClick}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {listPageNumbers()}
        <li>
          <button
            className="h-10 px-5 text-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={handlePagNextOnClick}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
