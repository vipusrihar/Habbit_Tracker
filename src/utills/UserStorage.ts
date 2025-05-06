import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const keyword = '@user_data'

export const saveUserData = async (userData: {
    username: string; email: string; password: string
}) => {
    try {
        await AsyncStorage.setItem(keyword, JSON.stringify(userData));
        console.log("Created user data sucessfull");
    } catch (err) {
        Alert.alert("Error During Save The Data");
        console.error("Error Saving UserData : " + userData);
    }
};

export const getUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem(keyword);
        const data = userData ? JSON.parse(userData) : null;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error While Load The Data");
        return null;
    }
}


export const clearUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem(keyword);
        const data = userData ? JSON.parse(userData) : null
        await AsyncStorage.removeItem(keyword);
        console.log("UserData " + data + " Cleared")
    } catch (error) {

    }
}