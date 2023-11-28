import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button, TextInput } from "react-native-paper";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ csrfToken, setCsrfToken ] = useState("");
    const [ error, setError ] = useState("");
    const [ isPending, setIsPending ] = useState("");
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);

    const endpoint = process.env.EXPO_PUBLIC_API_BASE_URL + "/api/signin";

    useEffect( () => {
        fetch( endpoint )
            .then( res => res.json() )
            .then( data => {
                if( 'csrf_token' in data ) setCsrfToken( data.csrf_token );
            } )
        ;
    }, [] );

    const handlePress = () => {
        //remove spaces and set to lower case
        const username_email = username.trim().toLowerCase();

        //check required fileds
        if( !username_email || !password ) error_messages.push("Please provide your username and password.");

        //save
        const signin = {
            username: username_email,
            password,
            csrfToken,
        }

        setIsPending(true);

        fetch( endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signin)
        }).then( res => res.json() )
        .then( (res_data) => {
            if( "err_msg" in res_data ) setError([res_data.err_msg]);
            else if( "successful_signin" in res_data && res_data.successful_signin ) {
                //clear form
                setError("");
                setUsername("");
                setPassword("");

                //save JWToken to local storage

                //redirect

            } else setError("Something went wrong!");
        } ).finally( () => {
            setIsPending(false);
        });
    }
    
    return (
        <View>
            { error &&
                <Text style={styles.error}>{error}</Text>
            }

            <TextInput 
                mode="outlined" 
                label="Username/Email" 
                style={styles.input} 
                inputMode="email" 
                //placeholder="Username/Email"
                value={username} 
                onChangeText={setUsername} 
            /> 

            <TextInput 
                mode="outlined" 
                label="Password" 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
                //placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                right={<TextInput.Icon icon={ secureTextEntry ? "eye" : "eye-off" } onPress={ () => setSecureTextEntry( (preVal) => !preVal ) } />}
            />

            <Button mode="elevated" icon="login" style={styles.button} onPress={handlePress}>Sign in</Button>

            <Text>{csrfToken}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 12,
        marginTop: 12
    },
    button: {
        marginHorizontal: 12,
        marginTop: 12
    },
    error: {
        color: 'red',
        margin: 12,
        fontWeight: 'bold'
    },
});

export default Login;