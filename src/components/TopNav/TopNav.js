import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './TopNav.module.css';

const TopNav = () => {
	return (
		<nav className={styles.topNav}>
			<div className={styles['nav-left']}>
				<img src={logo} className={styles.logo} alt='logo' />
				<Link to='/dashboard'>HealthHub</Link>
				<Link to='/solutions'>Solutions</Link>
				<Link to='/pricing'>Pricing</Link>
				<Link to='/help'>Help</Link>
			</div>
			<div className={styles["nav-right"]}>
				<Link to='/'>Login</Link>
				<Link to='/register'>Register</Link>
			</div>
		</nav>
	);
}

export default TopNav;
