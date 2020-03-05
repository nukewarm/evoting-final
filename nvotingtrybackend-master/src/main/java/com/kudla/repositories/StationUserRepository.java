package com.kudla.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kudla.entities.StationUser;

@Repository
public interface StationUserRepository extends JpaRepository<StationUser, Integer> {

}
