package com.ronin.challenge.model;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

public class BattleRequest {
    @NotNull(message = "Energia não pode ser nula")
    @DecimalMin(value = "0", message = "Energia deve ser maior ou igual a 0")
    private Double energia;

    @NotNull(message = "Defesa não pode ser nula")
    @DecimalMin(value = "0", message = "Defesa deve ser maior ou igual a 0")
    private Double defesa;

    @NotNull(message = "Chance de acerto não pode ser nula")
    @DecimalMin(value = "0", message = "Chance de acerto deve ser maior ou igual a 0")
    @DecimalMax(value = "1", message = "Chance de acerto deve ser menor ou igual a 1")
    private Double chanceDeAcerto;

    public BattleRequest() {}

    public BattleRequest(Double energia, Double defesa, Double chanceDeAcerto) {
        this.energia = energia;
        this.defesa = defesa;
        this.chanceDeAcerto = chanceDeAcerto;
    }

    public Double getEnergia() { return energia; }
    public void setEnergia(Double energia) { this.energia = energia; }

    public Double getDefesa() { return defesa; }
    public void setDefesa(Double defesa) { this.defesa = defesa; }

    public Double getChanceDeAcerto() { return chanceDeAcerto; }
    public void setChanceDeAcerto(Double chanceDeAcerto) { this.chanceDeAcerto = chanceDeAcerto; }

    @Override
    public String toString() {
        return "BattleRequest{" +
                "energia=" + energia +
                ", defesa=" + defesa +
                ", chanceDeAcerto=" + chanceDeAcerto +
                '}';
    }
}
