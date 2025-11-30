import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  //   console.log(singleBook);
  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = singleBook;
  return (
    <div className="hero bg-base-200 min-h-screen p-4">
      <div className="hero-content flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <img
          src={image}
          className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl object-cover"
        />

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{bookName}</h1>
          <h3 className="text-xl lg:text-2xl mb-4">By : {author}</h3>

          <div className="border-t border-dashed my-2"></div>

          <h3>{category}</h3>
          <div className="border-t border-dashed my-2"></div>

          <p className="py-6">
            <span className="text-2xl font-bold">Review:</span> {review}
          </p>

          <div className="flex gap-3 flex-wrap mb-4">
            {tags.map((tag) => (
              <button key={tag} className="text-[#23BE0A]">
                #{tag}
              </button>
            ))}
          </div>

          <div className="border-t border-dashed my-2"></div>

          <p className="mt-4">
            Pages: <span className="ml-3">{totalPages}</span>
          </p>
          <p className="mt-2">
            Publisher: <span className="ml-3">{publisher}</span>
          </p>
          <p className="mt-2">
            Year: <span className="ml-3">{yearOfPublishing}</span>
          </p>
          <p className="mt-2">
            Rating: <span className="ml-3">{rating}</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="btn bg-[#131313] text-white w-full sm:w-auto">
              Read
            </button>
            <button className="btn bg-[#50B1C9] text-white w-full sm:w-auto">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
