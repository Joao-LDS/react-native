import React from "react";

import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity 
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image 
                animation='flipInY'
                source={require("../../assets/main-logo.png")}
                style={{ width: '80%' }}
                resizeMode='contain'
            />
        </View>

        <Animatable.View 
        animation='fadeInUp' 
        delay={500} 
        style={styles.containerText}>
            <Text style={styles.title}>
                Os melhores bolos que você vai comer na vida!
            </Text>

            <Text style={styles.body}>
                Faça o login para começar.
            </Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                navigation.navigate('SignIn')
            }}>
                <Text style={styles.textButton}>
                    Acessar
                </Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CEDEBD',
    },

    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerText: {
        flex: 1,
        backgroundColor: '#FAF1E4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },

    body: {

    },

    button: {
        position: 'absolute',
        backgroundColor: '#435334',
        borderRadius: 12,
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        bottom: '25%'
    },

    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FAF1E4',
        alignSelf: 'center'
    }
})