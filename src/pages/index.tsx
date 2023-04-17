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
				<link rel="icon" href="/logo.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&display=swap"
					rel="stylesheet"
				/>
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
