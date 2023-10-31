import { Text, View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const UserLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true
            }}
        >
            <Tabs.Screen name="login"
                options={{
                    tabBarLabel: "Sign in",
                    tabBarIcon: ({ color, size }) => <AntDesign name="login" size={size} color={color} />
                }}
            />
            <Tabs.Screen name="register/index"
                options={{
                    tabBarLabel: "Register",
                    tabBarIcon: ({ color, size }) => <FontAwesome name="pencil-square-o" size={size} color={color} />
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({});

export default UserLayout;