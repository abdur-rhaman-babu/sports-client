import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EquipCard from "../../components/EquipCard/EquipCard";

const MyEquipList = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  // console.log(products)
  useEffect(() => {
    fetch(`http://localhost:2500/products/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  return (
    <div>
      <div className="text-center mt-24">
      <h2 className="font-bold text-3xl mb-5">My Equipment List</h2>
      <p>My Equipment List showcases all your personal gear, tailored for easy management. <br /> Track, view, and update equipment details in one convenient place.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {products.map((product) => (
          <EquipCard
            key={product._id}
            product={product}
            setProducts={setProducts}
            products={products}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEquipList;
