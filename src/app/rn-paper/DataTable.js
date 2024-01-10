import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const RNPaperDataTable = () => {
    const [items] = useState([
        { key: 1, name: 'Rojan', age: 20, sex: 'Male' },
        { key: 2, name: 'Ramla', age: 21, sex: 'Female' },
        { key: 3, name: 'Jaemily', age: 22, sex: 'Female' },
        { key: 4, name: 'Keith', age: 23, sex: 'Male' },
        { key: 5, name: 'Chris', age: 24, sex: 'Female' },
        { key: 6, name: 'Pat', age: 25, sex: 'Female' },
        { key: 7, name: 'Korrene', age: 26, sex: 'Female' },
        { key: 8, name: 'Lingki', age: 27, sex: 'Male' },
    ]);

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([ 3, 4, 5 ]);
    const [itemsPerPage, setItemsPerPage] = useState( numberOfItemsPerPageList[0] );

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    useEffect( () => {
        setPage(0);
    }, [itemsPerPage] );

    return (
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Age</DataTable.Title>
                    <DataTable.Title>Sex</DataTable.Title>
                </DataTable.Header>

                { items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell>{item.age}</DataTable.Cell>
                        <DataTable.Cell>{item.sex}</DataTable.Cell>
                    </DataTable.Row>
                )) }
                
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={setItemsPerPage}
                    selectPageDropdownLabel={'Rows per page'}
                    showFastPaginationControls
                />
            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RNPaperDataTable;