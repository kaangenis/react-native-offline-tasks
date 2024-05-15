import React, { useEffect } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import SplashContent from './components/SplashContent';
import { useSplashHook } from './useSplashHook';

const Splash = () => {
    const {
        checkUserLoggedIn
    } = useSplashHook();
    useEffect(() => {
        checkUserLoggedIn();
    }, []);
    return (
        <View style={styles.main}>
            <SplashContent />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})