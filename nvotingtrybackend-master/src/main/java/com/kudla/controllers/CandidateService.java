package com.kudla.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kudla.entities.Candidate;
import com.kudla.repositories.CandidateRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CandidateService {

	@Autowired
	private CandidateRepository repo;
	
	@GetMapping("/viewcand")
	public List<Candidate> view() {
		return repo.findAll();
	}
	
	@GetMapping("/viewall")
	public List viewC() {
		return repo.getAllDetails();
	}
	
	@GetMapping("/viewarea")
	public List viewAreas(){
		return repo.getAreas();
	}
	
	@GetMapping("/viewcandibyarea/{area}")
	public List viewCandiByRegion(@PathVariable String area){
		return repo.getCandiByRegion(area);
	}
	
	@GetMapping("/unapcandi")
	public List<Object> viewUnapprovedCandidates() {
		return repo.getUnapprovedCandidates();
	}
	
	@GetMapping("viewcandi/{id}")
	public Candidate getCandidateById(@PathVariable int id) {
		return repo.findById(id).get();
	}
	
	@PutMapping("/updatecandi")
	public void updateCandidate(@RequestBody Candidate candidate) {
		System.out.println(candidate.toString());
		repo.save(candidate);
	}
	
}
