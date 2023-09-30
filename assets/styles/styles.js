import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginHorizontal: 10,
        flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 10,
        height: 40,
        padding: 10
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0d6efd',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 20
    },
    pressableText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});