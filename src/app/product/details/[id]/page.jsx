// 'use client'
import Image from "next/image";
import styles from "./page.module.css";

// import { useAppDispatch } from "@/lib/hooks";


import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";
// import {
//   addToCart,
//   removeFromCart,
 
// } from "@/lib/slices/cartSlice";
// const dispatch = useAppDispatch();
//   const handleAddMore = (product) => {
//     dispatch(addToCart(product));
//   };
//   const dispatch1 = useAppDispatch();
//   const handleMinus = (product) => {
//     dispatch1(removeFromCart(product));
//   };

const Details = async ({ params }) => {
  const { id } = await params;
   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
   const product = await response.json();
  console.log(product);



  return (
    <div className={styles.parent}>
      <div className={styles.image}>
        <Image
          src={product.image}
          width={250}
          height={300}
          alt={product.title}
        />
      </div>
      <div className={styles.cardinfo}>
        <h1>{product.title}</h1>
        <p>Product price: ${product.price}</p>
        <p>Description: {product.description}</p>
      
           {/* <div className={styles.quantity}>
                    <button className={styles.plus} onClick={() => handleAddMore(product)}>+</button>
                    <p className={styles.number}>quantity: {product.quantity}</p>
                    <button className={styles.minus} onClick={() => handleMinus(product)}>-</button>
                  </div> */}
          <AddToCartButton product={product}  />
     
        <button className={styles.buy}>Buy Now</button>
      
      </div>
    </div>
  );
};
export default Details;