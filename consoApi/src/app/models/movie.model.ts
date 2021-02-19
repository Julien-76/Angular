export class Person {
    id : number;
    lastName : string;
    firstName : string;
}

export class Actor {
    role : string;
    firstName : string;
    lastName : string;
    id : number;
}

export class Movie {
    id : number;
    title : string;
    description : string;
    releaseYear : number;
    realisator : Person;
    scenarist : Person;
    actors? : Actor[];
}