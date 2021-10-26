import React, { useState } from 'react';
import { 
    View, Text, TextInput, TouchableOpacity, Vibration,Pressable,Keyboard,
} from 'react-native';
import ResultImc from './ResultImc/'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura!')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",",".");
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if(imc == null) {
            Vibration.vibrate();
            setErrorMessage("campo obrigatorio*")
        }
    }

    function ValidationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc e igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura!")
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
               
               <Text style={styles.formLabel}>Altura</Text>
               <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.inputField}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.inputField}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.356"
                keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() =>{
                        ValidationImc()
                    }}
                >   
                    
                    <Text style={styles.textButtonCalculator}> {textButton} </Text>
                
                </TouchableOpacity>
            </View>
                
                <ResultImc
                    mensagemResultImc = {messageImc} resultImc = {imc}
                />
                
        </Pressable> 
    );
}