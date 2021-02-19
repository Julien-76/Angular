package be.scfr.technifutur.java.banque.model;

import be.scfr.technifutur.java.banque.error.ArgumentOutOfRangeException;
import be.scfr.technifutur.java.banque.error.InvalidOperationException;
import be.scfr.technifutur.java.banque.error.SoldeInsuffisantException;

public class Courant extends Compte {
    private double ligneDeCredit;

    public Courant(String numero, Personne titulaire, double ligneDeCredit) throws InvalidOperationException {
        super(numero, titulaire);
        this.setLigneDeCredit(ligneDeCredit);
    }
    public Courant(String numero, Personne titulaire, double solde, double ligneDeCredit) throws InvalidOperationException {
        super(numero, titulaire, solde);
        this.setLigneDeCredit(ligneDeCredit);
    }

    public Courant(Courant toCopy) {
        super(toCopy.getNumero(), toCopy.getTitulaire(), toCopy.getSolde());
        this.ligneDeCredit = toCopy.ligneDeCredit;
    }

    public double getLigneDeCredit() {
        return ligneDeCredit;
    }

    public Courant setLigneDeCredit(double ligneDeCredit) throws InvalidOperationException {
        if (ligneDeCredit < 0) throw new InvalidOperationException();
        this.ligneDeCredit = ligneDeCredit;
        return this;
    }

    public void retrait(double montant) throws ArgumentOutOfRangeException, SoldeInsuffisantException {
        if (this.getSolde() - montant < -this.ligneDeCredit) throw new SoldeInsuffisantException();

        double oldSolde = this.getSolde();
        super.retrait(montant);
        if (oldSolde > 0 && this.getSolde() < 0) this.passageEnNegatifEvent.invoke(this);
    }

    @Override
    protected double calculInteret() {
        return this.getSolde() * (this.getSolde() >= 0 ? 0.03 : 0.0975);
    }

    @Override
    public Compte clone() {
        return new Courant(this);
    }
}
