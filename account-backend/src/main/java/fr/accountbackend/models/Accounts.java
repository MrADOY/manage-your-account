package fr.accountbackend.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Accounts {
    @Id
    private int id;
    private float balance;
    private String accountNumber;
    private String name;

    
    @ManyToOne
    private Users users; 
    
    @OneToMany(mappedBy="accounts")
    private List<Transactions> transactions;

    public Accounts() {
    }

    public Accounts(int id, float balance, String accountNumber, Users user, List<Transactions> transactions) {
        this.id = id;
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.users = user;
        this.transactions = transactions;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Users getUsers() {
        return this.users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public List<Transactions> getTransactions() {
        return this.transactions;
    }

    public void setTransactions(List<Transactions> transactions) {
        this.transactions = transactions;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getBalance() {
        return this.balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public String getAccountNumber() {
        return this.accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Users getOwner() {
        return this.users;
    }

    public void setOwner(Users owner) {
        this.users = owner;
    }

    public List<Transactions> getTransaction() {
        return this.transactions;
    }

    public void setTransaction(List<Transactions> transactions) {
        this.transactions = transactions;
    }

    public Accounts id(int id) {
        this.id = id;
        return this;
    }

    public Accounts balance(float balance) {
        this.balance = balance;
        return this;
    }

    public Accounts accountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }

    public Accounts user(Users user) {
        this.users = user;
        return this;
    }

    public Accounts transactions(List<Transactions> transactions) {
        this.transactions = transactions;
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", balance='" + getBalance() + "'" +
            ", accountNumber='" + getAccountNumber() + "'" +
            ", owner='" + getOwner() + "'" +
            ", transactions='" + getTransaction() + "'" +
            "}";
    }
}