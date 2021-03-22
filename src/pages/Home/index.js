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
  import {TouchableOpacity} from 'react-native';


  const Home = () => {
    return (
        <Container>
            <Map
                initialRegion={{
                    latitude:-300111364,
                    longitude:-51.1637373,
                    latitudeDelta:-0.0922,
                    longitudeDelta:-0.0421
                }}>

            </Map>
        </Container>
    )
  }