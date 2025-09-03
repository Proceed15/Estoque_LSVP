package com.lsvp.InventoryManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lsvp.InventoryManagement.mapper.IMovementMapper;
import com.lsvp.InventoryManagement.repository.IMovementRepository;
import com.lsvp.InventoryManagement.repository.IUnitRepository;
import com.lsvp.InventoryManagement.repository.IUserRepository;

import jakarta.transaction.Transactional;

@Service
public class Movement {

    @Autowired
    private IMovementRepository repository;

    @Autowired
    private IMovementMapper mapper;

    @Autowired
    private IUnitRepository unitRepository;

    @Autowired
    private IUserRepository userRepository;





}
