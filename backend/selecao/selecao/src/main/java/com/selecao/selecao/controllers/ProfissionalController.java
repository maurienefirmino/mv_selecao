package com.selecao.selecao.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Profissional;
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
	
	
	@RequestMapping(value="/{id}/update",method = RequestMethod.PUT)
	public ResponseEntity<Profissional> updateProfissional(@PathVariable Long id, @RequestBody Profissional profissiona1){
		Profissional profissional2 = null;
		try {
			profissional2 = profissionalRepository.findById(id)
					.orElseThrow(() -> new Exception("Profissional não encontrado com o id :" + id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		profissional2.setNome(profissiona1.getNome());
		profissional2.setEndereco(profissiona1.getEndereco());
		profissional2.setTelefone_celular(profissiona1.getTelefone_celular());
		profissional2.setTelefone_residencial(profissiona1.getTelefone_residencial());
		profissional2.setFuncao(profissiona1.getFuncao());

		
		Profissional profissional3 = profissionalRepository.save(profissional2);
		return ResponseEntity.ok(profissional3);
	}
	
	/* Deletando um profissional pelo id */
		@DeleteMapping("/employees/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteprofissional(@PathVariable Long id){
			Profissional profissional = null;
			try {
				profissional = profissionalRepository.findById(id)
						.orElseThrow(() -> new Exception("Profissional não encontrado com o id:" + id));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			profissionalRepository.delete(profissional);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
	
	
}
