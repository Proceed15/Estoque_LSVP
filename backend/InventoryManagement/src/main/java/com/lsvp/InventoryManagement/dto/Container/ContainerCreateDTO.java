package com.lsvp.InventoryManagement.dto.Container;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Schema(description = "DTO para criação de contêineres")
public class ContainerCreateDTO {
    @NotBlank(message = "Code is required")
    @Schema(description = "Código do contêiner", example = "AAA-000")
    private String code;
}
