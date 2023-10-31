import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const LoginLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    headerShown: false,
                    title: "Sign in"
                }}
            />
            <Stack.Screen name="forgot-password"
                options={{
                    headerShown: true,
                    title: "",
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: 'white',
                }}
            />
            <Stack.Screen name="modal"
                options={{
                    presentation: 'modal',
                    title: "Login Modal"
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({});

export default LoginLayout;