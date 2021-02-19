package be.scfr.technifutur.java.banque.model;

import be.scfr.technifutur.java.banque.error.ArgumentOutOfRangeException;
import be.scfr.technifutur.java.banque.error.SoldeInsuffisantException;

import java.time.LocalDateTime;

public class Epargne extends Compte {

    private LocalDateTime dateDernierRetrait;

    public Epargne(String numero, Personne titulaire, LocalDateTime dateDernierRetrait) {
        super(numero, titulaire);
    }

    public Epargne(String numero, Personne titulaire, double solde) {
        super(numero, titulaire, solde);
    }

    public Epargne(Epargne toCopy) {
        super(toCopy.getNumero(), toCopy.getTitulaire(), toCopy.getSolde());
        this.dateDernierRetrait = toCopy.dateDernierRetrait;
    }

    @Override
    public void retrait(double montant) throws ArgumentOutOfRangeException, SoldeInsuffisantException {
        if (montant > this.getSolde()) {
            throw new SoldeInsuffisantException();
        }

        super.retrait(montant);
        this.dateDernierRetrait = LocalDateTime.now();
    }

    public LocalDateTime getDateDernierRetrait() {
        return dateDernierRetrait;
    }

    @Override
    protected double calculInteret() {
        return this.getSolde() * 0.045;
    }

    @Override
    public Compte clone() {
        return new Epargne(this);
    }
}
