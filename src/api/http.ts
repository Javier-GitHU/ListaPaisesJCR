import {DataCountries}  from "../responses/dataCountries";
import { HttpError } from "./httpError";

    interface Config {
        url_base : string;
    }

    export interface InterfaceCountry {
        getCountries(countrie:string) : Promise<DataCountries[] | HttpError>;
    }

    export abstract class Http implements InterfaceCountry {
        protected url_base: string;

        constructor({url_base} : Config) {
            this.url_base = url_base;
        }

        abstract getCountries(countrie:string) : Promise<DataCountries[] | HttpError> ;
    }