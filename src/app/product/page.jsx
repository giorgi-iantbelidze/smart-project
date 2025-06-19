
"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";
const Product = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();



  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
const [num1, setNum1]=useState(0);
const [num2, setNum2]= useState(1000);
let array=[];
for(let i=0; i<products.length; i++){
  if(products[i].price>num1&&products[i].price<num2){
    array.push(products[i]);
  };
}
const onChange1 = (e) => {
 setNum1(e.target.value);

}
const onChange2 = (e) => {
 setNum2(e.target.value);

}
  return (
    <div className={styles.parent}>
      <div className={styles.qwert}>
        <div className={styles.qwer}>
 <p className={styles.filterbyprice}>Filter by price</p>
        <div className={styles.from}>
        <label htmlFor="">from:</label>
        <input 
        className={styles.inputs} 
        type="number" 
        value={num1}
        onChange={onChange1}></input>
        </div>
        <div className={styles.to}>
       <label htmlFor="">to:  </label>
       
        <input
        className={styles.inputs} 
        type="number"
        value={num2}
        onChange={onChange2}></input>
     </div>
        </div>
       
      </div>
      {array.map((product) => (
        <section key={product.id} className={styles.itemContainer}>
          <Image
            src={product.image}
            width={80}
            height={120}
            alt={product.title}
          />
          <h3 className={styles.titles}>{product.title}</h3>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.priceWrapper}>
            <p>${product.price}</p>
            <button
              className={styles.button1}
              onClick={() => router.push(`/product/details/${product.id}`)}
            >
              see details
            </button>
             <AddToCartButton product={product}/>
          </div>
        </section>
      ))}
    </div>
  );
};
export default Product;

