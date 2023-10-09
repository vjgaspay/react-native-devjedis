import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Image, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { styles } from "./assets/styles/styles";

export default function App() {
    const [ inputText, setInputText ] = useState("Test value");
    const [ people, setPeople ] = useState([
        { name: 'Sam', id: '1' },
        { name: 'Pat', id: '2' },
        { name: 'Keith', id: '3' },
        { name: 'Chris', id: '4' },
        { name: 'Jaemily', id: '5' },
        { name: 'Korrene', id: '6' },
        { name: 'Lingki', id: '7' },
        { name: 'Jeff', id: '8' },
        { name: 'Daniel', id: '9' },
        { name: 'Aldwin', id: '10' }, 
    ]);

    const [fontsLoaded] = useFonts({
        'Fuggles-Regular': require('./assets/fonts/Fuggles-Regular.ttf')
    });

    if( !fontsLoaded ) return null;

    return (
        
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    
                    <FlatList
                        keyExtractor={ (item) => item.id }
                        data={people}
                        renderItem={ ({ item }) => (
                            <Text style={styles.person}>{ item.name }</Text>
                        ) }
                    />

                    {/* <ScrollView>
                        { people.map( (person) => (
                            <View key={person.key}>
                                <Text style={styles.person}>{ person.name }</Text>
                            </View>
                        ) ) }
                    </ScrollView> */}



                    {/* <Text style={{ color: 'green' }}>
                        Hello <Text style={{ fontWeight: 'bold' }}>World</Text>!
                    </Text>

                    <TextInput style={styles.textInput} placeholder="Text input" value={ inputText } onChangeText={ setInputText } />
                    <Text>{ inputText }</Text>

                    <Button title='Press to see alert' color="red" onPress={ () => Alert.alert("You pressed the button.") } />

                    <Pressable style={styles.pressable} onPress={ () => Alert.alert("You pressed the pressable.") }>
                        <FontAwesome name="check" size={24} color="lightgreen" /> 
                        <Text style={styles.pressableText}>Pressable text</Text>
                    </Pressable>

                    <Text style={{ fontFamily: 'Fuggles-Regular', fontSize: 30 }}>Fuggles-Regular font this is a test</Text>

                    <Image source={ require('./assets/images/logo.jpg') } style={{ width: 100, height: 100 }} />

                    <Ionicons name="person" size={50} color="purple" /> */}
                </View>

                <StatusBar style="auto" />
            </SafeAreaView>
        
    );
}
