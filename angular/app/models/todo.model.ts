export enum State {
    NotStart,
    Start
}
export class Todo {
    static nbTodo = 0;
    private _id: number;
    private _title: string;
    private _description: string;
    private _createAt: Date;
    private _updateAt: Date;
    private _dueDate: Date;
    private _state: State;

    constructor(dueDate: Date, obj: Partial<Todo>) {
        this.id = obj && obj.id || ++Todo.nbTodo;
        this.title = obj && obj.title || "Pas de titre";
        this.description = obj && obj.description || "Pas de description";
        this.createAt = obj && obj.createAt || new Date();
        this.updateAt = obj && obj.updateAt || new Date();
        this.dueDate = obj && obj.dueDate || dueDate
    }

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }

    public get title(): string { return this._title; }
    public set title(value: string) { this._title = value; }
    
    public get description(): string { return this._description; }
    public set description(value: string) { this._description = value; }
    
    public get createAt(): Date { return this._createAt; }
    public set createAt(value: Date) { this._createAt = value; }
    
    public get updateAt(): Date { return this._updateAt; }
    public set updateAt(value: Date) { this._updateAt = value; }
    
    public get dueDate(): Date { return this._dueDate; }
    public set dueDate(value: Date) { this._dueDate = new Date(value); }
    
}