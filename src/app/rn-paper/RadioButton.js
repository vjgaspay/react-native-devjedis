import { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const RNPaperRadioButton = () => {
    const [ checked, setChecked ] = useState('male');
    const [ value, setValue ] = useState('first');
    const [ value2, setValue2 ] = useState('first');

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <RadioButton status='checked' color='green' />
                <Text>Default</Text>
            </View>

            <View style={styles.row}>
                <RadioButton.IOS status='checked' color='green' />
                <Text>iOS</Text>
            </View>

            <View style={styles.row}>
                <RadioButton.Android status='checked' color='green' />
                <Text>Android</Text>
            </View>

            <Text>With state:</Text>
            <View style={styles.row}>
                <RadioButton.Android
                    value='male'
                    status={ checked === 'male' ? 'checked' : 'unchecked' }
                    onPress={ () => setChecked('male') }
                />
                <Text>Male</Text>
            </View>
            <View style={styles.row}>
                <RadioButton.Android
                    value='female'
                    status={ checked === 'female' ? 'checked' : 'unchecked' }
                    onPress={ () => setChecked('female') }
                />
                <Text>Female</Text>
            </View>

            <Text>Group:</Text>
            <RadioButton.Group value={value} onValueChange={newValue => setValue(newValue)}>
                <View style={styles.row}>
                    <RadioButton.Android value='first' />
                    <Text>First</Text>
                </View>
                <View style={styles.row}>
                    <RadioButton.Android value='second' />
                    <Text>Second</Text>
                </View>
            </RadioButton.Group>

            <Text>Item:</Text>
            <RadioButton.Group value={value2} onValueChange={newValue => setValue2(newValue)}>
                <RadioButton.Item
                    label='First item'
                    value='first'
                    mode='android'
                    position='trailing' //trailing or leading
                />
                <RadioButton.Item
                    label='Second item'
                    value='second'
                    mode='android'
                    position='trailing' //trailing or leading
                />
            </RadioButton.Group>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 6
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default RNPaperRadioButton;