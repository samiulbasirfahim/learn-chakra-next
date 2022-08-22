import { NextPage } from "next"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Banner />
		</>
	)
}

export default Home
