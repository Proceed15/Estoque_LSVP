package com.lsvp.InventoryManagement.mapper;

import com.lsvp.InventoryManagement.dto.Product.ProductCreateDTO;
import com.lsvp.InventoryManagement.dto.Product.ProductDTO;
import com.lsvp.InventoryManagement.dto.Unit.*;
import com.lsvp.InventoryManagement.entity.Product;
import com.lsvp.InventoryManagement.entity.Unit;

public interface IUnitMapper {
    Unit toEntity(UnitCreateDTO dto);

    UnitDTO toDTO(Unit unit);

    UnitSummaryDTO toSummary(Unit unit);
}
