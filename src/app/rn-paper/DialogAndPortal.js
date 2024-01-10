import { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { Dialog, Portal, Button, Text } from "react-native-paper";

const RNPaperDialogAndPortal = () => {
    const [visible, setVisible] = useState(true);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <View>
            <Portal>
                <Text>Text on a portal</Text>
            </Portal>

            <Button onPress={showDialog}>Show dialog again</Button>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} dismissable={false} style={{backgroundColor: 'gold'}}>
                    <Dialog.Icon icon="information" />
                    <Dialog.Title style={{textAlign: 'center', color: 'green'}}>Information</Dialog.Title>
                    <Dialog.Content>
                        <Text>You are viewing a page.</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Okay</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RNPaperDialogAndPortal;