export interface Country {
    name: {
        common: string;
    };
    capital: string[];
    languages: string[];
    flag: string | null;
    latlng: number[] | null;
    continent: string;
}