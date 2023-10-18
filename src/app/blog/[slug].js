import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

const BlogSlug = () => {
    const { slug } = useLocalSearchParams();

    return (
        <View>
            <Text>Blog Screen</Text>
            <Text>Blog ID: {slug}</Text>
            <Link href="/" style={{marginTop: 15, color: 'blue'}}>Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({});

export default BlogSlug;