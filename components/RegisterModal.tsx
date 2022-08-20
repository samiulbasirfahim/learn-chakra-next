import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	Text,
	Box,
	Input,
} from "@chakra-ui/react"

const RegisterModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button onClick={onOpen} background="transparent">
				<Text fontSize="sm">Sign Up</Text>
			</Button>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Register</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form>
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
									type={"text"}
									required
									placeholder="Name Here..."
								/>
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
								<Input
									focusBorderColor="#f64060"
									marginBottom="2"
									type={"password"}
									required
									placeholder="Confirm password Here..."
								/>
								<Input
									type="submit"
									value="Register"
									width="full"
									backgroundColor="#f64060"
									cursor="pointer"
									_hover={{
										backgroundColor: "#fff",
										color: "#f64060",
										fontWeight: "bold",
									}}
								/>
							</Box>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default RegisterModal
