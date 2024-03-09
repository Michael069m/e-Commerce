import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/fetchData";
import { CartContext } from "../contexts/CartProvider";
import CartItemFrame from "./CartItemFrame";
import { Link } from "react-router-dom";



function ItemPage(){
    const data = useFetchData();
    const{id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
      const foundProduct = data.find((item) => item.id  === Number(id));
      setProduct(foundProduct || {});
    }, [data,id]);
  
    const {cart,setCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const increment = () =>{
      if(quantity<10)setQuantity(quantity+1);
    }
    const decrement = () =>{
      if(quantity>0)setQuantity(quantity-1);
    }
    const addToCart = (quantity) =>{
      if(quantity!==0){
        const existingItem = cart.find((item) => item.id === Number(id));
        if(existingItem){
          const prevQ = existingItem.quantity;
          console.log("previous quantity: ",prevQ);
          const updatedCart = cart.map((item) => {
            if (item.id === Number(id)) {
              return { ...item,quantity: prevQ+quantity };
            }
            return item;
          });
          setCart(updatedCart)
        }
        else setCart([...cart,{id:product.id , quantity:quantity , price: (product.price*quantity).toFixed(1)}])
      }
    }

    return(
        <div className="bg w-full h-full flex flex-wrap">
            <div
                className="img w-full h-[500px] md:w-[40%] md:h-screen"
                style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'contain',  
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',

                }}
            >
            </div>

            <div className="disc bg-gray-100 w-full md:w-[40%] p-3 ">
                <h1 className="text-3xl font-bold md:mt-8 md:text-5xl">{product.title}</h1>
                <p className="text-gray-700 mt-5 md:text-2xl p-2">{product.description}.</p>
                <form onSubmit={(e)=>{
                      e.preventDefault();
                      addToCart(quantity)
                    }}>
                <div className="flex flex-wrap mt-5 w-full relative text-3xl">
                    <div className="price text-4xl font-bold text-red-600  md:text-4xl">${product.price}</div>
                    <div className="Quantity right-2 md:right-10 absolute flex flex-wrap">
                        <button 
                            className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] bg-gray-200 "
                            onClick={(e)=>{
                              e.preventDefault();
                              increment()}}
                            >+</button>
                        <div className="quantity text-2xl h-[30px] w-[40px] md:w-[50px] md:h-[50px] px-3 md:px-5 bg-gray-100 rounded-none text-center p-2">{quantity}</div>
                        <button 
                            className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] bg-gray-200 "
                            onClick={(e)=>{
                              e.preventDefault();
                              decrement()}}                            >-</button>

                    </div>
                </div>
                <div className=" w-full text-center price text-xl font-bold text-red-600  md:text-4xl mt-7">SubTotal: ${(product.price*quantity).toFixed(1)}</div>
                <div className="flex flex-wrap justify-center m-5">
                  <button 
                    type="submit" 
                    className="w-[350px] h-[60px] bg-yellow-300 rounded-full text-2xl font-medium font-sans md:w-[500px] hover:bg-yellow-500">Add to cart</button>
                </div>
                </form>
            </div>
            <div className="bg-gray-200 hidden md:block md:w-[20%] md:h-screen flex flex-wrap justify-center" >
              <div className={`${cart.length===0 ? "hidden" : "block"} text-center text-4xl font-semibold`}> Cart</div>
              <div className={`${cart.length===0 ? "hidden" : "block"}`}>
                {cart.map((item) => (
                    <Link to={`/item/${item.id}`} key={item.id} className="h-[100px] w-full">
                        <CartItemFrame id={item.id} quantity={item.quantity} />
                    </Link>
                    ))}
              </div>
              <div className={`${cart.length===0 ? "block" : "hidden"} text-gray-400 text-3xl p-4`}>Start buying..</div>
            </div>
        </div>
    )
}
export default ItemPage;
