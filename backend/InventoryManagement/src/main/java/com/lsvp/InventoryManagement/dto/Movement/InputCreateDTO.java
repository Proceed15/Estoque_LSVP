package com.lsvp.InventoryManagement.dto.Movement;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class InputCreateDTO {
    @NotNull
    private Long productId;

    @NotNull
    private String batch;

    @Min(1)
    private int quantity;

    @NotNull
    private Long containerId;

    @NotNull
    private Long supplierId;

    private int price;

    @NotNull
    private Long userId;
}
