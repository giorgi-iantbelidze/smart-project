"use client";

import { useAppSelector } from "@/lib/hooks";
import styles from "./page.module.css";

const page = () =>{
const cartProducts = useAppSelector((store) => store.cart.items);
console.log(cartProducts);
    return (
        <div className={styles.parent}>
              {cartProducts?.map((item) => (
                <h1  key={item.id}>{item.title}</h1>
            ))}  
            {/* <h1>{cartProducts[0]?.title}</h1> */}
            <h1>hallo</h1>

        </div>
    )

};
export default page;