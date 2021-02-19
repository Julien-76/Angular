package be.scfr.technifutur.java.banque.model;

import be.scfr.technifutur.java.banque.error.ArgumentOutOfRangeException;
import be.scfr.technifutur.java.banque.error.SoldeInsuffisantException;

public interface ICustomer {
    void depot(double montant) throws ArgumentOutOfRangeException;
    void retrait(double montant) throws ArgumentOutOfRangeException, SoldeInsuffisantException;
}
