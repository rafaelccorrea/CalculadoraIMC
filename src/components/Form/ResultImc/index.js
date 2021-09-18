import React from 'react';
import { Text, View} from 'react-native';
import styles from './style'

export default function ResultImc(props){
    return (
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{props.mensagemResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}