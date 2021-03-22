import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
//import {useDispatch} from 'react-redux';
//import {updatePayment, createUser} from '../../store/modules/app/actions';

import {
    Container,
    Button,
    ButtonText,
    Title,
    SubTitle,
    Spacer,
} from '../../styles';

const Payment = () => {
    //const dispatch = useDispatch();
    const [visible, setVisible] = useState(true);
    /*  const [payment, setPayment] = useState({
       nome: null,
       numero: null,
       validade: null,
       cvv: null,
     }); */

    /*  const signIn = () => {
       dispatch(updatePayment(payment));
       dispatch(createUser());
     }; */

    useEffect(() => {
        const keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
            setVisible(false),
        );

        const keyboarDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
            setVisible(true),
        );

        return () => {
            keyboarDidShowListener.remove();
            keyboarDidHideListener.remove();
        };
    }, []);

    return (
        <Container padding={30} justify="flex-start" color="black" >
            <Container align="flex-start" height={40}>
                <Title>Escolha como pagar</Title>
                <SubTitle color="light">Preencha os dados do cartão de crédito.</SubTitle>
            </Container>        
            <Container> 
                <Spacer height={50} />
                <CreditCardInput
                 name="Nome Completo"
                 expiry="MES/ANO"                 
                 requiresName
                 requiresCVC
                 inputStyle={{color:"white"}}
                 placeholderColor="darkgray"
                 labelStyle={{display:"none"}}
                 placeholder={{number:"Número do Cartão", 
                            name:"Nome Completo",
                            expiry:"MM/AA",
                            cvc: "CVC",
                            scale:{ width: 1000, height: 190 }
                        }}
                 placeholders={{number:"Número do Cartão", 
                                name:"Nome Completo",
                                expiry:"MM/AA",
                                cvc: "CVC"
                            }}
                 inputContainerStyle={{ borderBottomWidth: 1, 
                                        borderBottomColor: "white" 
                                    }}
                 
                   /*  onChange={(e) => {
                        const { number, expiry, cvc, name } = e.values;
                        setPayment({
                            numero: number,
                            nome: name,
                            validade: expiry,
                            cvv: cvc,
                        });
                    }}    */
                />
            </Container> 
            {visible && (
                <Container height={70} justify="flex-end">
                    <Button /* onPress={() => signIn()} */>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            )}
        </Container>
    );
};

export default Payment;
