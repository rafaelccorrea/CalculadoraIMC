import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor:"#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        paddingTop: 15
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },  

    inputField: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        margin: 10,
        paddingLeft: 10,
        height: 40,
    },

    ButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingBottom: 14,
        paddingTop:14,
        marginLeft:12,
        marginTop: 30
    },

    textButtonCalculator: {
        fontSize:20,
        color: "#ffffff",
    },

    errorMessage: {
        fontSize:12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }

})

export default styles