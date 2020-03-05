package com.kudla.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kudla.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("Select u.name, u.address, u.aadhar, u.gender from User u where u.userid not in (select a.userid from Account a)")
	public List<Object> getUnapprovedUsers();
	
	@Query("Select u.name, u.address, u.aadhar, u.gender from User u where u.userid in (select a.userid from Account a)")
	public List<Object> getApprovedUsers();
	
	@Query("Select u from User u where u.aadhar = ?1")
	public User getUsersByAadhar(String aadhar);
	
	@Modifying
	@Transactional
	@Query("Delete from User u where u.aadhar = ?1")
	public void deleteUserByAadhar(String aadhar);
}
