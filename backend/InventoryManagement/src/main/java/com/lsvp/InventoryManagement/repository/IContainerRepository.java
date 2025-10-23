package com.lsvp.InventoryManagement.repository;

import com.lsvp.InventoryManagement.entity.Container;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IContainerRepository extends JpaRepository<Container, Long> {
    void deleteById(Long id);

    Optional<Container> findByCode(String code);
}
