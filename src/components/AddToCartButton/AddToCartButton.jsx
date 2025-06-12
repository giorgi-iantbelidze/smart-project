'use client';

import { useAppDispatch } from "@/lib/hooks";
import {addToCart} from "@/lib/slices/cartSlice";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({product}) =>{
    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    console.log( product);
    return (
        <div>
            <button className={styles.addtocard} onClick={handleAddToCart}>Add to Card</button></div>
    );
};
export default AddToCartButton;