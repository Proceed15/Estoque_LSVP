package com.lsvp.InventoryManagement.dto.Product;

import com.lsvp.InventoryManagement.entity.Category;
import com.lsvp.InventoryManagement.enums.MeasureType;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

// Lucas: Criei esta classe para poder retornar o produto sem mostrar a categoria
// Serve mais para quando quiser retornar apenas os produtos ou evitar loops infinitos
// Ex de loop: getProduct -> retorna o produto e sua categoria -> mostra os produtos da categoria -> mostra a categoria de cada produto -> mostra os produtos de cada categoria...
@Data
public class ProductSummaryDTO {
    private Long id;
    private String gtin;
    private BigDecimal measure;
    private MeasureType measureType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
//    private Category category;
}
