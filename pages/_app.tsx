import "../styles/global.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Head>
				<title>meeTup</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
