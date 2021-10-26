import React from 'react';
import { Text, View, TouchableOpacity, Share} from 'react-native';
import styles from './style'

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu Imc e: " + props.resultImc,
        })
    }

    return (
        <View style={styles.ResultImc}>
            <View style={styles.boxSharebutton}>
                {props.resultImc != null ?
                <TouchableOpacity 
                style={styles.shared}
                onPress={onShare}
                >
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                : 
            <View/>
                }
             </View>   
            <Text style={styles.information}>{props.mensagemResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}