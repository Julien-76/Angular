package be.scfr.technifutur.java.banque.model;

public interface IBanker extends ICustomer{
    void appliquerInteret();
    Personne getTitulaire();
    String getNumero();
}
