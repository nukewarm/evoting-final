package com.kudla.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kudla.entities.Station;


@Repository
public interface StationRepository extends JpaRepository<Station, String> {
	
	@Query("Select s.stationid from Station s where s.stationpassword=null ")
	public List<Object> getUnactivatedStations();
	
	@Query("Select s.stationid from Station s where s.enabled=false")
	public List<Object> getActivatedStations();
}
//and s.stationpassword=null
//and s.enabled=false
//Select s.stationid, count(*) as noOfVoters from Station s, User u, Account a where u.stationid = s.stationid and a.userid = u.userid and a.accounttype='voter'  group by s.stationid