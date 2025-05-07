import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-zinc-700 text-white  ">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-zinc-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold  ">
                RENT
                <span className="text-rose-500 font-light hover:!text-zinc-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-zinc-200 hidden md:block">
          Discover your perfect rental appartment with our advanced search
        </p>
        <div className="flex gap-5 items-center">
          <Link href="/signin">
          <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-zinc-700 rounded-lg">
            Sign In

          </Button>
          
          </Link>
          <Link href="">
          <Button variant="secondary" className="text-white border-white bg-rose-700 hover:bg-white hover:text-zinc-700 rounded-lg">
            Sign Up

          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
