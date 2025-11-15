import { useState } from 'react';
import { roninAPI } from '../services/api';
import { BattleResult } from '../types/battle.types';
import AudioControl from './AudioControl';
import ResultTerminal from './ResultTerminal';
import backgroundVideo from '../assets/background.mp4';

const RoninChallenge = () => {
  const [energia, setEnergia] = useState('');
  const [defesa, setDefesa] = useState('');
  const [chanceAcerto, setChanceAcerto] = useState('');
  const [result, setResult] = useState<BattleResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCalcular = async () => {
    const energiaNum = parseFloat(energia);
    const defesaNum = parseFloat(defesa);
    const chanceAcertoNum = parseFloat(chanceAcerto);

    // Validação
    if (isNaN(energiaNum) || isNaN(defesaNum) || isNaN(chanceAcertoNum)) {
      alert('❌ Por favor, preencha todos os campos com valores válidos!');
      return;
    }

    if (chanceAcertoNum < 0 || chanceAcertoNum > 1) {
      alert('❌ Chance de acerto deve estar entre 0.0 e 1.0!');
      return;
    }

    setLoading(true);
    setShowResult(true);
    setResult(null);

    try {
      const battleResult = await roninAPI.calcularBatalha({
        energia: energiaNum,
        defesa: defesaNum,
        chanceDeAcerto: chanceAcertoNum
      });

      setTimeout(() => {
        setResult(battleResult);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error('Erro ao calcular batalha:', error);
      alert('❌ Erro ao conectar com o servidor. Verifique se o backend está rodando na porta 8080.');
      setLoading(false);
      setShowResult(false);
    }
  };

  const handleRetornar = () => {
    setEnergia('');
    setDefesa('');
    setChanceAcerto('');
    setResult(null);
    setShowResult(false);
    setLoading(false);
  };

  return (
    <>
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Audio Controls */}
      <AudioControl />

      {/* Main Container */}
      <div className="container-wrapper">
        <div className="challenge-container">
          {/* Header */}
          <div className="header">
            <h1 className="title">🔴 RONIN DO CIRCUITO CARMESIM ⚡</h1>
            <div className="description">
              <p>
                <strong>Missão:</strong> Na metrópole eletrônica de Neo-Kyoto, o ronin cyberpunk{' '}
                <strong>Oishi Kaito</strong> busca redenção enfrentando guardiões mecânicos do clã rival.
              </p>
              <br />
              <p>
                <strong>Objetivo:</strong> Calcular se o ataque de Kaito será suficiente para vencer, baseado em{' '}
                <strong>energia</strong>, <strong>defesa</strong> do adversário e <strong>chance de acerto</strong>.
              </p>
              <br />
              <p>
                <strong>Condições de Vitória:</strong> Dano Final &gt; 50 <strong>E</strong> Energia &gt; 30
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="input-section">
            <div className="input-group">
              <label className="input-label" htmlFor="energia">
                ⚡ Energia
              </label>
              <input
                type="number"
                id="energia"
                className="input-field"
                placeholder="Ex: 60"
                step="0.1"
                value={energia}
                onChange={e => setEnergia(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="defesa">
                🛡️ Defesa
              </label>
              <input
                type="number"
                id="defesa"
                className="input-field"
                placeholder="Ex: 10"
                step="0.1"
                value={defesa}
                onChange={e => setDefesa(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="chanceAcerto">
                🎯 Chance de Acerto (0.0 - 1.0)
              </label>
              <input
                type="number"
                id="chanceAcerto"
                className="input-field"
                placeholder="Ex: 0.7 (70%)"
                step="0.01"
                min="0"
                max="1"
                value={chanceAcerto}
                onChange={e => setChanceAcerto(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="buttons-section">
            <button className="action-btn" onClick={handleCalcular}>
              ⚔️ Calcular
            </button>
            <button className="action-btn" onClick={handleRetornar}>
              ↩️ Retornar
            </button>
          </div>

          {/* Result Section */}
          {showResult && (
            <div className={`result-section ${showResult ? 'show' : ''}`}>
              <h2 className="result-title">📊 RESULTADO DA BATALHA</h2>
              <ResultTerminal result={result} loading={loading} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RoninChallenge;
