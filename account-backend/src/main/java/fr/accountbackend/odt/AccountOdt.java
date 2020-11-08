package fr.accountbackend.odt;

public class AccountOdt {
    private float balance;
    private String accountNumber;


    public AccountOdt() {
    }

    public AccountOdt(float balance, String accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
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

    public AccountOdt balance(float balance) {
        this.balance = balance;
        return this;
    }

    public AccountOdt accountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " balance='" + getBalance() + "'" +
            ", accountNumber='" + getAccountNumber() + "'" +
            "}";
    }


    
}
