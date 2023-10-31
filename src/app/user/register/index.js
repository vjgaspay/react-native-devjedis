import { Text, View, StyleSheet } from "react-native";

const Register = () => {
    return (
        <View>
            <Text>Register Screen</Text>

            <Text>{ process.env.EXPO_PUBLIC_MY_NAME }</Text>
            <Text>{ process.env.EXPO_PUBLIC_WEBSITE }</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Register;