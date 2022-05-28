import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './IceCreamSlice';



const IceCreamView = () => {
 const { numOfIcecreams } = useSelector((state)=>state.IceCream)

const dispatch= useDispatch()
return(
    <> 
    <h1> Number of Icecreams : {numOfIcecreams}
    </h1>
    <button onClick={()=> dispatch(ordered())}> Order Icecream</button>
    <button onClick={()=> dispatch(restocked())}> Restock Icecream</button>
    
    </>
)
}

export default IceCreamView;