package be.scfr.technifutur.java.banque.model;

import java.time.LocalDate;

public class Personne {
    private String nom;
    private String prenom;
    private LocalDate dateNaiss;

    public Personne() {}
    public Personne(Personne toCopy) {
        this.nom = toCopy.nom;
        this.prenom = toCopy.prenom;
        this.dateNaiss = toCopy.dateNaiss;
    }

    public String getNom() {
        return nom;
    }

    public Personne setNom(String nom) {
        this.nom = nom;
        return this;
    }

    public String getPrenom() {
        return prenom;
    }

    public Personne setPrenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public LocalDate getDateNaiss() {
        return dateNaiss;
    }

    public Personne setDateNaiss(LocalDate dateNaiss) {
        this.dateNaiss = dateNaiss;
        return this;
    }
}
