import React,{useState,useEffect, useContext} from "react";
import useFetchData from "../hooks/fetchData";
import './CartItemFrame.css'
import { CartContext } from "../contexts/CartProvider";

function CartItemFrame({id,quantity}){
    const data = useFetchData();
    const [product, setProduct] = useState({});
    useEffect(() => {
      const foundProduct = data.find((item) => item.id  === Number(id));
      setProduct(foundProduct || {});

    }, [data,id]);
    const {cart , setCart} = useContext(CartContext);
    const deleteItem = ()=>{
        const existingItem = cart.find((item) => item.id === Number(id));
        if (existingItem) {
            console.log("deleting");
            setCart(cart.filter((item) => item.id !== Number(id)));
        } else {
        console.log("Item not found!!!");
        }
        
    }


    return(
        <div className="h-[100px] w-full rounded-sm border-gray-300 border-[1px] flex flex-wrap mt-3">
            <div   
                className="h-[98px] w-[100px] rounded-sm bg-white "
                style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>
            <div className="w-[60%] ">
                <div className="title h-auto text-xl font-semibold">
                    {product.title}
                </div>
                <div className="w-[60%] text-gray-500">
                    quantity:{quantity}
                </div>
                <div className="w-[60%] text-gray-500">
                    cost:${product.price*quantity}
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    deleteItem();
                }} className="bg-red-500 p-0.25 rounded hover:bg-red-600">Remove</button>
            </div>
        </div>
    )
}

export default CartItemFrame;