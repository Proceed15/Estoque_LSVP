package com.lsvp.InventoryManagement.controller;

import com.lsvp.InventoryManagement.service.UnitService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Unidades", description = "Gerenciamento de Unidades")

@RequestMapping("api/unit")
public class UnitController {
    @Autowired
    private UnitService unitService;

    // Post
    // GetById
    // GetAll
    // Put
    // Delete
}
