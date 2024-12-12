import { useState, useEffect } from 'react';
import { Country } from '../config/entities/country';
import { Continent } from '../responses/dataCountries';
import { CountriesAdapter } from '../api/countriesAdapter';

export const useCountries = (continent: Continent) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true); 
        setError(null); 
        const data = await CountriesAdapter.getCountries(continent);
        
        if (data) {
          setCountries(data); 
        } else {
          setError('There is no country for this region.');
        }
      } catch (error) {
        setError('Error');
        console.error('Error in useCountries:', error);
      } finally {
        setLoading(false); 
      }
    };

    loadCountries();
  }, [continent]); 

  return { countries, loading, error };
};