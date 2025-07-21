package com.lsvp.InventoryManagement.service;

import com.lsvp.InventoryManagement.mapper.IContainerMapper;
import com.lsvp.InventoryManagement.repository.IContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContainerService {
    @Autowired
    private IContainerRepository repository;

    @Autowired
    private IContainerMapper mapper;

    //Create
    //Read
    //Read all
    //Update
    //Delete
}
