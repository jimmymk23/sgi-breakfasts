import styles from '../styles/Home.module.sass';

const index = () => {
	return (
		<div className={styles.center_flex_container}>
			<h1 className={styles.title}>Next.js Starter Template</h1>
			<h2 className={styles.caption}>
				Get started on projects faster with a bare-bones approach.
			</h2>
		</div>
	);
};

export default index;
