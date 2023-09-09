import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Faild! 😞");
  }

  return res.json();
};

const Products = async () => {
  const products: ProductType[] = await getData();

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="card w-96 h-96 bg-base-120 shadow-xl mt-20 m-3"
        >
          <figure>
            <Image
              src={product.img || ""}
              alt="cake"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <div className="badge badge-secondary">${product.price}</div>
            </h2>
            <p>{product.description}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
