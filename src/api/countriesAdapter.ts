import { Config } from "../config/Config";
import { HttpAxiosCountries } from "./AxiosApi";
import { CountryMapper } from "../Mapper/countriesMapper";
import { HttpError } from "./httpError";
import { Country } from "../config/entities/Country";
export class CountriesAdapter {
    static async getCountries(continent:string): Promise<Country[] | null> {
        const http = new HttpAxiosCountries(Config.countriesAPI);
    
        try {
          // Obtener datos de países
          const countriesList = await http.getCountries(continent);
    
          // Manejo de errores
          if (countriesList instanceof HttpError) {
            console.error("Error fetching countries:");
            return [];
          }
          const mappedCountries = countriesList.map(CountryMapper);
          return mappedCountries; 
        } catch (error) {
          console.error("Unexpected error:", error);
          return [];
        }
    }
    
}