"use client";

import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoManOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { PiArrowBendRightUp } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
const DATA = [
  { id: 1, title: "product", link: "product" },
  { id: 2, title: "profile", link: "profile" },
  { id: 3, title: "card", link: "carts" },
  
];
const NavBar = () => {
  const [activeTab, setActiveTab] = useState("product");
  return (
    <div className={styles.parent}>
      <div className={styles.child1}>
        <div>Amazon's response to COVID-19</div>
        <div className={styles.icon}>
          <div className={styles.icons}>
            <GrLocation />
            <p>ukraine</p>
            <IoIosArrowDown />
          </div>
          <div className={styles.icons}>
            <RiGlobalLine />
            <p>ENG</p>
            <IoIosArrowDown />
          </div>
          <div className={styles.icons}>
            <p>USD</p>
            <IoIosArrowDown />
          </div>
          <p>Custumer Service</p>
          <p>Sell on Amazon</p>
        </div>
      </div>
      <div className={styles.child2}>
        <div className={styles.iconss}>
          <div className={styles.amazon}>
            <b className={styles.b}>amazon</b>
            <br />
            <div className={styles.arrow}>
              <PiArrowBendRightUp />
            </div>
          </div>
          <div className={styles.navbaritem}>
            {DATA.map((item) => (
              <NavBarItem
                key={item.id}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </div>

        <div className={styles.icons2}>
          <p className={styles.search}>
            <BiSearch />
          </p>

          <input
            type="search"
            className={styles.inputsearch}
            placeholder="Search"
          />
          <p className={styles.search1}>
            <IoManOutline />
            <IoMdHeartEmpty />
            <SlBasket />
          </p>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
