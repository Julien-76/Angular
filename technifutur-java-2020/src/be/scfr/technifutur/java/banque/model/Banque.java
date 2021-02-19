package be.scfr.technifutur.java.banque.model;

import java.util.HashMap;
import java.util.Map;

public class Banque {
    private Map<String, Compte> comptes;
    private String nom;

    public Banque(String nom) {
        this.nom = nom;
        this.comptes = new HashMap<>();
    }

    public Map<String, Compte> getComptes() {
        return this.comptes;
    }

    public String getNom() {
        return this.nom;
    }

    public Banque setNom(String nom) {
        this.nom = nom;
        return this;
    }

    public Compte getCompte(String numero) {
        return this.comptes.get(numero);
    }

    public void ajouter(Compte compte) {
        if (this.comptes.containsKey(compte.getNumero())) return;

        Compte copy = compte.clone();
        copy.setPassageEnNegatifEvent(this::passageEnNegatifAction);
        this.comptes.put(compte.getNumero(), copy);
    }

    public void supprimer(String numero) {
        Compte value = this.comptes.get(numero);

        if (value != null) {
            this.comptes.remove(value);
        }
    }

    private void passageEnNegatifAction(Compte compte) {
        System.out.printf("Le compte %s vient de passer en négatif!", compte.getNumero());
    }
}
