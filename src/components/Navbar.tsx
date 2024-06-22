import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar bg-base-100 w-[1110px] mx-auto">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <ul className="flex">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/price">Price</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
