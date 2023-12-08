import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const RNPaperActivityIndicator = () => {
    const isLoading = true;

    if( isLoading ) {
        return(
            <ActivityIndicator
                animating={true}
                style={styles.activityIndicator}
                size={50}
                color="#000"
            />
        );
    }

    return (
        <View>
            <Text>Content after loading.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    activityIndicator:  {
        flex: 1
    }
});

export default RNPaperActivityIndicator;