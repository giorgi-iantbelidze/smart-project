"use client";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { FiTrash } from "react-icons/fi";

import styles from "./page.module.css";
import {
  addToCart,
  removeFromCart,
  deleteObject,
} from "@/lib/slices/cartSlice";

const page = () => {
  const cartProducts = useAppSelector((store) => store.cart.items);
  let sum = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].total) {
      sum += cartProducts[i].total;
    } else if (cartProducts[i].quantity == 0) {
      sum = 0;
    } else {
      sum += cartProducts[i].price;
    }
  }
  console.log(cartProducts);

  const dispatch = useAppDispatch();
  const handleAddMore = (item) => {
    dispatch(addToCart(item));
  };
  const dispatch1 = useAppDispatch();
  const handleMinus = (item) => {
    dispatch1(removeFromCart(item));
  };
  const dispatch2 = useAppDispatch();
  const handleDelete = (item) => {
    dispatch2(deleteObject(item));
  };
  return (
    <div className={styles.mainparent}>
      <div className={styles.child}>
        <h1>Shopping Cart</h1>
      </div>
      <div className={styles.child2}>
        <div className={styles.cart}>
          <div className={styles.title}>
            <p>PRODUCT</p>
            <p>QUANTITY</p>
            <p>PRICE</p>
          </div>

          <div className={styles.cards}>
            {cartProducts?.map((item) => (
              <div key={item.id} className={styles.divdiv}>
                <section className={styles.section}>
                  <div className={styles.image}>
                    <Image
                      src={item.image}
                      width={80}
                      height={120}
                      alt={item.title}
                    />
                    <div className={styles.name}>
                      <div>{item.title}</div>
                      <div>price: ${item.price}</div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <button className={styles.plus} onClick={() => handleAddMore(item)}>+</button>
                    <p className={styles.number}>{item.quantity}</p>
                    <button className={styles.minus} onClick={() => handleMinus(item)}>-</button>
                  </div>
                  <div className={styles.price}>
                    <p>${item.total}</p>
                    <p onClick={() => handleDelete(item)}>
                        <FiTrash />
                    </p>
                  
                  
                  </div>
                </section>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.shop}>
          <div className={styles.order}>
            <p className={styles.p}>Order Summary</p>
            <div className={styles.shipping}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className={styles.shipping}>
              <p>Subtotal</p>
              <p>{sum}</p>
            </div>
          </div>
          <div className={styles.applay}>
            <div className={styles.coupon}>
              <p className={styles.coupons}>Have a coupon?</p>
              <p className={styles.couponcode}>Coupon Code</p>
              <div className={styles.applaybutton}>Applay</div>
            </div>
            <div className={styles.total}>
              <p>Total</p>
              <p>{sum}</p>
            </div>
          </div>
          <div className={styles.btn1}>
            <button className={styles.btn2}>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
