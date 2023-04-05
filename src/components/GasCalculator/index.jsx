import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Image, TextInput, TouchableOpacity } from 'react-native';
import ModalComponent from '../ModalComponent';

export default function ModalExample() {
    const [inputAlcool, setinputAlcool] = useState(null);
    const [inputGas, setinputGas] = useState(null);
    const [bestOfBoth, setbestOfBoth] = useState('');
    const [modal, setModal] = useState(false);

    const entrar = () => {
        !modal ? setModal(true) : setModal(false);
        let calc = (inputAlcool/inputGas);
        calc > 0.7 ? setbestOfBoth('Compensa usar Gasolina!') : setbestOfBoth('Compensa usar Álcool!')
    };

    return (
        <View style={styles.container}>

            <View style={styles.imgView}>
                <Image 
                style={styles.img}
                source={require('../../../assets/logo.png')}
                />

                <Text
                style={styles.title}
                >
                Qual a melhor opção?
                </Text>
            </View>

            <View style={styles.inputView}>
                
                <Text
                style={styles.label}
                >
                Álcool (preço por litro):
                </Text>

                <TextInput
                style={styles.input}
                value={inputAlcool}
                onChangeText={e => setinputAlcool(e)} 
                underlineColorAndroid='transparent'
                keyboardType='numeric'
                />

                <Text
                style={styles.label}
                >
                Gasolina (preço por litro):
                </Text>
                
                <TextInput
                style={styles.input}
                value={inputGas}
                onChangeText={e => setinputGas(e)} 
                underlineColorAndroid='transparent'
                keyboardType='numeric'
                />

            </View>

            <View style={styles.btnView}>
                
                <TouchableOpacity
                style={styles.btnArea}
                onPress={entrar}
                >
                    <Text
                    style={styles.btn}
                    >
                    Calcular
                    </Text>

                </TouchableOpacity>

            </View>

            <Modal
            animationType='fade'
            visible={modal}
            >
                <ModalComponent 
                entrar={entrar} 
                bestOfBoth={bestOfBoth}
                inputAlcool={inputAlcool}
                inputGas={inputGas}
                />
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 55,
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },
    inputView: {
        width: '130%',
        marginTop: 15,
    },
    label: {
        color: '#FFF',
        fontSize: 16,
        margin: 5,
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 2,
    },
    btnView: {
        marginTop: 10,
        width: '100%',
    },
    btnArea: {
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#F24F00',
        borderRadius: 5,
        color: 'white',
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginTop: 10,
        width: '130%',
    },
});