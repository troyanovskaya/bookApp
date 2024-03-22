import { SearchBy } from "./searchBy";

export interface Book {
  id:string;
  name:string,
  year: number,
  author:string,
  genres:string[],
  description:string[],
  img:string,
  state:string,
  keywords:string[],
  search:SearchBy,
  series?:string[]
}