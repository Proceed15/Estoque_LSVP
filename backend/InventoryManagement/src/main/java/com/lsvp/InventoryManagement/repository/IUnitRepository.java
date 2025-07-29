package com.lsvp.InventoryManagement.repository;

import com.lsvp.InventoryManagement.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUnitRepository extends JpaRepository<Unit, Long>  {
}
