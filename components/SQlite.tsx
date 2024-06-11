import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-token', jsonValue);
    } catch (e) {
      // saving error
    }
};

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('my-token');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};



export default function SQlite() {
    getData().then((value) => console.log(value));
    storeData('my-token').then(() => console.log('Token saved'));
    return (
        <></>
    );
}


