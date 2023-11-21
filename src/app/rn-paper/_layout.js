import { Stack } from "expo-router";

const RNPaperLayout = () => {
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'gold',
                    fontSize: 20
                },
            }}
        >
            <Stack.Screen name="index"
                options={{
                    title: "Paper home",
                    headerShown: false
                }}
            />
        </Stack>
    );
}

export default RNPaperLayout;