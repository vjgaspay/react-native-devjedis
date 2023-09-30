import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { styles } from "./assets/styles/styles";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Fuggles-Regular': require('./assets/fonts/Fuggles-Regular.ttf')
    });

    if( !fontsLoaded ) return null;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={{ color: 'green' }}>
                    Hello <Text style={{ fontWeight: 'bold' }}>World</Text>!
                </Text>

                <TextInput style={styles.textInput} />

                <Button title='Press to see alert' color="red" onPress={ () => Alert.alert("You pressed the button.") } />

                <Pressable style={styles.pressable} onPress={ () => Alert.alert("You pressed the pressable.") }>
                    <FontAwesome name="check" size={24} color="lightgreen" /> 
                    <Text style={styles.pressableText}>Pressable text</Text>
                </Pressable>

                <Text style={{ fontFamily: 'Fuggles-Regular', fontSize: 30 }}>Fuggles-Regular font</Text>

                <Image source={ require('./assets/images/logo.jpg') } style={{ width: 100, height: 100 }} />

                <Ionicons name="person" size={50} color="purple" />
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
