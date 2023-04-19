import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Icon } from '@/components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Diablo Build Optimizer</title>
				<meta
					name="description"
					content="Compare your items against the ideal items for a build and optimize your Diablo character."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={styles.main}>
				<header className={styles.header}>
					<Icon name="Logo" size="lg" className={styles.Logo} />
					<h1 className={styles.title}>Pimp My Nephalim</h1>
				</header>
			</main>
		</>
	);
}
