import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';
import logo from 'assets/navlogo.png';
import { Icon } from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart'

const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Store",
        href: "/catalog"
    },
    {
        title: "Sign In",
        href: "/login"
    }
]

const Navbar = () => {
    const LinksView = links.map(link =>
        <li key={link.title.toLowerCase()}>
                <Link to={link.href} className={styles.navLink}>{link.title}</Link>        
        </li>
    )

    return (
        <div className={styles.Navbar}>
            <div className={styles.navLeft}>
                <div className={styles.NavLogo}>
                    <img src={logo} alt="" />
                </div>
                <ul>
                    {LinksView}
                </ul>
            </div>
            <div className={styles.navCart}>
                <Link to="/cart"><Icon size={30} icon={shoppingCart} /></Link>
                <span className={styles.itemCount}>3</span>
            </div>
        </div>
    )
}

export default Navbar;
