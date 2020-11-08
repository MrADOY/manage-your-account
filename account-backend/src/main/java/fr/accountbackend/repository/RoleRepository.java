package fr.accountbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.accountbackend.models.Roles;
import fr.accountbackend.models.RoleName;

import java.util.Optional;

/**
 * JPA repository to manage role data in database
 */
@Repository
public interface RoleRepository extends JpaRepository<Roles, Long> {
    Optional<Roles> findByName(RoleName roleName);
}