import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-500">₹{price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
