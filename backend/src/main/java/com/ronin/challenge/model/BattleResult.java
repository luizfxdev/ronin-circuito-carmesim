package com.ronin.challenge.model;

import com.ronin.challenge.dto.BattleCalculation;

/**
 * Modelo de resultado da batalha
 * Encapsula toda a informação sobre o resultado do duelo
 */
public class BattleResult {
    private Double danoFinal;
    private Boolean vitoria;
    private String mensagem;
    private BattleCalculation calculo;

    public BattleResult() {}

    public BattleResult(Double danoFinal, Boolean vitoria, String mensagem, BattleCalculation calculo) {
        this.danoFinal = danoFinal;
        this.vitoria = vitoria;
        this.mensagem = mensagem;
        this.calculo = calculo;
    }

    public Double getDanoFinal() {
        return danoFinal;
    }

    public void setDanoFinal(Double danoFinal) {
        this.danoFinal = danoFinal;
    }

    public Boolean getVitoria() {
        return vitoria;
    }

    public void setVitoria(Boolean vitoria) {
        this.vitoria = vitoria;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public BattleCalculation getCalculo() {
        return calculo;
    }

    public void setCalculo(BattleCalculation calculo) {
        this.calculo = calculo;
    }

    @Override
    public String toString() {
        return "BattleResult{" +
                "danoFinal=" + danoFinal +
                ", vitoria=" + vitoria +
                ", mensagem='" + mensagem + '\'' +
                ", calculo=" + calculo +
                '}';
    }
}
