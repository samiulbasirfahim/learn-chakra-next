import { Box, Button, Text } from "@chakra-ui/react"
import Link from "next/link"
import { GrLanguage } from "react-icons/gr"
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

const Navbar = () => {
	return (
		<Box
			display={"flex"}
			justifyContent="space-between"
			alignItems={"center"}
			paddingY={4}
			paddingX={8}
		>
			<Box>
				<Link href="/">
					<Button
						background="transparent"
						_hover={{
							backgroundColor: "transparent",
						}}
						_active={{
							backgroundColor: "transparent",
						}}
					>
						<Text
							fontSize="4xl"
							fontWeight="black"
							color="#f64060"
							className="font-grape"
						>
							meeTup
						</Text>
					</Button>
				</Link>
			</Box>
			<Box display="flex" alignItems="center" >
				<Button background="transparent">
					<GrLanguage />{" "}
					<Text marginLeft="4" fontSize="sm">
						English
					</Text>
				</Button>
				<LoginModal />
				<RegisterModal />
			</Box>
		</Box>
	)
}

export default Navbar
