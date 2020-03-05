package com.kudla.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kudla.entities.Account;
import com.kudla.repositories.AccountRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountService {

	@Autowired
	private AccountRepository repo;

	@PostMapping("/saveaccount")
	public void save(@RequestBody Account account) {
		System.out.println(account.toString());
		repo.save(account);
	}
	
	@GetMapping("/viewaccount/{username}")
	public Account getAccount(@PathVariable String username) {
		return repo.getAccount(username);
	}
	
	@GetMapping("/viewaccbyid/{id}")
	public Account getAccountById(@PathVariable int id) {
		return repo.getAccountByID(id);
	}

}
