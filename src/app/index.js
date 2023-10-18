import { Text, View, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";

const Home = () => { //route: /
    const router = useRouter();

    return (
        <View>
            <Text>Home Screen</Text>
            <Link href="/settings" style={{marginTop: 15, color: 'blue'}}>Settings</Link>
            <Link href="/faq" style={{marginTop: 15, color: 'blue'}}>FAQ</Link>
            <Link href="/login" style={{marginTop: 15, color: 'blue'}}>Login</Link>

            <Link href="/blog/12345" style={{marginTop: 15, color: 'blue'}}>Blog - 12345</Link>
            <Link href={{
                pathname: '/blog/[slug]',
                params: { slug: '54321' }
            }} style={{marginTop: 15, color: 'blue'}}>Blog - 54321</Link>

            <Button title="Settings - push" onPress={ () => router.push("/settings") } />
            <Button title="Settings - replace" onPress={ () => router.replace("/settings") } />
        </View>
    );
}

const styles = StyleSheet.create({});

export default Home;