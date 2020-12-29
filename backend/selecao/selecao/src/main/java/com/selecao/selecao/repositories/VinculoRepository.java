package com.selecao.selecao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.selecao.selecao.models.Vinculo;

@Repository
public interface VinculoRepository extends JpaRepository<Vinculo,Long>{

}
