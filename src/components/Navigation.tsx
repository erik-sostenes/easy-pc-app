import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.scss";
import CategoriesList  from "./CategoriesList";
import icon from "../../assests/tienda-en-linea.png";


export function Navigation() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__icon}>
                        <li className={styles.header__home}>
                            <Link href="/">
                                <Image src={icon} alt="Icon" />
                            </Link>
                        </li>
                    </ul>
                <CategoriesList/>
                </nav>
            </header>
        </>
        );
}