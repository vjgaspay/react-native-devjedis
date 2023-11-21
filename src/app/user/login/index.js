import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ csrfToken, setCsrfToken ] = useState("");
    const [ error, setError ] = useState("");
    const [ isPending, setIsPending ] = useState("");

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

            <TextInput style={styles.input} inputMode="email" placeholder="Username/Email" value={username} onChangeText={setUsername} /> 
            <TextInput style={styles.input} secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} />

            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>

            <Text>{csrfToken}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 12,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 10,
        padding: 10
    },
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#0d6efd',
        marginHorizontal: 12,
        marginTop: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    error: {
        color: 'red',
        margin: 12,
        fontWeight: 'bold'
    },
});

export default Login;