import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    photo,
    item_name,
    category,
    price,
    customization,
    processing_time,
    stock_status,
    rating,
    user_name,
    _id,
  } = product;
  return (
    <Fade>
      <div className="flex flex-coldark:border-b-2 dark:border-white dark:bg-black p-5 md:flex-row border rounded-lg shadow-lg overflow-hidden bg-white max-w-2xl mx-auto">
        <div className="w-full md:w-1/3">
          <img
            src={photo}
            alt={item_name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col p-4 w-full md:w-2/3">
          <h2 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
            {item_name}
          </h2>
         
          <p className="text-lg font-semibold text-green-600 mb-1 dark:text-white">
            Price: ${price}
          </p>

          

          <p className="text-sm text-gray-700 mb-1 dark:text-white">
            Processing Time:{" "}
            <span className="text-gray-800 dark:text-white ">
              {processing_time} days
            </span>
          </p>

          <p
            className={`text-sm font-semibold ${
              stock_status.toLowerCase() === "in stock"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {stock_status}
          </p>

          <div className="flex items-center mt-2">
            <div className="text-yellow-500 text-lg">
              {"★".repeat(Math.floor(rating))}{" "}
              <span className="text-gray-400 ">
                {"★".repeat(5 - Math.floor(rating))}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-white">
              ({rating}/5)
            </span>
          </div>
          <Link to={`/viewDetails/${product._id}`}>
            <button className="font-bold bg-blue-600 p-2 mt-3 w-full text-white rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default ProductCard;
