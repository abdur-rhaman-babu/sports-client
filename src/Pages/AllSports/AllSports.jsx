import React from "react";
import { GrView } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const AllSports = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>All Sports equipment:{products.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product._id}>
                <th>{idx+1}</th>
                <td>{product.item_name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td><button className="border-2 p-2 rounded-lg"><GrView /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSports;
