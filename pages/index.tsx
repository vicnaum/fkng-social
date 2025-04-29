import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { IoIosMail } from "react-icons/io";
import FKNGHead from "../components/Head";
import RandomSlogan from "../components/RandomSlogan";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FKNGHead />

      <div className={styles.main}>
        <div className={styles.content}>
          <Image
            src="/FKNG.SOCIAL.svg"
            alt="FKNG.SOCIAL"
            width={302}
            height={36}
            className={styles.logo}
            priority
          />
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
