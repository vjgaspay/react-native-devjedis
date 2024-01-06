import { useState } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { Chip } from "react-native-paper";

const RNPaperChip = () => {
    const [ isSelected, setIsSelected ] = useState(false);

    return (
        <View style={styles.container}>
            <Chip style={styles.chip} onPress={() => {}}>Simple</Chip>

            <Chip selected style={styles.chip} onPress={() => {}}>Selected</Chip>

            <Chip icon="information" style={styles.chip} onPress={() => {}}>With icon</Chip>

            <Chip disabled icon="information" style={styles.chip} onPress={() => {}}>Disabled</Chip>

            <Chip elevated style={styles.chip} onPress={() => {}}>Elevated</Chip>

            <Chip mode='outlined' style={styles.chip} onPress={() => {}}>Outlined</Chip>

            <Chip onClose={() => {}} style={styles.chip} onPress={() => {}}>With close/remove button</Chip>

            <Chip 
                style={styles.chip} 
                onPress={() => {}}
                avatar={ <Image source={ require('../../../assets/favicon.png') } /> }
            >Avatar</Chip>

            <Chip 
                style={styles.chip} 
                onPress={() => setIsSelected( prev => !prev)}
                selected={isSelected}
            >With state</Chip>
        </View>
    );
}

const styles = StyleSheet.create({
    chip: {
        margin: 4
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default RNPaperChip;