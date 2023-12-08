import { Text, View, StyleSheet } from "react-native";
import { Badge, IconButton } from "react-native-paper";

const RNPaperBadge = () => {
    return (
        <View>
            <View style={styles.iconBadgeContainer}>
                <View>
                    <IconButton icon="message-text-outline" size={40} />
                    <Badge visible={true} style={styles.badge}>12</Badge>
                </View>
            </View>

            <View style={styles.iconBadgeContainer}>
                <View>
                    <IconButton icon="message-text-outline" size={40} />
                    <Badge visible={true} size={8} style={{ position: "absolute", top: 10, right: 10 }} />
                </View>
            </View>

            <View style={styles.iconBadgeContainer}>
                <View style={{margin: 16}}>
                    <Text style={{fontSize: 20}}>Vincent</Text>
                    <Badge visible={true} style={{ position: "absolute", top: -12, right: -22 }}>12</Badge>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconBadgeContainer: {
        flexWrap: "wrap"
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 0
    }
});

export default RNPaperBadge;