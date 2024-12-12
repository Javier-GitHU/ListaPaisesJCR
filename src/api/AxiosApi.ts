import axios from "axios";
import { DataCountries } from "../responses/dataCountries";
import { HttpError } from "./httpError";
import { Http } from "./http";
export class HttpAxiosCountries extends Http {
  async getCountries(continent: string): Promise<DataCountries[] | HttpError> {
    try {
      const { data } = await axios.get<DataCountries[]>(`${this.url_base}/v3.1/region/${continent}`);
      return data;
    } catch (error) {
      return new HttpError(`${error}`);
    }
  }
}
