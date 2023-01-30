import Link from "next/link";
import styles from '../styles/Navbar.module.css'
const Navbar = ()=>{
    return(

    <nav className={styles.nav}> 
    <div className={`${styles.container} container` }>
        <div className={styles.logo}>Here put the logo</div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/cart">Cart</Link>
            </li>
        </ul>
        </div>
    </nav>
    )}

    export default Navbar;