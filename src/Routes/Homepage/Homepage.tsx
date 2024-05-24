import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Homepage = () => {
    return (
        <View style={styles.main}>
            <Text onPress={async () => {
                await AsyncStorage.removeItem('loginStatus')
            }}>Homepage</Text>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})