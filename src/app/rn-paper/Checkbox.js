import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const RNPaperCheckbox = () => {
    const [ iceCreamChecked, setIceCreamChecked ] = useState(false);
    const [ cakeChecked, setCakeChecked ] = useState(false);

    const [ iceCreamChecked2, setIceCreamChecked2 ] = useState(false);
    const [ cakeChecked2, setCakeChecked2 ] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Checkbox
                    status="checked"  //'checked' | 'unchecked' | 'indeterminate'
                    color="red"
                    //disabled
                />
                <Text>Default</Text>
            </View>

            <View style={styles.row}>
                <Checkbox.IOS status="checked" />
                <Text>iOS</Text>
            </View>

            <View style={styles.row}>
                <Checkbox.Android status="checked" />
                <Text>Android</Text>
            </View>

            <Text>With state:</Text>
            <View style={styles.row}>
                <Checkbox.Android
                    status={ iceCreamChecked ? 'checked' : 'unchecked' }
                    onPress={ () => setIceCreamChecked( !iceCreamChecked ) }
                />
                <Text>Ice Cream</Text>
            </View>
            <View style={styles.row}>
                <Checkbox.Android
                    status={ cakeChecked ? 'checked' : 'unchecked' }
                    onPress={ () => setCakeChecked( !cakeChecked ) }
                />
                <Text>Cake</Text>
            </View>

            <Text>Item:</Text>
            <Checkbox.Item
                label="Ice Cream"
                mode="android"
                status={ iceCreamChecked2 ? 'checked' : 'unchecked' }
                onPress={ () => setIceCreamChecked2( !iceCreamChecked2 ) }
                position="trailing"  //trailing or leading
            />
            <Checkbox.Item
                label="Cake"
                mode="android"
                status={ cakeChecked2 ? 'checked' : 'unchecked' }
                onPress={ () => setCakeChecked2( !cakeChecked2 ) }
                position="trailing"  //trailing or leading
            />
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

export default RNPaperCheckbox;