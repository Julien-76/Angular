export class Personne {
    nom: string;
    prenom: string;
    dateNaiss: Date;

    /**
     * Constructeur permet de construire la personne sur base de son nom, prenom, dateNaiss ou bien sur base de son nom, prenom ou bien sur base de son nom ou bien sur base de son prenom... Mais je peux également faire une copie d'une personne
     * @param {Partial<{nom: string, prenom: string, dateNaiss: Date}> | Personne} obj 
     */
    constructor(obj?: Partial<{nom: string, prenom: string, dateNaiss: Date}>|Personne) {
        this.nom = obj && obj.nom || "Pas de nom"; //si l'obj != null && obj.nom != null alors this.nom = obj.nom sinon "Pas de nom" ==> COALESCE
        this.prenom = obj && obj.prenom ? obj.prenom : "Pas de prenom";
        this.dateNaiss = obj && obj.dateNaiss || new Date();
    }
}

export abstract class Compte {
    private numero: string;
    private solde: number;
    private titulaire: Personne;
    private passageEnNegatifEvent: Function;
    // private passageEnNegatifEvent: (c: Compte) => void;

    /**
     * 
     * @param numero 
     * @param titulaire 
     * @param solde Optionnel avec valeur par défaut de 0
     */
    constructor(numero: string, titulaire: Personne, solde: number = 0) {
        this.numero = numero;
        this.titulaire = new Personne(titulaire);
        this.solde = solde;
    }

    get Numero(): string { return this.numero; }
    get Titulaire(): Personne { return this.titulaire; }
    get Solde(): number { return this.solde; }
    get PassageEnNegatifEvent(): Function { return this.PassageEnNegatifEvent; }

    set Numero(v: string) { this.numero = v; }
    set Titulaire(v: Personne) { this.titulaire = v; }
    set PassageEnNegatifEvent(v: Function) { this.passageEnNegatifEvent = v; }

    retrait(montant: number): void {
        if (montant <= 0) throw new Error("Que fais-tu débile !!!");

        this.solde -= montant;
    }
    depot(montant: number): void {
        if (montant <= 0) throw new Error("Que fais-tu débile2 !!!");

        this.solde += montant;
    }

    abstract calculInteret(): number;
    appliquerInteret(): void {
        this.solde += this.calculInteret();
    }
}

export class Courant extends Compte {
    private ligneDeCredit: number;

    constructor(numero: string, titulaire: Personne, solde: number = 0, ligneDeCredit: number = 0) {
        super(numero, titulaire, solde);
        this.LigneDeCredit = ligneDeCredit;
    }

    get LigneDeCredit(): number { return this.ligneDeCredit; }
    set LigneDeCredit(v: number) {
        if (v < 0) throw new Error("Ligne de crédit doit être positive");

        this.ligneDeCredit = v;
    }

    retrait(montant: number) {
        if (this.Solde - montant < -this.LigneDeCredit) throw new Error("Casse toi sale pauvre !");

        const oldSolde = this.Solde;
        super.retrait(montant);
        if (oldSolde > 0 && this.Solde < 0) {
            //? nullsafe operator
            this.PassageEnNegatifEvent?.call(this);
        }
    }

    calculInteret(): number {
        return this.Solde * (this.Solde >= 0 ? 0.03 : 0.0975);
    }

}

export class Banque {
    private comptes: Map<string, Compte> = new Map<string, Compte>();

    constructor(private nom: string) {
    }

    get Nom(): string { return this.nom; }
    set Nom(v: string) { this.nom = v; }

    get Comptes(): Array<Compte> {
        // const array = [];

        // for(const compte of this.comptes.values()) {
        //     array.push(compte);
        // }

        // return array;
        return [...this.comptes.values()];
    }

    getCompte(numero: string): Compte | null {
        return this.comptes.get(numero);
    }

    addCompte(compte: Compte): void {
        if (this.comptes.has(compte.Numero)) return;

        compte.PassageEnNegatifEvent = this.passageEnNegatifAction;
        this.comptes.set(compte.Numero, compte);
    }

    removeCompte(numero: string): void {
        if (!this.comptes.has(numero)) return;

        this.comptes.delete(numero);
    }

    private passageEnNegatifAction(c: Compte) {
        console.log(`Le compte ${c.Numero} est passé en négatif`);        
    }
}