package com.lsvp.InventoryManagement.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "tbl_container")
@Data
public class Container {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "con_id")
    private Long id;

    @Column(name = "con_code", length = 20, unique = true)
    private String code;

    @OneToMany(mappedBy = "container")
    private Set<Unit> units;
}
