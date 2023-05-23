interface Caracteristici{
    content: string;
    regn: string;
    family: string
    height: number;
    cathegory: number;
    ordin: string
}

export interface Vietati extends Caracteristici{
    id: number;
    title: string;
}
