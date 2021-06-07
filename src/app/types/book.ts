export interface Book {
    key: string,
    title: string,
    publish_date: string[],
    isbn: string[],
    cover_i: number,
    author_name?: string[],
    publisher: string[]
}