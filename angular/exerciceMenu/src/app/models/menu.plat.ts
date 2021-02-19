

export class Plats {

    private _name: String;
    private _ingredients: Array<Ingredients>;
    private _types: Types;
    private _serving: Number;

    constructor () {

    }

    public get name(): String {return this._name;}
    public set name(value: String) {this._name = value;}

    public get ingredients(): Array<Ingredients> {return this._ingredients;}
    public set ingredients(value: Array<Ingredients>) {this._ingredients = value;}

    public get types(): Types {return this._types;}
    public set types(value: Types) {this._types = value;}

    public get serving(): Number {return this._serving;}
    public set serving(value: Number) {this._serving = value;}

    public addIngredients(tab: Array<Ingredients>, ingredient: Ingredients) {
        tab.push(ingredient);
    }

    public deleteIngredients(tab: Array<Ingredients>, ingredient: Ingredients) {
        let index = tab.indexOf(ingredient);
        tab.splice(index, 1);
    }
}

export class Ingredients {

    private name: String;
    private season: Season;

    constructor () {

    }

    public get getName(): String {return this.name}
    public set setName(value: String) {this.name = value}

    public get getSeason(): Season {return this.season}
    public set setSeason(value: Season) {this.season = value}
}

export enum Season {
    summer, autumn, winter, spring
}

export enum Types {

    viande = 1,
    feculent = 2,
    vege = 3
    
    }