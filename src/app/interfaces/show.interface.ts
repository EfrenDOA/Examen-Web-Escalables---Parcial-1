export interface Show {
    [x: string]: any;
    name: string,
    description: string,
    image: string,
    year: number,
    episodes: number,
    likes: number[],
    genre: string
}