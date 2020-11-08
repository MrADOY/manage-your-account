package fr.accountbackend.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.accountbackend.models.Accounts;
import fr.accountbackend.odt.AccountOdt;
import fr.accountbackend.odt.TransactionOdt;
import fr.accountbackend.repository.AccountsRepository;

@RestController
@RequestMapping("api/accounts")
public class AccountController {

    @Autowired
    AccountsRepository accountsRepository;

    @GetMapping("{id}/transactions")
    public List<TransactionOdt> getTransaction(@PathVariable("id") Integer id) {
        Optional<Accounts> accountFound = accountsRepository.findById(id);
        if (accountFound.isPresent()) {
            return accountFound.get().getTransaction().stream().map(t -> {
                return new TransactionOdt(t.getAmount(), t.getFrom(), t.getDate(), t.getTransactionType(), t.getDate());
            }).collect(Collectors.toList());
        }
        return null;
    }

    @GetMapping("{id}")
    public AccountOdt getAccount(@PathVariable("id") Integer id) {
        Optional<Accounts> accountFound = accountsRepository.findById(id);
        if (accountFound.isPresent()) {
            return accountFound.map(a -> {
                return new AccountOdt(a.getBalance(), a.getAccountNumber());
            }).orElse(null);
        }
        return null;
    };
}