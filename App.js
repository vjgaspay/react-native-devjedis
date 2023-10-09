import { Text, View, StyleSheet } from "react-native";
import SafeAreaViewComponent from "./SafeAreaViewComponent";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import ColorThemes from "./ColorThemes";
import BackgroundImage from "./BackgroundImage";
import PlatformSpecificCode from "./PlatformSpecificCode";

const App = () => {
    return (
        <SafeAreaProvider>
            {/* <SafeAreaViewComponent /> */}
            {/* <ColorThemes /> */}
            {/* <BackgroundImage /> */}

            <PlatformSpecificCode />

            <StatusBar />
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
});

export default App;