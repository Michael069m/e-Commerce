import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import CartItemFrame from "./CartItemFrame";

function MyCartPage() {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let totalling = 0;
        cart.map((item)=>{
            totalling+=item.quantity*item.price;
        })
        setTotal(totalling);
    },[cart])
    return(
        <div className="w-full h-screen flex justify-center">
            <div className="w-full md:w-[70%] h-screen bg-gray-50 flex flex-wrap relative">
                <div className=" w-full h-[100px] text-center text-4xl p-5 bg-gray-200 font-serif font-bold">Shopping cart</div>
                
                <div className={`${cart.length===0 ? "hidden" : "block"} w-full h-screen`}>
                {cart.map((item) => (
                    <Link to={`/item/${item.id}`} key={item.id} className="h-[100px] w-full">
                        <CartItemFrame id={item.id} quantity={item.quantity} />
                    </Link>
                    ))}
                    <div className="w-full h-[80px] text-center text-4xl p-5 bg-gray-100 flex justify-center items-center  bottom-[80px] absolute rounded-lg">
                        Total: ${total}
                    </div>
                </div>
                <div className={`${cart.length===0 ? "block" : "hidden"} text-gray-400 text-3xl p-4`}>Start buying..</div>
                
                <div className={`${cart.length===0 ? "hidden" : "block"} w-full h-[80px] text-center text-4xl p-5 bg-yellow-300 hover:bg-yellow-400 flex justify-center items-center font-bold bottom-0 absolute rounded-lg`}>
                    Proceed to buy
                </div>
            </div>
        </div>
    )
}

export default MyCartPage;