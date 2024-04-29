import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Pagination = ({ tableProps, sizePerPageList }) => {
    const [pageCount, setPageCount] = useState(tableProps.pageCount);
  const [pageIndex, setPageIndex] = useState(tableProps.state.pageIndex);

  useEffect(() => {
    setPageCount(tableProps.pageCount);
    setPageIndex(tableProps.state.pageIndex);
  }, [tableProps.pageCount, tableProps.state.pageIndex]);

  const filterPages = useCallback((visiblePages, totalPages) => {
    return visiblePages.filter((page) => page <= pageCount);
  }, [pageCount]);

  const getVisiblePages = useCallback((page, total) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  }, [filterPages]);

  const changePage = (page) => {
    const activePage = pageIndex + 1;
    if (page === activePage) {
      return;
    }
    const visiblePages = getVisiblePages(page, pageCount);
    tableProps.gotoPage(page - 1);
  };

  useEffect(() => {
    const visiblePages = getVisiblePages(null, pageCount);
    setVisiblePages(visiblePages);
  }, [pageCount, getVisiblePages]);

  const [visiblePages, setVisiblePages] = useState(
    getVisiblePages(null, pageCount)
  );
  const activePage = pageIndex + 1;

  return (
    <div className="d-lg-flex align-items-center text-center pb-1">
      {sizePerPageList.length > 0 && (
        <div className="d-inline-block me-3">
          <label className="me-1">Display :</label>
          <select
            value={tableProps.state.pageSize}
            onChange={(e) => {
              tableProps.setPageSize(Number(e.target.value));
            }}
            className="form-select d-inline-block w-auto"
          >
            {sizePerPageList.map((pageSize, index) => {
              return (
                <option key={index} value={pageSize.value}>
                  {pageSize.text}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <span className="me-3">
        Page <strong>{pageIndex + 1} of {tableProps.pageOptions.length}</strong>{" "}
      </span>

      <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
        <label>Go to page : </label>
        <input
          type="number"
          value={pageIndex + 1}
          min="1"
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            tableProps.gotoPage(page);
            setPageIndex(tableProps.state.pageIndex);
          }}
          className="form-control w-25 ms-1 d-inline-block"
        />
      </span>

      <ul className="pagination pagination-rounded d-inline-flex ms-auto">
        <li
          key="prevpage"
          className={`page-item paginate_button previous ${
            activePage === 1 ? "disabled" : ""
          }`}
          onClick={() => {
            if (activePage === 1) return;
            changePage(activePage - 1);
          }}
        >
          <Link to="#" className="page-link">
            <i className="uil uil-angle-left"></i>
          </Link>
        </li>
        {visiblePages.map((page, index, array) => {
          return array[index - 1] + 1 < page ? (
            <React.Fragment key={page}>
              <li className="page-item disabled d-none d-xl-inline-block">
                <Link to="#" className="page-link">
                  ...
                </Link>
              </li>
              <li
                className={`page-item d-none d-xl-inline-block ${
                  activePage === page ? "active" : ""
                }`}
                onClick={() => changePage(page)}
              >
                <Link to="#" className="page-link">
                  {page}
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <li
              key={page}
              className={`page-item d-none d-xl-inline-block ${
                activePage === page ? "active" : ""
              }`}
              onClick={() => changePage(page)}
            >
              <Link to="#" className="page-link">
                {page}
              </Link>
            </li>
          );
        })}
        <li
          key="nextpage"
          className={`page-item paginate_button next ${
            activePage === tableProps.pageCount ? "disabled" : ""
          }`}
          onClick={() => {
            if (activePage === tableProps.pageCount) return;
            changePage(activePage + 1);
          }}
        >
          <Link to="#" className="page-link">
            <i className="uil uil-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default Pagination;