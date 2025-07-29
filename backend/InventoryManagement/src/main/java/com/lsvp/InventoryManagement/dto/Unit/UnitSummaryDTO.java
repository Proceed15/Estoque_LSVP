package com.lsvp.InventoryManagement.dto.Unit;

import com.lsvp.InventoryManagement.entity.Container;
import com.lsvp.InventoryManagement.entity.Product;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

public class UnitSummaryDTO {
    private Long id;
    private String batch;
    private LocalDate expiration_date;
    private int quantity;
    private int price;
//    private Container container;
//    private Product product;
}
