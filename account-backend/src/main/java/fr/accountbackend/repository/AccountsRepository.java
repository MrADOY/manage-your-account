package fr.accountbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.accountbackend.models.Accounts;

/**
 * JPA repository to manage accounts data in database
 */
@Repository
public interface AccountsRepository extends JpaRepository<Accounts, Integer> {
    
}