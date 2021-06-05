import {Book} from "./book";

export interface Docs {
    numFound: number,
    start: number,
    numFoundExact: boolean,
    docs: Book[]
}