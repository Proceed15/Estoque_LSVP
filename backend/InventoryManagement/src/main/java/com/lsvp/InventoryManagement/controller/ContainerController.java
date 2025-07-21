package com.lsvp.InventoryManagement.controller;

import com.lsvp.InventoryManagement.service.CategoryService;
import com.lsvp.InventoryManagement.service.ContainerService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Contêineres", description = "Gerenciamento de contêineres")

@RequestMapping("api/category")
public class ContainerController {
    @Autowired
    private ContainerService containerService;

    //Post
    //Get - id
    //Get all
    //Put
    //Delete
}
