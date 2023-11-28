import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { isEmail, isStrongPassword } from "validator";
import { Button, TextInput } from "react-native-paper";

const Register = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ password2, setPassword2 ] = useState("");

    const [ secureTextEntry1, setSecureTextEntry1 ] = useState(true);
    const [ secureTextEntry2, setSecureTextEntry2 ] = useState(true);

    const handlePress = () => {
        const error_messages = [];
        
        //remove extra spaces
        const first_name = firstName.trim();
        const last_name = lastName.trim();
        const username_email = username.trim().toLowerCase();

        //check required fileds
        if( !first_name || !last_name || !username_email || !password || !password2 ) error_messages.push("All fields are required.");

        //check if email format is valid
        if( username_email && !isEmail(username_email) ) error_messages.push("Please enter a valid email.");

        //check if passwords match
        if( password !== password2 ) error_messages.push("Your passwords do not match");

        //check password strength
        if( password && !isStrongPassword(password) ) error_messages.push("Your password must be at least 8 characters in length with at least one lowercase, uppercase, number, and special character.");

        if( error_messages.length > 0 ) {
            setErrors(error_messages);
        } else {
            setErrors([]);
            setIsPending(true);

            //save
            const register = {
                first_name,
                last_name,
                username: username_email,
                password,
                password2,
                csrfToken,
                //referrer
            }

            fetch( endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(register)
            }).then( res => res.json() )
            .then( (res_data) => {
                if( "err_msg" in res_data ) setErrors([res_data.err_msg]);
                else if( "successful_registration" in res_data && res_data.successful_registration && "suc_msg" in res_data ) {
                    setSuccessMessage( res_data.suc_msg );

                    //clear form
                    setFirstName("");
                    setLastName("");
                    setUsername("");
                    setPassword("");
                    setPassword2("");
                } else setErrors(["Something went wrong!"]);
            } ).finally( () => {
                setIsPending(false);
            });

        }
    }

    const [ errors, setErrors ] = useState([]);
    const [ successMessage, setSuccessMessage ] = useState("");
    const [ isPending, setIsPending ] = useState("");

    const [ csrfToken, setCsrfToken ] = useState("");

    const endpoint = process.env.EXPO_PUBLIC_API_BASE_URL + "/api/register";

    useEffect( () => {
        fetch( endpoint )
            .then( res => res.json() )
            .then( data => {
                if( 'csrf_token' in data ) setCsrfToken( data.csrf_token );
            } )
        ;
    }, [] );

    return (
        <View>
            { errors &&
                errors.map( (e, i) => (
                    <Text style={styles.error} key={i}>{e}</Text>
                ) )
            }

            { successMessage &&
                <Text style={styles.successMessage}>{ successMessage }</Text>
            }

            <TextInput 
                mode="outlined" 
                label="First Name" 
                style={styles.input} 
                value={firstName} 
                onChangeText={setFirstName} 
            /> 
            <TextInput 
                mode="outlined" 
                label="Last Name" 
                style={styles.input} 
                value={lastName} 
                onChangeText={setLastName} 
            /> 
            <TextInput 
                mode="outlined" 
                label="Username/Email" 
                style={styles.input} 
                inputMode="email" 
                value={username} 
                onChangeText={setUsername} 
            />
            <TextInput 
                mode="outlined" 
                label="Password" 
                style={styles.input} 
                secureTextEntry={secureTextEntry1}
                value={password} 
                onChangeText={setPassword} 
                right={<TextInput.Icon icon={ secureTextEntry1 ? "eye" : "eye-off" } onPress={ () => setSecureTextEntry1( (preVal) => !preVal ) } />}
            />
            <TextInput 
                mode="outlined" 
                label="Password 2" 
                style={styles.input} 
                secureTextEntry={secureTextEntry2}
                value={password2} 
                onChangeText={setPassword2} 
                right={<TextInput.Icon icon={ secureTextEntry2 ? "eye" : "eye-off" } onPress={ () => setSecureTextEntry2( (preVal) => !preVal ) } />}
            />
            
            <Button mode="elevated" icon="login" style={styles.button} onPress={handlePress}>Register</Button>

            <Text>{ csrfToken }</Text>
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
    successMessage: {
        color: 'blue',
        margin: 12,
        fontWeight: 'bold'
    }
});

export default Register;