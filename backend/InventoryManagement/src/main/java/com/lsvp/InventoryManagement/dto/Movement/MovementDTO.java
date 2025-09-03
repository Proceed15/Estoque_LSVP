package com.lsvp.InventoryManagement.dto.Movement;

import java.time.LocalDateTime;

import com.lsvp.InventoryManagement.enums.MovementType;

import lombok.Data;

@Data
public class MovementDTO {
    private Long id;
    private int quantity;
    private MovementType type;
    private String origin;
    private String destiny;
    private LocalDateTime date;

    //Campos de entidades relacionadas
    private Long unitId;
    private String unitProductGtin;
    private String unitBatch;
    private Long userId;
    private String userName;
}
