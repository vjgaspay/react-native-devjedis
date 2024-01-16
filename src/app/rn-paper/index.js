import { ScrollView } from "react-native";
import LinkWithDivider from "./components/LinkWithDivider";

const RNPaperIndex = () => {
    return(
        <ScrollView>
            <LinkWithDivider title="Activity Indicator" resourcePath="ActivityIndicator" />
            <LinkWithDivider title="Avatar" resourcePath="Avatar" />
            <LinkWithDivider title="Badge" resourcePath="Badge" />
            <LinkWithDivider title="Banner" resourcePath="Banner" />
            <LinkWithDivider title="Button" resourcePath="Button" />
            <LinkWithDivider title="Card" resourcePath="Card" />
			<LinkWithDivider title="Checkbox" resourcePath="Checkbox" />
			<LinkWithDivider title="Chip" resourcePath="Chip" />
			<LinkWithDivider title="Data Table" resourcePath="DataTable" />
			<LinkWithDivider title="Dialog and Portal" resourcePath="DialogAndPortal" />
			<LinkWithDivider title="Floating Action Button" resourcePath="FloatingActionButton" />
            <LinkWithDivider title="Helper Text" resourcePath="HelperText" />
            <LinkWithDivider title="Icon & Icon Button" resourcePath="IconAndIconButton" />
			<LinkWithDivider title="List Accordion" resourcePath="ListAccordion" />
			<LinkWithDivider title="Radio Button" resourcePath="RadioButton" />
			<LinkWithDivider title="Switch" resourcePath="Switch" />
            <LinkWithDivider title="Text Input" resourcePath="TextInput" />
		</ScrollView>
    );
}

export default RNPaperIndex;