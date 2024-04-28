import Head from "next/head"
import A from "./A"
import styles from '../styles/Navbar.module.scss'

const MainContainer = ({children, keywords}) => {


	return (
		<div>
			<Head>
				<title>Курс по Next js</title>
				<meta name="description" content="Это курс по Next js"></meta>
				<meta name="keywords" content={"course, nextjs, ulbi, " + keywords}></meta>
			</Head>
			<div className={styles.navbar}>
				<A text='Главная' href='/' />
				<A text='Пользователи' href='/users' />
			</div>
			<div>
				{children}
			</div>
		</div>
	)
}

export default MainContainer