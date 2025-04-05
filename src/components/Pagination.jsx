import PropTypes from 'prop-types';

const Pagination = ({ total, limit, skip, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const handlePageClick = (page) => {
    const newSkip = (page - 1) * limit;
    onPageChange(newSkip);
  };

  return (
    <div className="flex justify-center items-center space-x-3 mt-10">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          onClick={() => handlePageClick(idx + 1)}
          className={`px-5 py-2 rounded-full transition-colors ${
            currentPage === idx + 1
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
