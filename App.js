import { Text, View, StyleSheet } from "react-native";
import SafeAreaViewComponent from "./src/components/SafeAreaViewComponent";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import ColorThemes from "./src/components/ColorThemes";
import BackgroundImage from "./src/components/BackgroundImage";
import PlatformSpecificCode from "./src/components/PlatformSpecificCode";
import Flexbox from "./src/components/Flexbox";

const App = () => {
    return (
        <SafeAreaProvider>
            {/* <SafeAreaViewComponent /> */}
            {/* <ColorThemes /> */}
            {/* <BackgroundImage /> */}
            {/* <PlatformSpecificCode /> */}

            <Flexbox />

            <StatusBar />
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
});

export default App;