import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import FKNGHead from "../components/Head";
import RandomSlogan from "../components/RandomSlogan";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FKNGHead />

      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.logo}>FKNG.SOCIAL</h1>
          <RandomSlogan />
        </div>
        <div className={styles.social}>
          <a href="mailto:contact@fkng.pro" rel="noreferrer" title="email">
            <IoIosMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
