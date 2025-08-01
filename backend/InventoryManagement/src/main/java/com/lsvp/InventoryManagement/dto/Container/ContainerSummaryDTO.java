package com.lsvp.InventoryManagement.dto.Container;


import com.lsvp.InventoryManagement.entity.Unit;
import lombok.Data;

import java.util.Set;

@Data
public class ContainerSummaryDTO {
    private Long id;
    private String code;
//    private Set<Unit> units;
}
