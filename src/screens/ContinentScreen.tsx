import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useAppContext } from '../context/appCountryContext';
import { Region } from '../responses/dataCountries';

const continents = Object.values(Region).map(region => ({ name: region }));

export default function ContinentsScreen({ navigation }: any) {
    const { theme, setTheme } = useAppContext(); 

    const navigateToCountries = (continentName: string) => {
        navigation.navigate('CountriesMap', { continentName });
    };

    const renderItem = ({ item }: { item: { name: string } }) => (
        <View style={styles.listItem}>
            <Button
                title={item.name}
                onPress={() => navigateToCountries(item.name)}
            />
        </View>
    );

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); 
    };

    return (
        <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
            <Text style={styles.title}>Select a continent</Text>
            <FlatList
                data={continents}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.list}
            />
            <Button title="Toggle Dark/Light Mode" onPress={toggleTheme} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        margin: 25,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#3498db',
    },
    list: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    listItem: {
        width: '80%',
        marginVertical: 12,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 5,
    },
    lightBackground: {
        backgroundColor: '#fff',  
    },
    darkBackground: {
        backgroundColor: '#2c3e50',  
    },
});
