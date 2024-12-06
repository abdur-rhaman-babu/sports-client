import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EquipCard from "../../components/EquipCard/EquipCard";
import { Fade, Slide } from "react-awesome-reveal";
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
      <div className="text-center mt-5">
        <Fade>
        <h2 className="font-bold text-3xl mb-5">My Equipment List</h2>
        <p>My Equipment List showcases all your personal gear, tailored for easy management. <br /> Track, view, and update equipment details in one convenient place.</p>
        </Fade>
      </div>
      <Slide>
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
      </Slide>
    </div>
  );
};

export default MyEquipList;
