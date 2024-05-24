import React from 'react'
import {
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import LottieView from 'lottie-react-native'
import { useLoginHook } from '../useLoginHook'
import { colors } from '../../../Configs/colors'
import DefaultButton from '../../../Components/DefaultButton'
import { MotiText, MotiView } from 'moti'

const LoginContent = () => {
    const {
        name,
        handleNameChange,
        handleLogin,
        loginLoading,
    } = useLoginHook();
    return (
        <MotiView
            from={{
                opacity: 0,
                translateY: -200,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
                type: 'timing',
                duration: 1000,
            }}
            style={styles.main}>
            <KeyboardAvoidingView behavior='padding' style={styles.main}>
                <LottieView
                    source={require('../../../../assets/lottie/LoginLottie.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                    speed={1}
                />
                <Text style={styles.title}>
                    Welcome to Offline Tasks!
                </Text>
                <Text style={styles.nameTitle}>
                    Enter your name and get started!
                </Text>
                <MotiView
                    from={{
                        translateY: 200,
                        opacity: 0,
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: 'timing',
                        duration: 2500,
                    }}>
                    <TextInput
                        value={name}
                        onChangeText={handleNameChange}
                        placeholder="Enter your name"
                        style={styles.input}
                    />
                    <DefaultButton
                        title="Login"
                        disabled={name === ''}
                        loading={loginLoading}
                        onPress={handleLogin}
                    />
                </MotiView>
            </KeyboardAvoidingView>
        </MotiView>
    )
}

export default LoginContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    nameTitle: {
        fontSize: 16,
        fontWeight: '400',
    },
    input: {
        width: Dimensions.get('window').width - 80,
        height: 50,
        borderWidth: 1,
        borderColor: colors.darkGray,
        borderRadius: 10,
        marginVertical: 40,
        padding: 10,
    },
})