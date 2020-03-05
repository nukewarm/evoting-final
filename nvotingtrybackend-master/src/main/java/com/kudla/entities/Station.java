package com.kudla.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "station")
public class Station {

	@Id
	private String stationid;
	private String stationpassword;
	private boolean enabled;
	public Station(String stationid, String stationpassword, boolean enabled) {
		super();
		this.stationid = stationid;
		this.stationpassword = stationpassword;
		this.enabled = enabled;
	}
	public String getStationid() {
		return stationid;
	}
	public void setStationid(String stationid) {
		this.stationid = stationid;
	}
	public String getStationpassword() {
		return stationpassword;
	}
	public void setStationpassword(String stationpassword) {
		this.stationpassword = stationpassword;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public Station() {
		super();
	}

}