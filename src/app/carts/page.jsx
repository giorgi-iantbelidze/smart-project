"use client";

import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import styles from "./page.module.css";
import {addToCart, removeFromCart, deleteObject, totalPrice} from "@/lib/slices/cartSlice";

const page = () =>{
const cartProducts = useAppSelector((store) => store.cart.items);
const cartProducts1 = useAppSelector((store) => store.cart.amount);
// let sum=0;
// for(let i=0; i<=cartProducts.length; i++){
//     if(cartProducts[i].total){
//     sum +=cartProducts[i].total;
//     }
//     else{
//         sum+=cartProducts[i].price;
//     }
// }
// // const cartProducts1 = useAppSelector((store) => store.cart.amount);
console.log(cartProducts);

const dispatch=useAppDispatch();
const handleAddMore= (item) =>{
dispatch(addToCart(item))

}
const dispatch1=useAppDispatch();
const handleMinus= (item) =>{
dispatch1(removeFromCart(item));
}
const dispatch2=useAppDispatch();
const handleDelete=(item) => {
dispatch2(deleteObject(item));
} 
const dispatch3=useAppDispatch();
const handleTotal= (item) => {
dispatch3(totalPrice(item));
} 
    return (
        <div className={styles.parent}>
          
              {cartProducts?.map((item) => (
                  <div  key={item.id} className={styles.container}>
                <h1  >{item.title}</h1>
                <h1>{item.price}</h1>
                <button onClick={() =>    handleAddMore(item)}>plus 1</button>
                <p>{item.quantity}</p>
                <button  onClick={() =>  handleMinus(item)} >minus 1</button>
                <button onClick={() => handleDelete(item)}>x</button>
                <button onChange={() => handleAddMore(item)}>{item.total}</button>
           <button  onClick={() => handleTotal(item)}> click</button>
           <p>{item.totalPrice}</p>
                </div>
            ))}  
                 
                   {/* <p>{cartProducts[0].totalPrice}</p> */}
            {/* <h1>{cartProducts[0]?.title}</h1> */}
            <h1>hallo</h1>
   
            

        </div>
    )

};
export default page;