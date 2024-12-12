import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'; 
import React from 'react';
import { useAppContext } from '../context/appCountryContext'; 

export default function CountriesInfo({ route }: any) {
  const { name, continent, capital, flag, language, latlng } = route.params;
  const lat = latlng[0];
  const lng = latlng[1];
  const { theme } = useAppContext(); 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: theme === 'light' ? '#faf7f4' : '#2c3e50', 
    },
    infoContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: theme === 'light' ? '#d5f5e3' : '#34495e',  
      borderRadius: 20, 
      padding: 20,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
    },
    textContainer: {
      flex: 1, 
      marginRight: 15, 
    },
    flagContainer: {
      alignItems: 'center',
    },
    flag: {
      width: 120, 
      height: 75,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: theme === 'light' ? '#f1c40f' : '#e74c3c', 
    },
    title: {
      fontSize: 28, 
      fontWeight: '800',
      color: theme === 'light' ? '#2c3e50' : '#ecf0f1', 
      marginBottom: 15,
    },
    infoText: {
      fontSize: 18, 
      color: theme === 'light' ? '#2c3e50' : '#ecf0f1', 
      marginBottom: 12,
    },
    highlight: {
      fontWeight: 'bold',
      color: theme === 'light' ? '#e74c3c' : '#f1c40f', 
    },
    coordinatesText: {
      fontSize: 16,
      color: theme === 'light' ? '#34495e' : '#bdc3c7', 
      marginTop: 10,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name.common}</Text>
          <Text style={styles.infoText}>
            Continent: <Text style={styles.highlight}>{continent}</Text>
          </Text>
          <Text style={styles.infoText}>
            Capital: <Text style={styles.highlight}>{capital}</Text>
          </Text>
          <Text style={styles.infoText}>
            Language: <Text style={styles.highlight}>{language}</Text>
          </Text>
          <Text style={styles.coordinatesText}>
            Latitude: {lat}, Longitude: {lng}
          </Text>
        </View>
        <View style={styles.flagContainer}>
          <Image source={{ uri: flag }} style={styles.flag} />
        </View>
      </View>
    </ScrollView>
  );
}
