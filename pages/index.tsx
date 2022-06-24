import {
  Box,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import {LayerTable} from "../components/layer-table";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Home(): JSX.Element {
  const {toggleColorMode} = useColorMode()
  const {isOpen, onOpen, onClose} = useDisclosure()

  return <>
    <Flex
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        minWidth='100vw'
        bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Box
          width='80vw'
          height='80vh'
          padding='20px'
          bg={useColorModeValue('gray.300', 'gray.700')}
          borderRadius='20px'
      >
        <IconButton
            size='sm'
            mx='5px'
            aria-label='Toggle colour scheme mode'
            onClick={toggleColorMode}
            icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
        />

        <Button size={'sm'} onClick={onOpen} mx='5px'>
          Open layer list
        </Button>
      </Box>
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose} size='full' scrollBehavior='inside'>
      <ModalOverlay/>
      <ModalContent margin='2vw'>
        <ModalHeader>Layer list</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <LayerTable/>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}
