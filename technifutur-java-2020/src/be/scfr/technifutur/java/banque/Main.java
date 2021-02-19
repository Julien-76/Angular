package be.scfr.technifutur.java.banque;

import be.scfr.technifutur.java.banque.error.ArgumentOutOfRangeException;
import be.scfr.technifutur.java.banque.error.InvalidOperationException;
import be.scfr.technifutur.java.banque.error.SoldeInsuffisantException;
import be.scfr.technifutur.java.banque.model.*;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Banque b = new Banque("BlopBanque");
        Personne titulaire = new Personne();
        titulaire.setNom("Ovyn");
        titulaire.setPrenom("Flavian");
        titulaire.setDateNaiss(LocalDate.of(1991, 7, 19));

        try {
            Compte courant = new Courant("BE12 1234 1234 1234", titulaire, 500, 100);
            Epargne epargne = new Epargne("BE13 1234 1234 1234", titulaire, 200);

            b.ajouter(courant);
            b.ajouter(epargne);

//            courant.retrait(590);

            Compte c = b.getCompte("BE12 1234 1234 1234");
            c.retrait(590);
            System.out.println(c.getSolde());
        } catch (InvalidOperationException e) {
            System.out.println(e.getMessage());
        } catch (ArgumentOutOfRangeException | SoldeInsuffisantException e) {
            e.printStackTrace();
        }
    }
}
