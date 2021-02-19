package be.scfr.technifutur.java.banque.model;

@FunctionalInterface
public interface PassageEnNegatifDelegate {
    void invoke(Compte compte);
}
