export enum Season {
    summer,
    automn,
    winter,
    spring
}

export class Ingredient {
    constructor(public name: string, private _season: Season) { }

    get season(): Season { return this._season; }
}

export enum PlatType {
    viande = 1,
    vegetarien = 2,
    feculent = 3
}

/**
 * @invariant {number} _serving > 0 
 */
export class Plat {

    private _serving: number = 0;
    private _createAt: Date;
    private _updateAt: Date;
    private _ingredients: Array<Ingredient> = [];


    constructor(public name: string, public type: PlatType, serving: number, ...ingredients: Array<Ingredient>) {
        this.serving = serving;
        this._createAt = new Date();
        this._updateAt = new Date();

        this.addIngredient(...ingredients);
    }
    
    get serving(): number { return this._serving; }
    get createAt(): Date { return this._createAt; } //Sujet a changement
    get updateAt(): Date { return this._updateAt; } //Sujet a changement
    get ingredients(): Array<Ingredient> { return this._ingredients; } //

    set serving(v: number) { 
        if (v <= 0) throw new Error(`Serving must be greater than 0 => value give ${v}`);
        this._serving = v;
    }

    addIngredient(...ingredients: Array<Ingredient>) {
        for(let ingredient of ingredients){
            let index = this._ingredients.findIndex(i => i.name === ingredient.name);

            if (index == -1) {
                this._ingredients.push(ingredient);
            }
        }
    }

    removeIngredient(ingredient: Ingredient) {
        const index = this._ingredients.findIndex(i => i.name === ingredient.name);
        if (index != -1) {
            this._ingredients.splice(index, 1);
        }
    }
}

const p = new Plat("Pâte bolo", PlatType.viande, 4, new Ingredient("pâte", Season.winter), new Ingredient("tomate", Season.summer));

console.log(p);