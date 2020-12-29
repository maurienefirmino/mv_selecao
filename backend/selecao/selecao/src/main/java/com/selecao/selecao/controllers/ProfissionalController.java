package com.selecao.selecao.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Profissional;
import com.selecao.selecao.models.Vinculo;
import com.selecao.selecao.repositories.ProfissionalRepository;

@RestController
@RequestMapping("/profissional")
public class ProfissionalController {
	
	@Autowired
	private ProfissionalRepository profissionalRepository;
	
	/* Pegando todos os profissionais do banco */
	@GetMapping
	public List<Profissional> listProfissional() {
		return profissionalRepository.findAll();
	}
	
	/* Salvando um profissional */
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Profissional store(@RequestBody Profissional profissional) {
		return profissionalRepository.save(profissional);
	}
	
	/* Achando um profissional pelo ID */
	@RequestMapping("/{id}/profissional")
	public Optional<Profissional> find(@PathVariable("id") Long id) {
		return profissionalRepository.findById(id);
	}
	
	/* Editando um profissional */
	
	
	/* Deletando um profissional pelo id */
	@RequestMapping("/{id}/delete")
	public int delete(@PathVariable("id") Long id) {
		try {
			profissionalRepository.deleteById(id);
		}catch(Exception e) {
			return 0;
		}
		
		return 1;
	}
	
	
	
	
}
