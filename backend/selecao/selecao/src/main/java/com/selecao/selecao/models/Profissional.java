package com.selecao.selecao.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="profissional")
public class Profissional {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String endereco;
	private String telefone_celular;
	private String telefone_residencial;
	private String funcao;

	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTelefone_celular() {
		return telefone_celular;
	}
	public void setTelefone_celular(String telefone_celular) {
		this.telefone_celular = telefone_celular;
	}
	public String getTelefone_residencial() {
		return telefone_residencial;
	}
	public void setTelefone_residencial(String telefone_residencial) {
		this.telefone_residencial = telefone_residencial;
	}
	public String getFuncao() {
		return funcao;
	}
	public void setFuncao(String funcao) {
		this.funcao = funcao;
	}
	
	
	

	
}
