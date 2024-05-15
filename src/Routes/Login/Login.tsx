import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import LoginContent from './components/LoginContent'

const Login = () => {
    return (
        <View style={styles.main}>
            <LoginContent />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})