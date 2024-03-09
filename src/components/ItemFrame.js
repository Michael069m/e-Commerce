import React from 'react';
import './ItemFrame.css'; 
function ItemsFrame({
    item
}){

    return(
        <div className='ff w-[100%] '>

            <div className="w-full h-[200px]" >
                <div className="top-0 left-0 w-full h-[60%] bg-white "
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className='border-white border-[1px] w-full h-[40%]'>
                    <div className='title font-serif font-medium'>{item.title}</div>
                    <div className='flex flex-wrap relative p-1'>
                        <div className='fo font-bold'>${item.price}</div>
                        <div className='ag right-1 absolute font-medium'>rate: <span className='font-bold'>{item.rating.rate}</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemsFrame;