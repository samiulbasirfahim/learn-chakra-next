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
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quae, fugiat.
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default LoginModal
