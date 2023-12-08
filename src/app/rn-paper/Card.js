import { Text, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button, Card, IconButton } from "react-native-paper";

const RNPaperCard = () => {
    return (
        <ScrollView>
            <Card mode="contained" style={{marginTop: 15}}>
                <Card.Title title="Card title" subtitle="Card Subtitle"
                    left={ (props) => <Avatar.Icon {...props} icon="folder" /> }
                />

                <Card.Content>
                    <Text>The quick brown fox jumps over the lazy dog.</Text>
                    <Text>Lorem ipsum dolor sit</Text>
                </Card.Content>

                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            <Card mode="elevated" style={{marginTop: 15}}>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Content>
                    <Text>The quick brown fox jumps over the lazy dog.</Text>
                    <Text>Lorem ipsum dolor sit</Text>
                </Card.Content>
            </Card>


            <Card.Title title="Card title" subtitle="Card Subtitle"
                left={ (props) => <Avatar.Icon {...props} icon="folder" /> }
                right={ (props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} /> }
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

export default RNPaperCard;