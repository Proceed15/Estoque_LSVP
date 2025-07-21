package com.lsvp.InventoryManagement.dto.Container;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data

@Schema(description = "DTO para atualização do contêiner")
public class ContainerUpdateDTO {
    private String code;
}
