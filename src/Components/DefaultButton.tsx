import React from 'react'
import {
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { colors } from '../Configs/colors';

interface DefaultButtonProps {
    title: string;
    onPress: () => void;
    style?: object;
    disabled?: boolean;
    loading?: boolean;
    loadingColor?: string;
    loadingSize?: string;
    loadingStyle?: object;
    titleStyle?: object;
}

const DefaultButton = ({
    title,
    onPress,
    style,
    disabled,
    loading,
    loadingColor,
    loadingSize,
    loadingStyle,
    titleStyle
}: DefaultButtonProps) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={
                style === undefined
                    ? disabled === true
                        ? [styles.main, { backgroundColor: colors.gray }]
                        : styles.main
                    : style}>
            {
                loading === true
                    ? <ActivityIndicator
                        size={
                            loadingSize &&
                                loadingSize === 'small' || loadingSize === 'large'
                                ? loadingSize
                                : 'small'
                        }
                        color={
                            loadingColor
                                ? loadingColor
                                : colors.black
                        }
                        style={loadingStyle} />
                    : <Text style={titleStyle === undefined ? styles.title : titleStyle}>{title}</Text>
            }
        </TouchableOpacity>
    )
};

export default DefaultButton

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width - 75,
        height: 60,
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '400',
    }
})