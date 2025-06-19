"use client";
import { useRouter} from "next/navigation";
import styles from "./NavBar.module.css";
import { MdFindReplace } from "react-icons/md";
const NavBarItem = ({ item, activeTab, setActiveTab }) => {
  const router = useRouter();
  const click = () => {
    setActiveTab(item.title);
    router.push(`/${item.link}`);
  };
  return (
    <button
      className={activeTab === item.title ? styles.btn1 : styles.btn2}
      onClick={click}
    >
      <p className="style.word">{item.title}</p>
    </button>
  );
};
export default NavBarItem;
