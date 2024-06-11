import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function AleatoryScreen() {

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Loved</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
