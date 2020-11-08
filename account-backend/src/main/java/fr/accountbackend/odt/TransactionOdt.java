package fr.accountbackend.odt;

import java.util.Date;

import fr.accountbackend.models.TransactionType;

public class TransactionOdt {
    private float amount;
    private String fromWho;
    private Date date;
    private TransactionType transactionType;
    private Date transactionDate;


    public TransactionOdt() {
    }

    public TransactionOdt(float amount, String fromWho, Date date, TransactionType transactionType, Date transactionDate) {
        this.amount = amount;
        this.fromWho = fromWho;
        this.date = date;
        this.transactionType = transactionType;
        this.transactionDate = transactionDate;
    }

    public float getAmount() {
        return this.amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getFromWho() {
        return this.fromWho;
    }

    public void setFromWho(String fromWho) {
        this.fromWho = fromWho;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public TransactionType getTransactionType() {
        return this.transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public Date getTransactionDate() {
        return this.transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public TransactionOdt amount(float amount) {
        this.amount = amount;
        return this;
    }

    public TransactionOdt fromWho(String fromWho) {
        this.fromWho = fromWho;
        return this;
    }

    public TransactionOdt date(Date date) {
        this.date = date;
        return this;
    }

    public TransactionOdt transactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
        return this;
    }

    public TransactionOdt transactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    
    @Override
    public String toString() {
        return "{" +
            " amount='" + getAmount() + "'" +
            ", fromWho='" + getFromWho() + "'" +
            ", date='" + getDate() + "'" +
            ", transactionType='" + getTransactionType() + "'" +
            ", transactionDate='" + getTransactionDate() + "'" +
            "}";
    }
    
}
