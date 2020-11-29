package fr.accountbackend.odt;

public class AccountOdt {
    private int id;
    private float balance;
    private String accountNumber;


    public AccountOdt() {
    }

    public AccountOdt(float balance, String accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    public AccountOdt(int id, float balance, String accountNumber) {
        this.id = id;
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


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "{" +
            " balance='" + getBalance() + "'" +
            ", accountNumber='" + getAccountNumber() + "'" +
            "}";
    }
}
