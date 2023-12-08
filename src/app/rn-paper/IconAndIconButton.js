import { Text, View, StyleSheet } from "react-native";
import { Icon, IconButton } from "react-native-paper";

const RNPaperIconAndIconButton = () => {
    return (
        <View>
            <Text>Icon</Text>
            <Icon source="camera" size={40} color="black" />
            <Icon source="facebook" size={40} color="#1567ff" />

            <Text>Icon Button</Text>
            <IconButton
                icon="gesture-tap-button"
                size={40}
                iconColor="gray"
                onPress={ () => console.log("Icon button pressed") }
            />
            <IconButton
                mode="outlined"
                icon="gesture-tap-button"
                size={40}
                iconColor="gray"
                onPress={ () => console.log("Icon button pressed") }
            />
            <IconButton
                mode="contained"
                icon="gesture-tap-button"
                size={40}
                iconColor="gray"
                onPress={ () => console.log("Icon button pressed") }

                //disabled={true}
                containerColor="lightgreen"
            />
            <IconButton
                mode="contained-tonal"
                icon="gesture-tap-button"
                size={40}
                iconColor="gray"
                onPress={ () => console.log("Icon button pressed") }
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default RNPaperIconAndIconButton;