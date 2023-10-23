import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Link, Stack } from "expo-router";

const Settings = () => {
    return (
        <View>
            <Stack.Screen 
                options={{
                    title: "Settings", 
                    headerStyle: { backgroundColor: 'orange' },
                    headerRight: () => <Button title="Search" />,
                    headerTitle: () => <LogoAsTitle />
                }}
            
            />

            <Text>Settings Screen</Text>
            <Link href="/" style={{marginTop: 15, color: 'blue'}}>Home</Link>
        </View>
    );
}

function LogoAsTitle() {
    return(
        <Image
            style={{ width: 50, height: 50 }}
            source={ require("../../../assets/images/logo.jpg") }
        />
    );
}

const styles = StyleSheet.create({});

export default Settings;