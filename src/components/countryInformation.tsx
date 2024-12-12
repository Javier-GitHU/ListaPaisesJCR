
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function CountryInfo({ name, capital, flag, languages, onPress }: any) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable 
      onPress={onPress} 
      onPressIn={() => setIsPressed(true)} 
      onPressOut={() => setIsPressed(false)} 
      style={({ pressed }) => [
        styles.card, 
        { backgroundColor: pressed ? '#d1d8e0' : '#f4f6f9' }
      ]}
    >
      <View style={styles.flagContainer}>
      <Image source={{ uri: flag }} style={styles.flagImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.languages}>Languages: {languages.join()}</Text>
        <Text style={styles.capital}>Capital: {capital}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderColor: "#d1d8e0",
    borderWidth: 1,
    overflow: "hidden",
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  flagContainer: {
    width: 70,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  flagImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  capital: {
    fontSize: 14,
    color: "#6c757d",
    marginVertical: 5,
  },
  languages: {
    fontSize: 14,
    color: "#6c757d",
  },
});