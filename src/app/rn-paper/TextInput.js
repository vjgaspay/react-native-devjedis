import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const RNPaperTextInput = () => {
    const [ text1, setText1 ] = useState("");
    const [ text2, setText2 ] = useState("");
    const [ text3, setText3 ] = useState("");
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Flat:</Text>
            <TextInput label="Email" value={text1} onChangeText={setText1} />

            <Text style={styles.text}>Outlined:</Text>
            <TextInput 
                mode="outlined"  //flat or outlined
                label="Email"
                value={text2}
                onChangeText={setText2}
                //disabled
                placeholder="Enter email"
                //error={true}
                //multiline
            />

            <Text style={styles.text}>Icon:</Text>
            <TextInput 
                mode="outlined"
                label="Password"
                secureTextEntry={secureTextEntry}
                right={<TextInput.Icon icon="eye" onPress={ () => setSecureTextEntry( (preVal) => !preVal ) } />}
            />

            <Text style={styles.text}>Affix:</Text>
            <TextInput 
                mode="outlined"
                label="Email"
                value={text3}
                onChangeText={ (text) => setText3( text.slice(0, 5) ) }
                right={<TextInput.Affix text={ text3.length + "/5" } />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    text: {
        marginTop: 15,
        marginBottom: 8
    }
});

export default RNPaperTextInput;