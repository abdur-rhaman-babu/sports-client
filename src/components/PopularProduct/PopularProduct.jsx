import { Fade } from "react-awesome-reveal";
import { FaShoppingCart } from "react-icons/fa";

const PopularProduct = () => {
  const sportsEquipments = [
    {
      id: 1,
      name: "Cricket Bat",
      price: 49,
      brand: "SS",
      photo: "https://i.ibb.co.com/0CKZg4b/ss-bat.jpg",
      category: "Cricket",
    },
    {
      id: 2,
      name: "Football",
      price: 14,
      brand: "Nike",
      photo: "https://i.ibb.co.com/tzcDqTR/football.jpg",
      category: "Football",
    },
    {
      id: 3,
      name: "Tennis Racket",
      price: 39,
      brand: "Wilson",
      photo: "https://i.ibb.co.com/vv8pYQF/tannis-racket.jpg",
      category: "Tennis",
    },
    {
      id: 4,
      name: "Basketball",
      price: 17,
      brand: "Spalding",
      photo: "https://i.ibb.co.com/hYGgyLD/bascketball.jpg",
      category: "Basketball",
    },
  ];
  return (
    <Fade cascade damping={0.1}>
      <div>
        <h1 className="text-center font-bold text-3xl my-5">
          Most Popular Product
        </h1>
        <p className="text-center my-5">
          Welcome to our website. Here you can get any sports accssories easily.
          Have you nice visit. <br /> You can buy any product for online.{" "}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {sportsEquipments.map((equip) => (
            <div key={equip.id} className="border-2 p-2 rounded-lg">
              <img className="h-[250px] w-full" src={equip.photo} alt="" />
              <p className="bg-blue-600 text-white text-center py-2 font-bold">
                {equip.name}
              </p>
              <div className="bg-white flex justify-between">
                <p className="dark:text-black">
                  <span className="font-bold">Brand Name:</span> {equip.brand}
                </p>
                <p className="text-red-600">
                  <span className="font-bold">Price:</span> ${equip.price}
                </p>
              </div>
              <div className="bg-orange-600 py-2 cursor-pointer text-white font-bold flex justify-center">
                <FaShoppingCart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default PopularProduct;
