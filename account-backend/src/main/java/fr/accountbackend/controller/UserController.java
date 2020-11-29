package fr.accountbackend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.accountbackend.odt.AccountOdt;
import fr.accountbackend.repository.UserRepository;

@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("api/user/{idUser}/accounts")
    public List<AccountOdt> getAccountFormIdUser(@PathVariable("idUser") long idUser) {
        return userRepository.findById(idUser).map(u -> {
            return u.getAccounts().stream().map(c -> new AccountOdt(c.getId(), c.getBalance(), c.getAccountNumber())).collect(Collectors.toList());
        }).orElse(null);
    }
}
