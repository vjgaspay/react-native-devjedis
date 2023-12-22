
// --> run: TITLE="" R_PATH="" node _WorkSmart

const fs = require('fs');

const title = process.env.TITLE;
const path = process.env.R_PATH;

const template =
`import { Text, View, StyleSheet } from "react-native";
import { ${path} } from "react-native-paper";

const RNPaper${path} = () => {
    return (
        <View>
            <Text>${path}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RNPaper${path};`;

fs.readFile("src/app/rn-paper/index.js", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    const new_data = data.toString()
        .replace("</ScrollView>", `\t<LinkWithDivider title="${title}" resourcePath="${path}" />\n\t\t</ScrollView>`);

    fs.writeFile("src/app/rn-paper/index.js", new_data, (err) => {
        if(err) console.error(err);

        console.log("A link has been added to index.js");
    });
});

fs.appendFile(`src/app/rn-paper/${path}.js`, template, (err) => {
    if(err) console.error(err);

    console.log(`File ${path}.js has been created.`);
});