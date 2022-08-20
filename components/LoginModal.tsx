import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	ModalFooter,
	Text,
	Box,
	Input,
} from "@chakra-ui/react"

const LoginModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button onClick={onOpen} background="transparent">
				<Text fontSize="sm">Login</Text>
			</Button>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Login</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							paddingX="8"
							paddingY="12"
						>
							<Text
								fontSize="4xl"
								fontWeight="black"
								color="#f64060"
								className="font-grape"
								marginBottom="4"
							>
								meeTup
							</Text>
							<Input
								focusBorderColor="#f64060"
								marginBottom="2"
								type={"email"}
								required
								placeholder="Email Here..."
							/>
							<Input
								focusBorderColor="#f64060"
								marginBottom="2"
								type={"password"}
								required
								placeholder="Password Here..."
							/>
							<Button background="#f64060" width="full">
								Button
							</Button>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default LoginModal
