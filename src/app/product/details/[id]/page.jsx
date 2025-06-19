import Image from "next/image";
import styles from "./page.module.css";

import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

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
        <p>Quantity</p>
        <div>
        
        </div>
          <AddToCartButton product={product}  />
     
        <button className={styles.buy}>Buy Now</button>
      
      </div>
    </div>
  );
};
export default Details;