import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useLoginHook = () => {
    const { reset } = useNavigateHook();
    const [name, setName] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handleLogin = async () => {
        setLoginLoading(true);
        await AsyncStorage.setItem('loginStatus', 'true');
        await AsyncStorage.setItem('name', name);
        setTimeout(() => {
            setLoginLoading(false);
            reset('Homepage');
        }, 1500);
    };

    return {
        name,
        handleNameChange,
        handleLogin,
        loginLoading
    };
};