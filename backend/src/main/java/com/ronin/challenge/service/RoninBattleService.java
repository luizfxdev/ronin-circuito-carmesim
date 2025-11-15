package com.ronin.challenge.service;

import com.ronin.challenge.dto.BattleCalculation;
import com.ronin.challenge.model.BattleRequest;
import com.ronin.challenge.model.BattleResult;
import org.springframework.stereotype.Service;

@Service
public class RoninBattleService {
    private static final double DANO_MINIMO_VITORIA = 50.0;
    private static final double ENERGIA_MINIMA_VITORIA = 30.0;
    private static final String MENSAGEM_VITORIA = "⚔️ Kaito venceu! Honra restaurada! ⚔️";
    private static final String MENSAGEM_DERROTA = "💀 Derrota! O guardião resiste. 💀";

    public BattleResult calcularBatalha(BattleRequest request) {
        if (!validarParametros(request)) {
            return new BattleResult();
        }

        var energia = request.getEnergia();
        var defesa = request.getDefesa();
        var chanceDeAcerto = request.getChanceDeAcerto();

        double danoBase = energia * chanceDeAcerto;
        double danoFinal = danoBase - defesa;

        boolean condicaoVitoria = danoFinal >= DANO_MINIMO_VITORIA && energia >= ENERGIA_MINIMA_VITORIA;
        String mensagem = condicaoVitoria ? MENSAGEM_VITORIA : MENSAGEM_DERROTA;

        var calculo = criarCalculoDetalhado(energia, defesa, chanceDeAcerto, danoBase, danoFinal, condicaoVitoria);

        return new BattleResult(danoFinal, condicaoVitoria, mensagem, calculo);
    }

    private BattleCalculation criarCalculoDetalhado(
            Double energia, Double defesa, Double chanceDeAcerto,
            Double danoBase, Double danoFinal, Boolean condicaoVitoria
    ) {
        String formula = String.format(
                "danoFinal = (energia × chanceDeAcerto) - defesa = (%.2f × %.2f) - %.2f = %.2f",
                energia, chanceDeAcerto, defesa, danoFinal
        );
        return new BattleCalculation(
                energia, defesa, chanceDeAcerto,
                danoBase, danoFinal, formula, condicaoVitoria
        );
    }

    public boolean validarParametros(BattleRequest request) {
        return request.getEnergia() != null 
                && request.getDefesa() != null 
                && request.getChanceDeAcerto() != null
                && request.getEnergia() >= 0
                && request.getDefesa() >= 0
                && request.getChanceDeAcerto() >= 0.0 
                && request.getChanceDeAcerto() <= 1.0;
    }
}
