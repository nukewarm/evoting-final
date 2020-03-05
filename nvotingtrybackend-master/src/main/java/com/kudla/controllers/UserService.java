package com.kudla.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kudla.entities.User;
import com.kudla.repositories.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserService {

	@Autowired
	private UserRepository repo;
	
	@PostMapping("/register")
	public void save(@RequestBody User user) {
		repo.save(user);
	}
	
	@GetMapping("/viewuser")
	public List<User> viewAll() {
		return repo.findAll();
	}
	
	@GetMapping("/viewunapproved")
	public List<Object> viewUnapprovedUsers() {
		return repo.getUnapprovedUsers();
	}
	
	@GetMapping("/viewapproved")
	public List<Object> viewApprovedUsers() {
		return repo.getApprovedUsers();
	}
	
	@GetMapping("/viewaadhar/{aadhar}")
	public User viewUsersByAadhar(@PathVariable String aadhar) {
		return repo.getUsersByAadhar(aadhar);
	}
	
	@DeleteMapping("/delete/{aadhar}")
	public void deleteUser(@PathVariable String aadhar) {
		System.out.println(aadhar);
		repo.deleteUserByAadhar(aadhar);
	}
	
}