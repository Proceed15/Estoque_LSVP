package com.lsvp.InventoryManagement.mapper;

import com.lsvp.InventoryManagement.dto.Category.CategoryCreateDTO;
import com.lsvp.InventoryManagement.dto.Category.CategoryDTO;
import com.lsvp.InventoryManagement.dto.Category.CategorySummaryDTO;
import com.lsvp.InventoryManagement.entity.Category;
import org.mapstruct.Mapper;

@Mapper(componentModel = "Spring")
public interface ICategoryMapper {
    Category toEntity(CategoryCreateDTO dto);
    CategoryDTO toDTO(Category category);
    // Lucas: Mapper abaixo criado para retornar uma categoria sem seus produtos
    CategorySummaryDTO toSummary(Category category);
}
