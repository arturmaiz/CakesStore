import { MenuType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import UserLinks from "./UserLinks";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories");

  if (!res.ok) {
    throw new Error("Faild! 😞");
  }

  return res.json();
};

const Navbar = async () => {
  const categories: MenuType = await getData();

  return (
    <div className="navbar flex flex-wrap justify-center sm:flex-nowrap md:flex-nowrap lg:flex-nowrap bg-base-100">
      <div className="navbar-start mb-5">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          🎂 CakeMe
        </Link>
      </div>

      <div className="navbar-center mb-5 sm:mb-0">
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <>
            <li>
              <Link href={"/"}>All</Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/cakes/${category.title}`}>{category.title}</Link>
              </li>
            ))}
          </>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex-none gap-2 mr-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>

        <div className="dropdown dropdown-end mr-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src="/images/avatar.svg"
                width={30}
                height={30}
                alt="avatar"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <UserLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
