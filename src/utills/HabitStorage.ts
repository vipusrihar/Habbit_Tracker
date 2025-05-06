import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from 'uuid';

export interface Habit {
    id: string,
    name: string;
    frequency : 'Daily' | 'Weekly' ;

}

const STORAGE_KEY_WORD = '@habits';

export const getHabits = async() =>{
    const habits = await AsyncStorage.getItem(STORAGE_KEY_WORD);
    return habits ? JSON.parse(habits) : [];
};

export const addHabit = async(habit : Omit<Habit,'id'>) => {
    const habits = await getHabits(); 
    const newHabit = {...habit , id: uuidv4()}
    await AsyncStorage.setItem(STORAGE_KEY_WORD, JSON.stringify([...habits, newHabit]));
}

export const deleteHabit = async( id : string) =>{
    const habits = await getHabits();
    const filtered = habits.filter( h => h.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY_WORD, JSON.stringify(filtered))
}