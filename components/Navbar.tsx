import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image className="hover:animate-spin " src="/logo.png" height={35} width={40} />
                    <span className="hidden sm:block font-bold ml-2 text-primary">
                        UBlog 
                    </span>
                </div>
            </Link>
            <ul className="flex items-center flex-wrap justify-center">
                <li className="hover:border-b-4 hover:rounded-sm hover:border-primary transition ease-in duration-500 mr-2 font-normal text-sm sm:mr-6 sm:font-medium sm:text-base text-gray-600">
                    <a href="#">Products</a>
                </li>
                <li className="hover:border-b-4 hover:rounded-sm hover:border-primary transition ease-in duration-500 mr-2 font-normal text-sm sm:mr-6 sm:font-medium sm:text-base text-gray-600">
                    <a href="#">Docs</a>
                </li>
                <li className="hover:border-b-4 hover:rounded-sm hover:border-primary transition ease-in duration-500 mr-2 font-normal text-sm sm:mr-6 sm:font-medium sm:text-base text-gray-600">
                    <a href="#">Pricing</a>
                </li>
                <li className="hover:border-b-4 hover:rounded-sm hover:border-primary transition ease-in duration-500 mr-2 font-normal text-sm sm:mr-6 sm:font-medium sm:text-base text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className="flex flex-col items-center gap-0.5 sm:gap-3 sm:flex-row">
                <li className="text-sm sm:font-medium sm:text-base text-gray-600">
                    <a href="#" className="hover:text-gray-400">
                        Log in
                    </a>
                </li>
                <li className="font-medium text-gray-600">
                    <a
                        href="#"
                        className="bg-primary font-normal py-1 px-2 text-sm sm:text-base sm:py-2 sm:px-4 sm:font-medium rounded-sm text-white hover:bg-primary-dark transition-all"
                    >
                        Sign up
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar