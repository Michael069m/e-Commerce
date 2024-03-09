import useFetchData from '../hooks/fetchData';
import ItemsFrame from './ItemFrame';
import { Link } from "react-router-dom";
import './Home.css'

function Home(){
    let data = useFetchData();
    return(
        <>
            <div className='flex flex-wrap justify-center'>
                <div className='bg-gray-100 w-full h-screen p-8 flex flex-wrap gap-5'>
                {data.map((item) => (
                    <Link to={`/item/${item.id}`} key={item.id} className='frame w-[15%]'>
                        <ItemsFrame item={item} />
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;