import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Slot } from "expo-router";

const Layout = () => {
    return (
        <SafeAreaView>
            <Slot />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default Layout;