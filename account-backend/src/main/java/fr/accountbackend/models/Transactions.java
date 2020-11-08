package fr.accountbackend.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float amount;
    private String fromWho;
    @Temporal(TemporalType.DATE)
    private Date transactionDate;
    @ManyToOne
    private Accounts accounts;
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;

    public Transactions() {
    }

    public Transactions(int id, float amount, String from, Date date, Accounts accounts, TransactionType transactionType) {
        this.id = id;
        this.amount = amount;
        this.fromWho = from;
        this.transactionDate = date;
        this.accounts = accounts;
        this.transactionType = transactionType;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getAmount() {
        return this.amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getFrom() {
        return this.fromWho;
    }

    public void setFrom(String from) {
        this.fromWho = from;
    }

    public Date getDate() {
        return this.transactionDate;
    }

    public void setDate(Date date) {
        this.transactionDate = date;
    }

    public Accounts getAccount() {
        return this.accounts;
    }

    public void setAccount(Accounts account) {
        this.accounts = account;
    }

    public TransactionType getTransactionType() {
        return this.transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public Transactions id(int id) {
        this.id = id;
        return this;
    }

    public Transactions amount(float amount) {
        this.amount = amount;
        return this;
    }

    public Transactions from(String from) {
        this.fromWho = from;
        return this;
    }

    public Transactions date(Date date) {
        this.transactionDate = date;
        return this;
    }

    public Transactions account(Accounts account) {
        this.accounts = account;
        return this;
    }

    public Transactions transactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", amount='" + getAmount() + "'" +
            ", from='" + getFrom() + "'" +
            ", date='" + getDate() + "'" +
            ", account='" + getAccount() + "'" +
            ", transactionType='" + getTransactionType() + "'" +
            "}";
    }


}
