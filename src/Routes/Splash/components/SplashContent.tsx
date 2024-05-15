import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskIcon from '../../../../assets/svg/taskIcon.svg'
import LoadingComponent from '../../../Components/LoadingComponent'

const SplashContent = () => {
    return (
        <View style={styles.main}>
            <TaskIcon height={96} width={96} />
            <Text style={styles.text}>RN Offline Tasks</Text>
            <LoadingComponent style={styles.mt_25} />
        </View>
    )
}

export default SplashContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    mt_25: {
        marginTop: 25,
    }
})