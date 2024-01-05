import React from 'react';
import ReactPaginate from 'react-paginate';
import { NUMBER } from '../../constant/number'

const CustomPagination = ({
  countTotal, pageSelected, setPageSelected, totalEntries,
}) => {
  const getPageSummeryTxt = (currentPage, total, limit = NUMBER.TEN) => {
    let toParams = currentPage * limit;
    if (toParams > total) {
      toParams = total;
    }
    const firstCount = total === NUMBER.ZERO ? NUMBER.ZERO : NUMBER.ONE;
    return `Showing ${(currentPage - NUMBER.ONE) * limit + firstCount
    } to ${toParams} of ${total} entries`;
  };

  const handlePageClick = (e) => {
    const currentPage = e.selected + NUMBER.ONE || e?.target?.innerText;
    setPageSelected(currentPage);
    getPageSummeryTxt(pageSelected, totalEntries);
  };

  return (
    <div className="custom-pagination">
      {totalEntries >= NUMBER.TEN
      && (
        <div className="custom-pagination-wrap">
          <div className="pagination-left">{getPageSummeryTxt(pageSelected, totalEntries)}</div>
          <div
            className="pagination-right"
          >
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              forcePage={+pageSelected - NUMBER.ONE}
              onPageChange={(e) => handlePageClick(e)}
              pageRangeDisplayed={NUMBER.ONE}
              pageCount={countTotal}
            />
          </div>
        </div>
      )}

    </div>
  );
};
export default CustomPagination;
