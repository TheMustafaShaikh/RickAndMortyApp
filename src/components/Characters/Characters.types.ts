export interface IData {
    characters:ICharacters;
}

export interface ICharacters {
    info:Info;
    results:IResults[];
}

export interface IVariables{
    page:number;
}

export interface Info {
    count: number;
    next: number | null;
    pages: number;
    prev: null | number;
}

export interface IResults {
    gender: string;
    id: string;
    image:string;
    name: string;
    species: string;
    status:string;
    type:string;
}