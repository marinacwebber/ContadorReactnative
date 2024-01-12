import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {useState} from 'react'

export default function Home() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    
    function decrement() {
        setCount(count - 1)
    }

    return (
    <>
        <View>
            <Text style={styles.display}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.textButton} >-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.textButton} >+</Text>
            </TouchableOpacity>
        </View>
    </>
)}

const styles = StyleSheet.create ({
    display: {
        fontSize: 32
    },
    buttonContainer: {
        flexDirection: "row",
        paddingTop: 16,
    },
    button: {
        backgroundColor: "green",
        marginHorizontal: 16,
        paddingHorizontal: 24,
        paddingVertical: 8,
        width: 100,
        borderRadius: 99,
        alignItems: "center",
        elevation: 8,
    },
    textButton: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
})