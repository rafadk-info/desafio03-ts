import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => {
    const { name, email } = useContext(AppContext)

    return (
        <Box padding="25px">
            <Text fontSize='3xl' fontWeight='bold'>
                Informações do usuário
            </Text>
            <Text fontSize='xl' marginTop={4}>
                <strong>Nome:</strong> {name}
            </Text>
            <Text fontSize='xl' marginTop={2}>
                <strong>Email:</strong> {email}
            </Text>
        </Box>
    )
}

export default ContaInfo
