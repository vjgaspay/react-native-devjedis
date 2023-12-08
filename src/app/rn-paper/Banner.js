import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Banner, Icon } from "react-native-paper";

const RNPaperBanner = () => {
    const [ visible, setVisible ] = useState(true);

    return (
        <Banner 
            visible={visible}
            actions={[
                {
                    label: "Fix it",
                    onPress: () => setVisible(false)
                },
                {
                    label: "Learn more",
                    onPress: () => setVisible(false)
                }
            ]}
            icon={ ({size}) => (
                <Icon source="information" color="orange" size={size} />
                // <Image
                //     source={ require("../../../assets/favicon.png") }
                //     style={{
                //         width: size,
                //         height: size
                //     }}
                // />
            ) }
        >Cannot process your request. You need to add more information.</Banner>
    );
}

const styles = StyleSheet.create({});

export default RNPaperBanner;