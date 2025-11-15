package com.ronin.challenge.dto;

public class BattleCalculation {
    private Double energia;
    private Double defesa;
    private Double chanceDeAcerto;
    private Double danoBase;
    private Double danoFinal;
    private String formula;
    private Boolean condicaoVitoria;

    public BattleCalculation() {}

    public BattleCalculation(Double energia, Double defesa, Double chanceDeAcerto,
                             Double danoBase, Double danoFinal, String formula, Boolean condicaoVitoria) {
        this.energia = energia;
        this.defesa = defesa;
        this.chanceDeAcerto = chanceDeAcerto;
        this.danoBase = danoBase;
        this.danoFinal = danoFinal;
        this.formula = formula;
        this.condicaoVitoria = condicaoVitoria;
    }

    public Double getEnergia() { return energia; }
    public void setEnergia(Double energia) { this.energia = energia; }
    public Double getDefesa() { return defesa; }
    public void setDefesa(Double defesa) { this.defesa = defesa; }
    public Double getChanceDeAcerto() { return chanceDeAcerto; }
    public void setChanceDeAcerto(Double chanceDeAcerto) { this.chanceDeAcerto = chanceDeAcerto; }
    public Double getDanoBase() { return danoBase; }
    public void setDanoBase(Double danoBase) { this.danoBase = danoBase; }
    public Double getDanoFinal() { return danoFinal; }
    public void setDanoFinal(Double danoFinal) { this.danoFinal = danoFinal; }
    public String getFormula() { return formula; }
    public void setFormula(String formula) { this.formula = formula; }
    public Boolean getCondicaoVitoria() { return condicaoVitoria; }
    public void setCondicaoVitoria(Boolean condicaoVitoria) { this.condicaoVitoria = condicaoVitoria; }

    @Override
    public String toString() {
        return "BattleCalculation{" +
                "energia=" + energia +
                ", defesa=" + defesa +
                ", chanceDeAcerto=" + chanceDeAcerto +
                ", danoBase=" + danoBase +
                ", danoFinal=" + danoFinal +
                ", formula='" + formula + '\'' +
                ", condicaoVitoria=" + condicaoVitoria +
                '}';
    }
}
