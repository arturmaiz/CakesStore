import Image from "next/image";
import React from "react";
import { ProductType } from "@/types/types";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const Product = async ({ params }: { params: { id: string } }) => {
  const product: ProductType = await getData(params.id);
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card w-96 bg-transparent shadow-xl">
            <figure>
              <Image
                src={product.img || ""}
                alt={product.title}
                width={300}
                height={400}
                style={{ objectFit: "contain", width: "auto" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.title}
                <div className="badge badge-secondary">${product.price}</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{product.catSlug}</div>
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
