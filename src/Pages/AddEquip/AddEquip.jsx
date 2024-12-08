import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddEquip = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddEquipment = (e) => {
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

    const product = {
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

    // console.log(product);

    fetch("https://sports-equipment-server-beta.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        Swal.fire({
          title: "success",
          text: "Equipment successfully added",
          icon: "success",
        });
        navigate(-1);
      });
  };
  return (
    <div className="my-10">
      <form
        onSubmit={handleAddEquipment}
        className="md:w-3/4 lg:2/4 mx-auto bg-white shadow-lg p-5 dark:border-2 dark:border-white dark:bg-black dark:text-white"
      >
        <h1 className="text-center text-2xl font-bold mb-3">Add Equipment</h1>
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            <label className="text-xl">Image</label>
            <br />
            <input
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
              type="text"
              name="customization"
              placeholder="customization"
            />
          </div>
          <div>
            <label className="text-xl">Processing Time</label>
            <br />
            <input
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
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
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
              type="text"
              name="user_email"
              placeholder="user email"
              defaultValue={user.email}
              readOnly
            />
          </div>
          <div>
            <label className="text-xl">User Name</label>
            <br />
            <input
              className="border p-2 mt-3 rounded-lg outline-none w-full dark:text-black"
              type="text"
              name="user_name"
              placeholder="user name"
              defaultValue={user.displayName}
              readOnly
            />
          </div>
        </div>
        <div>
          <label className="text-xl">Description</label>
          <br />
          <textarea
            className="w-full p-2 resize-none h-24 outline-none dark:text-black"
            name="description"
            id=""
            placeholder="Description"
          ></textarea>
        </div>
        <input
          className="w-full bg-blue-600 py-2 mt-4 text-white font-bold cursor-pointer"
          type="submit"
          value="Add Eauipment"
        />
      </form>
    </div>
  );
};

export default AddEquip;
