import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Slot, Stack, Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { FontAwesome5, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                title: "Trivut App",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'gold',
                    fontSize: 20
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20
                },
                swipeEnabled: true
            }}
        >
            <Drawer.Screen name="index"
                options={{ 
                    title: "Home", 
                    headerStyle: { backgroundColor: 'orange' },
                    drawerIcon: ({ focused, color, size }) => {
                        const iconName = (focused) ? 'home' : 'home-outline';

                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                }}
            />
            
            <Drawer.Screen name="(root-files)/settings"
                options={{
                    title: "Settings",
                    drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
                }}
            />
            <Drawer.Screen name="(root-files)/faq" 
                options={{ 
                    title: "FAQ",
                    //href: null,    //hide tab
                    drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="frequently-asked-questions" size={size} color={color} />
                }}
            />
            <Drawer.Screen name="login/index"
                options={{ 
                    title: "Login", 
                    drawerLabel: "Sign in",
                    drawerIcon: ({ color, size }) => <AntDesign name="login" size={size} color={color} />
                }} 
            />
            <Drawer.Screen name="blog/[slug]"
                options={{
                    title: "Blog",
                    drawerIcon: ({ color, size }) => <FontAwesome5 name="blog" size={size} color={color} />
                }}
            />

        </Drawer>



        // <Tabs
        //     screenOptions={{
        //         headerShown: true,
        //         title: "Trivut App",
        //         headerTitleAlign: "center",
        //         headerStyle: {
        //             backgroundColor: '#f4511e'
        //         },
        //         headerTintColor: 'white',
        //         headerTitleStyle: {
        //             fontWeight: 'bold',
        //             color: 'gold',
        //             fontSize: 20
        //         },
        //         tabBarActiveTintColor: "red",
        //         tabBarInactiveTintColor: "gray",
        //         tabBarStyle: {
        //             position: 'absolute',
        //             bottom: 20
        //         }
        //     }}
        // >
        //     <Tabs.Screen name="index"
        //         options={{ 
        //             title: "Home", 
        //             headerStyle: { backgroundColor: 'orange' },
        //             tabBarIcon: ({ focused, color, size }) => {
        //                 const iconName = (focused) ? 'home' : 'home-outline';

        //                 return <Ionicons name={iconName} size={size} color={color} />;
        //             }
        //         }}
        //     />
        //     <Tabs.Screen name="(root-files)/faq" 
        //         options={{ 
        //             title: "FAQ",
        //             //href: null,    //hide tab
        //             tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="frequently-asked-questions" size={size} color={color} />
        //         }}
        //     />
        //     <Tabs.Screen name="(root-files)/settings"
        //         options={{
        //             title: "Settings",
        //             tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
        //         }}
        //     />
        //     <Tabs.Screen name="login/index"
        //         options={{ 
        //             title: "Login", 
        //             tabBarLabel: "Sign in",
        //             tabBarIcon: ({ color, size }) => <AntDesign name="login" size={size} color={color} />
        //         }} 
        //     />
        //     <Tabs.Screen name="blog/[slug]"
        //         options={{
        //             title: "Blog",
        //             tabBarIcon: ({ color, size }) => <FontAwesome5 name="blog" size={size} color={color} />
        //         }}
        //     />

        // </Tabs>



        // <Stack
        //     screenOptions={{
        //         headerShown: true,
        //         title: "Trivut App",
        //         headerTitleAlign: "center",
        //         headerStyle: {
        //             backgroundColor: '#f4511e'
        //         },
        //         headerTintColor: 'white',
        //         headerTitleStyle: {
        //             fontWeight: 'bold',
        //             color: 'gold',
        //             fontSize: 20
        //         }
        //     }}
        // >
        //     <Stack.Screen name="index" options={{ title: "Home", headerStyle: { backgroundColor: 'green' } }} />
        //     <Stack.Screen name="(root-files)/settings" options={{ title: "Settings" }} />
        //     <Stack.Screen name="(root-files)/faq" options={{ title: "FAQ" }} />
        //     <Stack.Screen name="login/index" options={{ title: "Login" }} />
        //     <Stack.Screen name="blog/[slug]" options={{ title: "Blog" }} />

        // </Stack>

        
        // <SafeAreaView>
        //     <Slot />
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default Layout;