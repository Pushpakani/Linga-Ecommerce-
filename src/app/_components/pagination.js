"use client";

import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <nav
        className="flex items-center gap-2 sm:gap-3 flex-wrap"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded border text-[0.625rem] md:text-base transition-opacity duration-150 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-[0.625rem] md:text-base">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded border text-[0.625rem] md:text-base transition-opacity duration-150 disabled:opacity-50"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;
