import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const data = useLoaderData();
    const {bookId} = useParams()
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id)
    console.log(book)

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
      } = book;



    return (
        <div>
            <div className="container mt-4 mx-auto p-4 md:flex md:space-x-8">
      {/* Image Section */}
      <div className="flex justify-center md:w-1/3">
        <img
          src={image}
          alt={`${bookName} Cover`}
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Book Details Section */}
      <div className="md:w-2/3 mt-6 md:mt-0">
        {/* Book Name and Author */}
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{bookName}</h1>
        <p className="text-lg text-gray-700 mb-2">
          By: <span className="font-semibold">{author}</span>
        </p>
        <p className="text-gray-600 font-semibold mb-4">{category}</p>

        {/* Review Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Review:</h2>
          <p className="text-gray-600 text-sm">{review}</p>
        </div>

        {/* Tags Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Tag</h2>
          <div className="flex space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Number of Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
            Read
          </button>
          <button className="bg-teal-100 hover:bg-teal-200 text-teal-600 font-semibold px-4 py-2 rounded">
            Wishlist
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BookDetails;