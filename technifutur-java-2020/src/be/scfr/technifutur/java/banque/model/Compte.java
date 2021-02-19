package be.scfr.technifutur.java.banque.model;

import be.scfr.technifutur.java.banque.error.ArgumentOutOfRangeException;
import be.scfr.technifutur.java.banque.error.SoldeInsuffisantException;

import java.time.LocalDateTime;

public abstract class Compte implements IBanker, ICustomer {
    private String numero;
    private double solde;
    private Personne titulaire;
    protected PassageEnNegatifDelegate passageEnNegatifEvent;

    public Compte(String numero, Personne titulaire) {
        this.numero = numero;
        this.titulaire = new Personne(titulaire);
        this.solde = 0;
    }
    public Compte(String numero, Personne titulaire, double solde) {
        this(numero, titulaire);
        this.solde = solde;
    }

    public Compte setPassageEnNegatifEvent(PassageEnNegatifDelegate passageEnNegatifEvent) {
        this.passageEnNegatifEvent = passageEnNegatifEvent; //passageEnNegatifEvent => la methode passageEnNegatifAction de la class Banque
        return this;
    }

    public String getNumero() {
        return numero;
    }

    public Compte setNumero(String numero) {
        this.numero = numero;
        return this;
    }

    public double getSolde() {
        return solde;
    }

    public Personne getTitulaire() {
        return titulaire;
    }

    public Compte setTitulaire(Personne titulaire) {
        this.titulaire = titulaire;
        return this;
    }


    public void retrait(double montant) throws ArgumentOutOfRangeException, SoldeInsuffisantException {
        if (montant <= 0) throw new ArgumentOutOfRangeException();

        this.solde -= montant;
    }

    public void depot(double montant) throws ArgumentOutOfRangeException {
        if (montant <= 0) throw new ArgumentOutOfRangeException();

        this.solde += montant;
    }

    protected abstract double calculInteret();

    public void appliquerInteret() {
        this.solde += this.calculInteret();
    }

    public abstract Compte clone();
}
