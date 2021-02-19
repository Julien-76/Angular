export class Ingredients {

    private name: String;
    private season: Season;

    constructor () {

    }

    public get getName(): String {return this.name}
    public set setName(value: String) {this.name = value}

    public get getSeason(): String {return this.season}
    public set setSeason(value: String) {this.season = value}
}

export enum Season {
    summer, autumn, winter, spring
}