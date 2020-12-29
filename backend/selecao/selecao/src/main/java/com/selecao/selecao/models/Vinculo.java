package com.selecao.selecao.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vinculo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private int id_profissional;
	private int id_estabelecimento;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getId_profissional() {
		return id_profissional;
	}
	public void setId_profissional(int id_profissional) {
		this.id_profissional = id_profissional;
	}
	public int getId_estabelecimento() {
		return id_estabelecimento;
	}
	public void setId_estabelecimento(int id_estabelecimento) {
		this.id_estabelecimento = id_estabelecimento;
	}
		
}
