package com.kudla.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="candidate")
public class Candidate {
	
	@Id
	private int userid;
	private String party;
	private String area;
	private int votes;
	@Column(name="ranks")
	private int rank;
	private String promises;
	public Candidate(int userid, String party, String area, int votes, int rank, String promises) {
		super();
		this.userid = userid;
		this.party = party;
		this.area = area;
		this.votes = votes;
		this.rank = rank;
		this.promises = promises;
	}
	public Candidate() {
		super();
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getParty() {
		return party;
	}
	public void setParty(String party) {
		this.party = party;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getVotes() {
		return votes;
	}
	public void setVotes(int votes) {
		this.votes = votes;
	}
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}
	public String getPromises() {
		return promises;
	}
	public void setPromises(String promises) {
		this.promises = promises;
	}
	@Override
	public String toString() {
		return "Candidate [userid=" + userid + ", party=" + party + ", area=" + area + ", votes=" + votes + ", rank="
				+ rank + ", promises=" + promises + "]";
	}

	
}