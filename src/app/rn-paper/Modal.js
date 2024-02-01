import { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Modal, Portal, Button } from "react-native-paper";

const RNPaperModal = () => {
    const [ visible, setVisible ] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={styles.modalContainer}
                    //dismissable={false}
                >
                    <Text>Example modal. click outside to dismiss.</Text>
                </Modal>

                <Button style={{marginTop: 130}} onPress={showModal}>Show</Button>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'yellow',
        padding: 20
    }
});

export default RNPaperModal;