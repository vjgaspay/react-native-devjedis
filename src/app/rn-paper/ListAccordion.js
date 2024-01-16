import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

const RNPaperListAccordion = () => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    description="Not linked to a state"
                    left={ (props) => <List.Icon {...props} icon="folder" />}
                >
                    <List.Subheader>First two</List.Subheader>
                    <List.Item title="First Item" />
                    <List.Item title="Second Item" />

                    <List.Subheader>Next</List.Subheader>
                    <List.Item title="Third Item" />
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={ (props) => <List.Icon {...props} icon="star" />}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    <List.Item title="First Item" right={ (props) => <List.Icon {...props} icon="thumb-up" />} />
                    <List.Item title="Second Item" right={ (props) => <List.Icon {...props} icon="thumb-down" />} />
                </List.Accordion>
            </List.Section>

            <List.Subheader>Grouped Accordion</List.Subheader>
            <List.AccordionGroup>
                <List.Accordion title="Accordion 1" id="1">
                    <List.Item title="Item 1" />
                </List.Accordion>
                <List.Accordion title="Accordion 2" id="2">
                    <List.Item title="Item 2" />
                </List.Accordion>
                <List.Accordion title="Accordion 3" id="3">
                    <List.Item title="Item 3" />
                    <List.Item title="Item 4" />
                </List.Accordion>
            </List.AccordionGroup>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RNPaperListAccordion;