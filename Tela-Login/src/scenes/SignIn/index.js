import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
 } from 'react-native';

 import * as Animatable from 'react-native-animatable';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.headerText}>Bem vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.formTitle}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.textFied}
                />

                <Text style={styles.formTitle}>Senha</Text>
                    <TextInput
                        placeholder="Sua senha"
                        style={styles.textFied}
                />

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sigInButton}>
                    <Text style={styles.sigInButtonText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const styles =  StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#CEDEBD',
    },

    containerHeader: {
        marginTop: '25%',
        marginBottom: '10%',
        paddingStart: '5%'
    },

    headerText: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#FAF1E4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    formTitle: {
        fontSize: 20,
        marginTop: 30
    },

    textFied: {
        borderBottomWidth: 1,
        borderBottomColor: '#435334',
        height: 50,
        marginBottom: 12,
        fontSize: 16
    },

    loginButton: {
        marginTop: 24,
        backgroundColor: '#435334',
        borderRadius: 12,
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center'
    },

    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FAF1E4',
        alignSelf: 'center'
    },

    sigInButtonText: {
        marginTop: 16,
        color: '#9EB384',
        alignSelf: 'center',
        fontSize: 16
    }
})