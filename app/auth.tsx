import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import SQlite from '@/components/SQlite';

export default function AuthScreen() {
    return (  
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.stepContainer}>
                {/* Add your login form components here */}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});


