import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useCountries } from "../hooks/useCountries";
import { useAppContext } from "../context/appCountryContext";
import CountryInfo from "../components/countryInformation";

export default function CountriesScreen({ route, navigation }: any) {
    const { continentName } = route.params;
    const { countries, loading } = useCountries(continentName);
    const { theme, setTheme } = useAppContext(); 

    const handleCountryPress = (country: any) => {
        const { name, continent, capital, flag, languages, latlng } = country;
        navigation.navigate("CountriesInfo", {
            name,
            continent,
            capital,
            flag,
            language: languages,
            latlng,
        });
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); 
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 25,
            backgroundColor: theme === 'light' ? '#fff' : '#333', 
            paddingHorizontal: 18,
        },
        title: {
            fontSize: 26,
            fontWeight: "700",
            textAlign: "center",
            color: theme === 'light' ? '#f5f5f5' : '#ccc', 
            backgroundColor: theme === 'light' ? '#3498db' : '#1c1c1c', 
            marginBottom: 12,
            paddingVertical: 8,
            borderRadius: 8,
        },
        emptyContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme === 'light' ? '#fff' : '#333',
        },
        emptyText: {
            fontSize: 18,
            color: theme === 'light' ? '#777' : '#bbb', 
            textAlign: "center",
            paddingHorizontal: 25,
        },
        listContainer: {
            paddingBottom: 22,
        },
        loadingContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme === 'light' ? '#fff' : '#333', 
        },
        loadingText: {
            marginTop: 12,
            fontSize: 18,
            color: theme === 'light' ? '#666' : '#ddd', 
        },
    });

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Getting all countries from {continentName}</Text>
            </View>
        );
    }

    if (!countries || countries.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>There are no countries on {continentName}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countries on {continentName}</Text>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.name.common}
                renderItem={({ item }) => (
                    <CountryInfo
                        name={item.name.common}
                        capital={item.capital}
                        flag={item.flag}
                        languages={item.languages}
                        onPress={() => handleCountryPress(item)}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
}
