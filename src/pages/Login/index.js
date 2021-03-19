import React from 'react'
import { Text, Image } from 'react-native'
import { Container, Button, ButtonText } from '../../styles'
import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <Container color="black">
            <Container
                justify="space-around"
                padding={30}               
                height={370}               
                zIndex={9}>
                    
                <Image source={logo} />

                <Button /*onPress={() => login()}*/ type="info">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>

                <Button type="light">
                    <ButtonText>Fazer Login com Google</ButtonText>
                </Button>
            </Container>
        </Container>
    )
}

export default Login