import styles from "./Footer.module.css";
import { FaCreativeCommons } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child1}>
        <p>Conditions of Use</p>
        <p>Privacy notice</p>
        <p>Interest-Bedes Ads</p>
      </div>
      <div className={styles.child2}>
        <FaCreativeCommons />
        <p>1996-2021,Amazon.com, lnc. or its affiliates</p>
      </div>
    </div>
  );
};
export default Footer;