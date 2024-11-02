
import bannerImg from "../../assets/bannerBooks.png";
import bannerImg2 from "../../assets/books.png";
const Banner = () => {
    return (
        <div>
            <div className=" px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 rounded-lg flex flex-col sm:flex-row items-center">
      {/* Text Section */}
      <div className="text-center sm:text-left sm:w-1/2 mb-6 sm:mb-0">
        <h2 className="text-2xl leading-loose sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Books to freshen up
          
          <br /> your bookshelf
        </h2>
        <button className="bg-green-600 mt-[48px] text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          View The List
        </button>
      </div>

      {/* Image Section */}
      <div className="sm:w-1/2 flex justify-center sm:justify-end">
        <img
          src={bannerImg} // Replace with actual image URL
          alt="Book Cover"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64"
        />
        <img
          src={bannerImg2} // Replace with actual image URL
          alt="Book Cover"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64"
        />
      </div>
    </div>
        </div>
    );
};

export default Banner;