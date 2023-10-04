import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/logo.png"
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                  
                  <Link href="/">
                        <Image src={logo} alt="logo" height={50} width={150} />
                  </Link>

            </div>
            <Nav/>

        </header>
    );
};

export default Header;