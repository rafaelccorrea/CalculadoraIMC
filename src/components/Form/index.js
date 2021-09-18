import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc/'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura!')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function ValidationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc e igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura!")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
               
               <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.inputField}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
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
                
        </View>
    );
}