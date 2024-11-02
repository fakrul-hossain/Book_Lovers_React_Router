import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;

  return (
    <div>
     <Link to={`/books/${bookId}`}>
     <div className="max-w-[24rem] mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-3">
        {/* Image Section */}
        <div className="bg-gray-100 p-6 rounded-xl flex justify-center">
          <img
            src={image}
            alt={`${bookName} Cover`}
            className="w-64 h-64 rounded-xl"
          />
        </div>

        {/* Tags Section */}
        <div className="flex justify-center space-x-2 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Author */}
        <div className="px-6 pb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{bookName}</h3>
          <p className="text-gray-600 text-sm">By: {author}</p>
        </div>

        {/* Category and Rating */}
        <div className="px-6 pb-6 flex justify-between items-center border-t border-gray-300 pt-4">
          <span className="text-gray-600 text-sm">{category}</span>
          <div className="flex items-center">
            <span className="text-gray-900 font-semibold mr-1">{rating.toFixed(2)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-600"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
     </Link>
    </div>
  );
};


export default Book;



Book.propTypes = {
    book: PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      review: PropTypes.string,
      totalPages: PropTypes.number,
      rating: PropTypes.number.isRequired,
      category: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired
  };
