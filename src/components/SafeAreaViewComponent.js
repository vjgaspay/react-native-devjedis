import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const SafeAreaViewComponent = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }}>
            <Text>SafeAreaView</Text>

            <Text>{ "insets.top: " + insets.top }</Text>
            <Text>{ "insets.bottom: " + insets.bottom }</Text>
            <Text>{ "insets.right: " + insets.right }</Text>
            <Text>{ "insets.left: " + insets.left }</Text>
        </View>
    );
}
const styles = StyleSheet.create({
});

export default SafeAreaViewComponent;