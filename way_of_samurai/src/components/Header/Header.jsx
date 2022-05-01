import styles from './Header.module.css'; 

function Header() {
    return (
        <header className={styles.header}>
          <img src="https://i.pinimg.com/originals/1b/a8/4f/1ba84f003f3666c1cdd893e536f7cada.jpg" alt="" className={styles.logo} />
        </header>
    )
}

export default Header; 