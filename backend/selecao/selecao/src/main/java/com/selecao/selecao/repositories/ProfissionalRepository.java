package com.selecao.selecao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.selecao.selecao.models.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional,Long>{

}
