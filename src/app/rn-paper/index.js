import { ScrollView } from "react-native";
import LinkWithDivider from "./components/LinkWithDivider";

const RNPaperIndex = () => {
    return(
        <ScrollView>
            <LinkWithDivider title="Button" resourcePath="Button" />
            <LinkWithDivider title="Helper Text" resourcePath="HelperText" />
            <LinkWithDivider title="Text Input" resourcePath="TextInput" />
        </ScrollView>
    );
}

export default RNPaperIndex;