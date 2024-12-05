import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const product = useLoaderData();
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
    user_email,
    description,
    _id,
  } = product;

  const handleUpdateEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const item_name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const rating = form.rating.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const description = form.description.value;

    const UpdateProduct = {
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
    };

    console.log(UpdateProduct);

  };
  return (
    <div className="my-10">
      <form
        onSubmit={handleUpdateEquipment}
        className="md:w-3/4 lg:2/4 mx-auto bg-gray-300 p-5"
      >
        <h1 className="text-center text-2xl font-bold mb-3">Update Equipment</h1>
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            <label className="text-xl">Image</label>
            <br />
            <input
              defaultValue={photo}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="photo"
              placeholder="photo url"
              required
            />
          </div>
          <div>
            <label className="text-xl">Item Name</label>
            <br />
            <input
              defaultValue={item_name}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="name"
              placeholder="Item name"
              required
            />
          </div>
          <div>
            <label className="text-xl">Category</label>
            <br />
            <input
              defaultValue={category}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="category"
              placeholder="category"
              required
            />
          </div>
          <div>
            <label className="text-xl">Price</label>
            <br />
            <input
              defaultValue={price}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="price"
              placeholder="price"
              required
            />
          </div>
          <div>
            <label className="text-xl">Customization</label>
            <br />
            <input
              defaultValue={customization}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="customization"
              placeholder="customization"
            />
          </div>
          <div>
            <label className="text-xl">Processing Time</label>
            <br />
            <input
              defaultValue={processing_time}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="processing_time"
              placeholder="processing time"
              required
            />
          </div>

          <div>
            <label className="text-xl">Stock Status</label>
            <br />
            <select
              // defaultValue={stock_status}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              name="stock_status"
              id=""
              required
            >
              <option value="In stock">In Stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
          </div>
          <div>
            <label className="text-xl">Rating</label>
            <br />
            <input
              defaultValue={rating}
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="rating"
              placeholder="rating"
              required
            />
          </div>
          <div>
            <label className="text-xl">User Email</label>
            <br />
            <input
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="user_email"
              placeholder="user email"
              defaultValue={user_email}
              readOnly
            />
          </div>
          <div>
            <label className="text-xl">User Name</label>
            <br />
            <input
              className="border p-2 mt-3 rounded-lg outline-none w-full"
              type="text"
              name="user_name"
              placeholder="user name"
              defaultValue={user_name}
              readOnly
            />
          </div>
        </div>
        <div>
          <label className="text-xl">Description</label>
          <br />
          <textarea
            defaultValue={description}
            className="w-full p-2 resize-none h-24 outline-none"
            name="description"
            id=""
            placeholder="Description"
          ></textarea>
        </div>
        <input
          className="w-full bg-black py-2 mt-4 text-white font-bold cursor-pointer"
          type="submit"
          value="Update Eauipment"
        />
      </form>
    </div>
  );
};

export default UpdateList;