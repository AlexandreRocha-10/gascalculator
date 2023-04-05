import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function ModalComponent({ entrar, bestOfBoth, inputAlcool, inputGas }) {

    return (
        <View style={styles.container}>

            <View style={styles.modal}>

                <View style={styles.imgView}>
                    <Image 
                    style={styles.img}
                    source={require('../../../assets/gas.png')}
                    />

                    <Text
                    style={styles.title}
                    >
                    {bestOfBoth}
                    </Text>
                </View>

                <View style={styles.inputView}>

                    <Text
                    style={styles.labelTitle}
                    >
                    Considerando os preços:
                    </Text>
                
                    <Text
                    style={styles.label}
                    >
                    Álcool: R$ {inputAlcool}
                    </Text>

                    <Text
                    style={styles.label}
                    >
                    Gasolina: R$ {inputGas}
                    </Text>

                </View>


                <View style={styles.btnView}>
                
                    <TouchableOpacity
                    style={styles.btnArea}
                    onPress={entrar}
                    >
                        <Text
                        style={styles.btn}
                        >
                        Voltar
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -15,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#90ee90',
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },
    inputView: {
        width: '130%',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelTitle: {
        color: '#FFF',
        fontSize: 18,
        margin: 5,
    },
    label: {
        color: '#FFF',
        fontSize: 16,
        margin: 5,
    },
    btnView: {
        marginTop: 10,
        width: '100%',
    },
    btnArea: {
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        color: '#F24F00',
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginTop: 10,
        width: '130%',
    },
});