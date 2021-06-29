import styles from '../styles/Header.module.sass';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Order Breakfast</h1>
			<h2 className={styles.subtitle}>Seaglass Inn & Spa</h2>
		</header>
	);
};

export default Header;
