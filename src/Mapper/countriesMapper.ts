import { Country } from "../config/entities/country";
import { DataCountries } from "../responses/dataCountries";

export const CountryMapper = (item: DataCountries): Country => {
    return {
        name: {
            common: item.name.common
        },
        capital: item.capital ?? ['Unknown'], 
        languages: item.languages ? Object.values(item.languages) : ['Unknown'],
        flag: item.flags?.png ?? '', 
        latlng: item.latlng ?? [0, 0], 
        continent: item.continents?.[0] ?? 'Unknown' 
    };
}