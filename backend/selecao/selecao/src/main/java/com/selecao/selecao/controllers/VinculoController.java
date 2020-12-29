package com.selecao.selecao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Vinculo;
import com.selecao.selecao.repositories.VinculoRepository;

@RestController
@RequestMapping("/vinculo")
public class VinculoController {
	@Autowired
	private VinculoRepository vinculoRepository;
	
	@GetMapping
	public List<Vinculo> listVinculo() {
		return vinculoRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Vinculo store(@RequestBody Vinculo profissional) {
		return vinculoRepository.save(profissional);
	}
	
	/* Deletando um profissional pelo id */
	@RequestMapping("/{id}/delete")
	public int delete(@PathVariable("id") Long id) {
		try {
			vinculoRepository.deleteById(id);
		}catch(Exception e) {
			return 0;
		}
		
		return 1;
	}
	
}
