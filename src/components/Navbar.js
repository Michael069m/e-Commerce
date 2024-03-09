import React from "react";
import { Link } from "react-router-dom";


function Navbar(){



    

    return(
        <div className="navbar w-full h-[60px] bg-black text-white list-none flex gap-4 justify-center items-center text-xl">
            <li><Link to="/">Home</Link></li>
            <li >
                Categories
                <ul className="absolute opacity-0 bg-gray-100 text-black list-none mt-4 p-2 ">
                    <li>Electronics</li>
                    <li>Jewelery</li>
                    <li>Men's clothing</li>
                    <li>Women's clothing</li>
                </ul>
            </li>
            <li> <Link to="/mycart">My Cart</Link> </li>

        </div>
    )
}

export default Navbar;