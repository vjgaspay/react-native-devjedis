import { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { Link } from "expo-router";

const Login = () => {
    const [ showName, setShowName ] = useState(true);
    const toggleSwitch = () => {
        setShowName( (prevVal) => !prevVal );
    }

    return (
        <View>
            <Text>Login Screen</Text>
            <Link href="/user/login/forgot-password" style={{marginTop: 15, color: 'blue'}}>Forgot Password</Link>

            <Link href="/user/login/modal" style={{marginTop: 15, color: 'blue'}}>Show Modal</Link>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Switch
                    value={showName}
                    onValueChange={toggleSwitch}
                    trackColor={{ false: '#dcdcdc', true: '#0d6efd' }}
                    thumbColor={ showName ? 'white' : 'white' }
                    ios_backgroundColor="#dcdcdc"
                />
                <Text style={{ fontSize: 18, paddingLeft: 10 }}>Show name</Text>
            </View>

            { showName && <Text style={{marginTop: 15, fontSize: 25}}>{ process.env.EXPO_PUBLIC_MY_NAME }</Text> }
            
        </View>
    );
}

const styles = StyleSheet.create({});

export default Login;