import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { isEmail } from "validator";

const RNPaperHelperText = () => {
    const [ email, setEmail ] = useState("");

    return (
        <ScrollView>
            <TextInput label="Email" value={email} onChangeText={setEmail} />

            <HelperText type="info">Make sure you have access to this email.</HelperText>

            <HelperText type="error" visible={ !isEmail(email) }>Email address is invalid.</HelperText>

            <HelperText type="error" visible={ email === "" }>Email is required.</HelperText>

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

export default RNPaperHelperText;