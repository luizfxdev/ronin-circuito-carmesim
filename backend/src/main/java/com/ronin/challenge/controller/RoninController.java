package com.ronin.challenge.controller;

import com.ronin.challenge.model.BattleRequest;
import com.ronin.challenge.model.BattleResult;
import com.ronin.challenge.service.RoninBattleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador REST para o desafio do Ronin
 * Implementa o padrão de separação de responsabilidades (SOLID)
 */
@RestController
@RequestMapping("/api/ronin")
@CrossOrigin(origins = "*")
public class RoninController {
    
    private final RoninBattleService roninBattleService;
    
    @Autowired
    public RoninController(RoninBattleService roninBattleService) {
        this.roninBattleService = roninBattleService;
    }
    
    /**
     * Endpoint para calcular o resultado da batalha
     * 
     * @param request Dados da batalha
     * @return Resultado da batalha com cálculos detalhados
     */
    @PostMapping("/calcular")
    public ResponseEntity<BattleResult> calcularBatalha(@Valid @RequestBody BattleRequest request) {
        try {
            BattleResult resultado = roninBattleService.calcularBatalha(request);
            return ResponseEntity.ok(resultado);
        } catch (Exception e) {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null);
        }
    }
    
    /**
     * Endpoint de health check
     */
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("🔴 Sistema do Ronin operacional ⚡");
    }
}