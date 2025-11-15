import axios from 'axios';
import { BattleRequest, BattleResult } from '../types/battle.types';

/**
 * Serviço de API para comunicação com o backend
 * Encapsula todas as chamadas HTTP
 */
const API_BASE_URL = '/api/ronin';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const roninAPI = {
  /**
   * Envia os dados da batalha para o backend e retorna o resultado
   */
  calcularBatalha: async (data: BattleRequest): Promise<BattleResult> => {
    const response = await api.post<BattleResult>('/calcular', data);
    return response.data;
  },

  /**
   * Verifica se o backend está operacional
   */
  healthCheck: async (): Promise<string> => {
    const response = await api.get<string>('/health');
    return response.data;
  },
};

export default api;
