import { FaRegTimesCircle } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate()
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
    <div>
      <div className="lg:flex relative items-center justify-between my-10 rounded-lg border-2 p-5 lg:w-3/4 lg:h-[400px] mx-auto">
      <i onClick={()=> navigate(-1)} className="absolute top-5 right-5 cursor-pointer"><FaRegTimesCircle size={35} /></i>
        <div className="lg:w-2/4 h-full">
          <img className="h-full" src={photo} alt="" />
        </div>
        <div className="w-2/4">
          <ul>
            <li>
              <span className="font-bold">Name: </span>
              {item_name}
            </li>
            <li>
              <span className="font-bold">Category: </span>
              {category}
            </li>
            <li>
              <span className="font-bold">Rating: </span>
              {rating}
            </li>
            <li>
              <span className="font-bold">Customization: </span>
              {customization}
            </li>
            <li>
              <span className="font-bold">Price: </span>${price}
            </li>
            <li>
              <span className="font-bold">Stock-status: </span>
              {stock_status}
            </li>
            <li>
              <span className="font-bold">Processing-Time: </span>
              {processing_time} day
            </li>
            <li>
              <span className="font-bold">User Email: </span>
              {user_email}
            </li>
            <li>
              <span className="font-bold">User Name: </span>
              {user_name}
            </li>
            <li>
              <span className="font-bold">Description: </span>
              {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
