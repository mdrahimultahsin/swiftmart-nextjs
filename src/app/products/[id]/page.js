import React from "react";
import products from "../products.json";
import Link from "next/link";
import Image from "next/image";
const ProductDetails = ({params}) => {
  const id = params.id;

  const singleProduct = products.find((p) => p.id === parseInt(id));
  if (!singleProduct) return <div>Product not found</div>;
  return (
     <div className="mx-8 my-10 p-6 bg-base-100 rounded-lg shadow-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={singleProduct?.image}
            alt={singleProduct?.name}
            width="300"
            height="300"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div>
            <span className="badge badge-secondary text-black mb-2">{singleProduct.category}</span>
            <h1 className="text-3xl font-bold mb-4 text-primary">{singleProduct.name}</h1>
            <p className="text-secondary-content mb-4">{singleProduct.description}</p>
            <p className="text-green-600 text-2xl font-semibold mb-6">${singleProduct.price}</p>
            {/* Actions */}
          <div className="flex gap-4">
            <button className="btn btn-primary">Add to Cart</button>
            <Link href="/products" className="btn btn-outline">
              Back to Products
            </Link>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
