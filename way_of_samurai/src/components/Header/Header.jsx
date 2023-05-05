import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img src="https://i.pinimg.com/originals/1b/a8/4f/1ba84f003f3666c1cdd893e536f7cada.jpg" alt=""
				 className={styles.logo}/>
			<div className={styles.loginBlock}>
				{props.isLogIn ? props.login :
					<NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</header>
	);
};

export default Header; 