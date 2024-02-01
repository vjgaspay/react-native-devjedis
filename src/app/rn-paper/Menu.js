import { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Menu, Button } from "react-native-paper";

const RNPaperMenu = () => {
    const [ visible, setVisible ] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Menu
                visible={visible}
                anchor={<Button onPress={openMenu}>Show Menu</Button>}
                onDismiss={closeMenu}
            >
                <Menu.Item leadingIcon="undo" title="Undo" onPress={() => {}} />
                <Menu.Item leadingIcon="redo" title="Redo" onPress={() => {}} />
                <Menu.Item leadingIcon="content-cut" title="Cut" onPress={() => {}} />
                <Menu.Item leadingIcon="content-copy" title="Copy" onPress={() => {}} />
                <Menu.Item leadingIcon="content-paste" title="Paste" onPress={() => {}} />
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RNPaperMenu;