import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigateHook } from '../../Hooks/useNavigateHook';

export const useSplashHook = () => {
    const { reset } = useNavigateHook();

    const checkUserLoggedIn = async () => {
        const loginStatus = await AsyncStorage.getItem('loginStatus');
        if (loginStatus === 'true') {
            setTimeout(() => {
                reset('Homepage');
            }, 2000);
        } else {
            setTimeout(() => {
                reset('Login');
            }, 2000);
        }
    };

    return {
        checkUserLoggedIn,
    };
};