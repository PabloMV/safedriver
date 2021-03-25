import React/* , {useEffect, useState, useRef} */ from 'react';

import {
    Container,
    Title,
    SubTitle,
    Spacer,
    Map,
    Avatar,
    Input,
    Button,
    ButtonText,
    VerticalSeparator,
    Bullet,
    PulseCircle,
} from '../../styles';
import { TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png'


const Home = () => {
    return (
        <Container>
            <Map
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>

            </Map>
            <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={9999}
                pointerEvents="box-none"
                style={{ height: '100%' }}>
                <Container height={100} justify="flex-start" align="flex-start">
                    <TouchableOpacity>
                        <Avatar source={logo} />
                    </TouchableOpacity>
                </Container>

                <Container height={150} elevation={50} justify="flex-end" color="light">
                    <Container padding={20}>
                        <Container justify="flex-start" row>
                            <Bullet />
                            <SubTitle numberOfLines={1}>
                                HAHAHAHAHAHAHAHHAHAHA
                               {/*  {' '}
                                {ride?.info?.start_address} */}
                            </SubTitle>
                        </Container>
                        <Spacer height={20} />
                        <Container justify="flex-start" row>
                            <Bullet destination />
                            <SubTitle numberOfLines={1}>
                                AHHAHAHAHAHAHAHAHHAA
                               {/*  {' '}
                                {ride?.info?.end_address} */}
                            </SubTitle>
                        </Container>
                    </Container>
                    <Button type="dark" >
                        <ButtonText color="light">Toque para editar</ButtonText>
                    </Button>
                </Container>
            </Container>
        </Container>
        
    )
}

export default Home