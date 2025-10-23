package com.lsvp.InventoryManagement.repository;

import com.lsvp.InventoryManagement.entity.Container;
import com.lsvp.InventoryManagement.enums.ContainerType;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IContainerRepository extends JpaRepository<Container, Long> {
    void deleteById(Long id);

    Optional<Container> findByCode(String code);

    Optional<Container> findByType(ContainerType type);
}
