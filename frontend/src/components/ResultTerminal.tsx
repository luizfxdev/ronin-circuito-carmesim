import { BattleResult } from '../types/battle.types';

interface ResultTerminalProps {
  result: BattleResult | null;
  loading: boolean;
}

const ResultTerminal = ({ result, loading }: ResultTerminalProps) => {
  if (loading) {
    return (
      <div className="terminal">
        <div className="loading">
          <p className="loading-text">Processando batalha...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const { danoFinal, vitoria, mensagem, calculo } = result;
  const victoryClass = vitoria ? 'victory' : '';

  return (
    <div className="terminal">
      <div className="terminal-line" style={{ animationDelay: '0s' }}>
        <span className="terminal-prompt">[SISTEMA]</span> Iniciando cálculo da batalha...
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.1s' }}>
        <span className="terminal-prompt">[ENTRADA]</span> Energia: <span className="terminal-value">{calculo.energia}</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.2s' }}>
        <span className="terminal-prompt">[ENTRADA]</span> Defesa: <span className="terminal-value">{calculo.defesa}</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.3s' }}>
        <span className="terminal-prompt">[ENTRADA]</span> Chance de Acerto: <span className="terminal-value">{(calculo.chanceDeAcerto * 100).toFixed(0)}%</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.4s' }}>
        <span className="terminal-prompt">[CÁLCULO]</span> Dano Base = Energia × Chance de Acerto
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.5s' }}>
        <span className="terminal-prompt">[CÁLCULO]</span> Dano Base = {calculo.energia} × {calculo.chanceDeAcerto} = <span className="terminal-value">{calculo.danoBase.toFixed(2)}</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.6s' }}>
        <span className="terminal-prompt">[CÁLCULO]</span> Dano Final = Dano Base - Defesa
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.7s' }}>
        <span className="terminal-prompt">[CÁLCULO]</span> Dano Final = {calculo.danoBase.toFixed(2)} - {calculo.defesa} = <span className="terminal-value">{danoFinal.toFixed(2)}</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.8s' }}>
        <span className="terminal-prompt">[VALIDAÇÃO]</span> Verificando condições de vitória...
      </div>
      <div className="terminal-line" style={{ animationDelay: '0.9s' }}>
        <span className="terminal-prompt">[VALIDAÇÃO]</span> Dano Final &gt; 50? <span className="terminal-value">{danoFinal > 50 ? '✓ SIM' : '✗ NÃO'}</span>
      </div>
      <div className="terminal-line" style={{ animationDelay: '1s' }}>
        <span className="terminal-prompt">[VALIDAÇÃO]</span> Energia &gt; 30? <span className="terminal-value">{calculo.energia > 30 ? '✓ SIM' : '✗ NÃO'}</span>
      </div>
      <div className={`terminal-result ${victoryClass}`} style={{ animationDelay: '1.1s' }}>
        <div className={`terminal-message ${victoryClass}`}>
          {mensagem}
        </div>
      </div>
    </div>
  );
};

export default ResultTerminal;
