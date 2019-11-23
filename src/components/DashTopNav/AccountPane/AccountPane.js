import React from 'react';
import styles from '../DashTopNav.module.css';
import { Link } from 'react-router-dom'
import nullGravatar from '../../../assets/images/nullGravatar.png';

const AccountPane = ({isLoggedIn, logMeOut, avatar}) => {

    return (
 		<div className={`${styles.navLinks} ${styles.accountDrop}`} >
 			<span>
            	<img alt='account' src={avatar?avatar:nullGravatar} className={styles.accountPic} />
            </span>
            <ul className={styles.dropdown}>
   	 			<Link 
		            to='/dash/profile'
		            className=''>
	            	<li>Edit Profile</li>
	          	</Link>
	          	<Link 
		            to='/dash/reset/pass'
		            className=''>
		            <li>Reset Password</li>
	          	</Link>
                {(isLoggedIn)?
		          <Link 
		            to='/login'
		            onClick={() => logMeOut()}
		            className=''>
		            <li>Logout</li>
		          </Link>
		          :
		          <Link 
		            to='/login'
		            className=''>
		            <li>Login</li>
		          </Link>
		        }
            </ul>
 		</div>
    );
}

export default AccountPane;
