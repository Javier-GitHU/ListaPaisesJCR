import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentsScreen from './src/screens/ContinentScreen';
import CountriesInfoScreen from './src/screens/countryDetailScreen';
import CountriesList from './src/screens/countryListScreen';
import { AppProvider } from './src/context/appCountryContext';

const Stack = createStackNavigator();

function App() {
  return (
    
    <AppProvider>  
       <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Continents"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTintColor: '#fff',  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Continents" component={ContinentsScreen} />
        <Stack.Screen name="CountriesMap" component={CountriesList} />
        <Stack.Screen name="CountriesInfo" component={CountriesInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#3498db'
  },
});

export default App;
