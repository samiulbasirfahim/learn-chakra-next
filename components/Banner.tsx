import styles from "../styles/banner.module.css"
import { Box, Container, Text } from "@chakra-ui/react"
import Image from "next/image"
import onlineImage from "../public/online_events.svg"
import category1 from "../public/category1.webp"
import category2 from "../public/category2.webp"
import category3 from "../public/category3.webp"

const Banner = () => {
	const categories = [
		{
			image: category1,
			title: "Make new friends",
		},
		{
			image: category2,
			title: "Explore the outdoors",
		},
		{
			image: category3,
			title: "Connect over tech",
		},
	]

	return (
		<Container maxWidth="container.lg">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginTop="40"
				marginBottom="20"
			>
				<Box
					display="flex"
					flexDirection="column"
					width="50%"
					paddingRight="4"
				>
					<Text
						fontWeight="black"
						fontSize="5xl"
						lineHeight="1"
						className=""
					>
						Celebrating 20 years of real connections on Meetup
					</Text>
					<Text fontSize="lg" marginTop="6" className="">
						Whatever you’re looking to do this year, Meetup can
						help. For 20 years, people have turned to Meetup to meet
						people, make friends, find support, grow a business, and
						explore their interests. Thousands of events are
						happening every day—join the fun.
					</Text>
				</Box>
				<Box display="flex" flexDirection="column" width="50%">
					<Image
						src={onlineImage}
						width="520px"
						height="230px"
					></Image>
				</Box>
			</Box>
			<Box display="flex" justifyContent="space-between" gap="5">
				{categories.map((category) => {
					return (
						<Box
							display="flex"
							flexDirection="column"
							className={styles.categoryContainer}
						>
							<Image
								src={category.image}
								width="300x"
								height="200px"
								style={{
									borderRadius: "8px",
								}}
							/>
							<Text
								color="#067f91"
								fontSize="xl"
								fontWeight="bold"
								marginTop="2.5"
								cursor="pointer"
								as="p"
							>
								{category.title}
							</Text>
						</Box>
					)
				})}
			</Box>
		</Container>
	)
}

export default Banner
