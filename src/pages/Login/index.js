import React, { useEffect } from 'react';
//import * as React from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import social from '../../services/social';
import { useDispatch } from 'react-redux';
import {updateUser, checkUser} from '../../store/modules/app/actions';

import logo from '../../assets/logo.png';
//import bgBottom from '../../assets/bg-bottom-login.png';

import { Container, Button, ButtonText } from '../../styles';
//import graph from '../../services/facebook';

import * as WebBrowser from 'expo-web-browser';
//import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Facebook from 'expo-facebook';
//import { ResponseType } from 'expo-auth-session';

//WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
   


    async function logIn() {
        //const dispatch = useDispatch();
        try {
            await Facebook.initializeAsync({ appId: '388371155672971', appName: 'app' });
            const {
                type,
                token
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });
            if (type === "success") {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
                );
                // console.log((await response.json()).name);
                const data = await response.json();
                const user = data
                console.log(data);
               /*  dispatch(
                    updateUser({
                        fbId: user.id,
                        nome: user.name,
                        email: user.email,
                        accessToken: token,
                    }),
                );
                dispatch(checkUser());

                const checkLogin = async () => {
                    AsyncStorage.clear();
                    const user = await AsyncStorage.getItem('@user');
                    if (user) {
                        dispatch(updateUser(JSON.parse(user)));
                        navigation.replace('Home');
                    }
                };

                useEffect(() => {
                    checkLogin();
                }, []); */
            } else {
                // type === 'cancel'
            }
        } catch (err) {
            console.log(err)
            alert(`Facebook Login Error: ${err}`);
        }
    }

    return (
        <Container color="black" /* justify="flex-end" */>
            <Container
                justify="space-around"
                padding={30}
                //position="absolute"
                height={370}
                top={0}
                zIndex={9}>
                <Image source={logo} />

               

                <Button //disabled={!request}
                    title="Login"
                    onPress={logIn} type="info">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>

                <Button type="light">
                    <ButtonText>Fazer Login com Google

          </ButtonText>
                </Button>
            </Container>


        </Container>
    );
};

export default Login;


//https://br.com.safedriver.app/Removerhttps://auth.expo.io/Removerhttps://localhost:19000/Removerhttps://auth.expo.io/@pablomvmaster/app/start?authUrl=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fcode_challenge%3DoCZ1yVEJG3e7PcSU3N8u2DhxZoL3SfIJ8JF_6YsuBRk%26display%3Dpopup%26auth_nonce%3Dc21582d162aa64269ef01c6a45e30d56bf9a06b921f53ff2dd6f6542f267b8b6%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fauth.expo.io%252F%2540pablomvmaster%252Fapp%26client_id%3D388371155672971%26response_type%3Dcode%26state%3DYZWrhKAFwC%26scope%3Dpublic_profile%2520email&returnUrl=exp%3A%2F%2Fexp.host%2F%40pablomvmaster%2Fapp%2F--%2Fexpo-auth-sessionRemoverhttps://auth.expo.io/@pablomvmaster/app