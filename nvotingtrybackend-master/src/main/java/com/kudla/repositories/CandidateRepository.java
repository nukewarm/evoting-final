package com.kudla.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kudla.entities.Candidate;
import com.kudla.entities.User;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
	
	@Query("Select  u.name,c from User u, Candidate c where u.userid = c.userid")
	public List<Object> getAllDetails();
	
	@Query("Select distinct c.area from Candidate c order by c.area")
	public List<Object>  getAreas();
	
	@Query("Select  u.name, c.party, c.userid, c.votes from Candidate c, User u where u.userid = c.userid and c.area=?1 order by c.party")
	public List<Object>  getCandiByRegion(String area);
	
	@Query("Select u.name, c.party, c.area, u.aadhar from User u, Candidate c where u.userid = c.userid and u.userid not in (select a.userid from Account a) order by c.area")
	public List<Object> getUnapprovedCandidates();

}
