package com.kudla.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="station_users")
public class StationUser {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String station_id;
	private int user_id;

	public StationUser() {

	}

	public StationUser(int id, String station_id, int user_id) {
		super();
		this.id = id;
		this.station_id = station_id;
		this.user_id = user_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStation_id() {
		return station_id;
	}

	public void setStation_id(String station_id) {
		this.station_id = station_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

}