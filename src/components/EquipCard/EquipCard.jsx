import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const EquipCard = ({ product, products, setProducts }) => {
  const {
    photo,
    item_name,
    category,
    price,
    customization,
    processing_time,
    stock_status,
    rating,
    user_email,
    user_name,
    description,
  } = product;
  return (
    <div className="flex flex-col p-5 md:flex-row border rounded-lg shadow-lg overflow-hidden bg-white max-w-2xl mx-auto">

      <div className="w-full md:w-1/3">
        <img
          src={photo}
          alt={item_name}
          className="h-full w-full object-cover"
        />
      </div>

 
      <div className="flex flex-col p-4 w-full md:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item_name}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-lg font-semibold text-green-600 mb-1">
          Price: ${price}
        </p>

        {customization && (
          <p className="text-sm text-gray-700 mb-1">
            Customization: <span className="text-blue-600">Available</span>
          </p>
        )}

        <p className="text-sm text-gray-700 mb-1">
          Processing Time:{" "}
          <span className="text-gray-800">{processing_time} days</span>
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
            <span className="text-gray-400">
              {"★".repeat(5 - Math.floor(rating))}
            </span>
          </div>
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>

        {/* <p className="text-gray-700 mt-2 line-clamp-3">{description}</p> */}

        <div className="mt-4 text-sm text-gray-500">
          <p>Submitted by: {user_name}</p>
        </div>
        <div className="flex gap-3 items-center mt-3"> 
            <button className="text-green-400"><FaRegEdit size={30}/></button>
            <button className="text-red-600"><FaDeleteLeft size={30}/></button>
        </div>
      </div>
    </div>
  );
};

export default EquipCard;