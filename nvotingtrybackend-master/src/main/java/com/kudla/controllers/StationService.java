package com.kudla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kudla.entities.Station;
import com.kudla.entities.User;
import com.kudla.repositories.StationRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StationService {

	@Autowired
	private StationRepository repo;
	
	@GetMapping("/stationinfo")
	public List<Object> viewAll() {
		return repo.getUnactivatedStations();
	}
	
	@GetMapping("/activatedstations")
	public List<Object> viewActive() {
		return repo.getActivatedStations();
	}
	
	@GetMapping("/viewstation/{id}")
	public Station viewOne(@PathVariable String id) {
		return repo.findById(id).get();
	}
	
	@PutMapping("/updatestation")
	public void updateStation(@RequestBody Station station) {
		repo.save(station);
	}
	
	@GetMapping("/allstations")
	public List<Station> viewAllStations() {
		return repo.findAll();
	}
	
}
