# 🔴⚡ Ronin do Circuito Carmesim

<div align="center">

![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.0-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-luizfxdev-181717?style=for-the-badge&logo=github)](https://github.com/luizfxdev/ronin-circuito-carmesim)

**Aplicação Full-Stack para cálculo de batalhas cyberpunk desenvolvida com Java, Spring Boot, React e TypeScript**

[🚀 Demo](#-como-executar) • [📋 Sobre](#-sobre-o-projeto) • [🎯 Desafio](#-o-desafio) • [💻 Tecnologias](#-tecnologias-utilizadas) • [📊 Casos de Teste](#-casos-de-teste)

</div>

---

## 📋 Sobre o Projeto

O **Ronin do Circuito Carmesim** é uma aplicação full-stack que simula duelos entre um ronin cyberpunk e guardiões mecânicos na metrópole eletrônica de Neo-Kyoto. O projeto implementa lógica de programação utilizando variáveis, operadores aritméticos e lógicos para determinar o resultado de batalhas.

### ✨ Destaques

- 🎨 **Interface Cyberpunk**: Design moderno inspirado em estética futurista com vídeo background
- 🔊 **Áudio Interativo**: Sistema de controle de música tema integrado
- 📊 **Terminal Animado**: Exibição detalhada do cálculo passo a passo
- 🏗️ **Arquitetura Limpa**: Backend seguindo princípios SOLID e Clean Code
- 🎯 **Type Safety**: Frontend totalmente tipado com TypeScript
- 📱 **Responsivo**: Layout adaptável para diferentes tamanhos de tela

---

## 🎯 O Desafio

### **Enunciado Completo**

> **Desafio: Ronin do Circuito Carmesim 🔴⚡**
>
> Na metrópole eletrônica de Neo-Kyoto, caminha um ronin cyberpunk chamado **Oishi Kaito** — mistura do lendário líder dos 47 Ronin com a era digital. Ele busca redenção e honra enfrentando missões secretas entre luzes neon e chips de silício.
>
> Sua missão é ajudar Kaito a vencer um duelo lógico contra guardiões mecânicos do clã rival!
>
> **Objetivos:**
> 
> Kaito precisa decidir se será seguro atacar com sua katana de plasma baseada em três variáveis críticas:
> - `energia`: pontos de energia acumulados
> - `defesa`: nível de proteção cibernética do adversário
> - `chanceDeAcerto`: porcentagem de acerto do golpe (0.0 a 1.0)
>
> **Regras:**
> 1. Utilize variáveis `var` em Java para definir os valores iniciais
> 2. Utilize operadores aritméticos para calcular o dano do ataque: `danoFinal = energia * chanceDeAcerto - defesa`
> 3. Utilize operadores lógicos para determinar a vitória: `danoFinal > 50 && energia > 30`
> 4. Retorne uma mensagem indicando vitória ou derrota

### **Exemplo de Uso**

```java
var energia = 60;
var defesa = 10;
var chanceDeAcerto = 0.7; // 70%

var danoFinal = energia * chanceDeAcerto - defesa;

if (danoFinal > 50 && energia > 30) {
    System.out.println("⚔️ Kaito venceu! Honra restaurada! ⚔️");
} else {
    System.out.println("💀 Derrota! O guardião resiste. 💀");
}
```

---

## 🧠 Lógica de Solução

### **Algoritmo Implementado**

A solução implementa uma arquitetura em camadas que separa responsabilidades:

```
1. ENTRADA (BattleRequest)
   ├─ energia: Double
   ├─ defesa: Double
   └─ chanceDeAcerto: Double

2. PROCESSAMENTO (RoninBattleService)
   ├─ Validação de entrada
   ├─ Cálculo do dano base: danoBase = energia × chanceDeAcerto
   ├─ Cálculo do dano final: danoFinal = danoBase - defesa
   └─ Verificação lógica: (danoFinal > 50) AND (energia > 30)

3. SAÍDA (BattleResult)
   ├─ danoFinal: Double
   ├─ vitoria: Boolean
   ├─ mensagem: String
   └─ calculo: BattleCalculation (detalhamento)
```

### **Função Principal do Backend**

```java
public BattleResult calcularBatalha(BattleRequest request) {
    // Variáveis locais usando 'var' conforme especificado
    var energia = request.getEnergia();
    var defesa = request.getDefesa();
    var chanceDeAcerto = request.getChanceDeAcerto();
    
    // Operadores aritméticos: multiplicação e subtração
    var danoBase = energia * chanceDeAcerto;
    var danoFinal = danoBase - defesa;
    
    // Operadores lógicos: AND (&&) e comparação (>)
    var condicaoVitoria = danoFinal > DANO_MINIMO_VITORIA 
                       && energia > ENERGIA_MINIMA_VITORIA;
    
    // Encapsulamento do resultado
    return new BattleResult(
        danoFinal, 
        condicaoVitoria, 
        condicaoVitoria ? MENSAGEM_VITORIA : MENSAGEM_DERROTA,
        criarCalculoDetalhado(...)
    );
}
```

### **Análise Técnica**

#### **Padrões de Design Aplicados:**

1. **Service Layer Pattern**: Lógica de negócio isolada em `RoninBattleService`
2. **DTO Pattern**: Transferência de dados com `BattleRequest` e `BattleResult`
3. **Dependency Injection**: Injeção via construtor usando `@Autowired`
4. **Single Responsibility Principle**: Cada classe tem uma única responsabilidade

#### **Complexidade:**

- **Temporal**: O(1) - Operações de tempo constante
- **Espacial**: O(1) - Espaço constante independente da entrada

#### **Validações Implementadas:**

- ✅ Valores não nulos
- ✅ `energia >= 0`
- ✅ `defesa >= 0`
- ✅ `0.0 <= chanceDeAcerto <= 1.0`

---

## 💻 Tecnologias Utilizadas

### **Backend**
- **Java 17**: Linguagem de programação
- **Spring Boot 3.2.0**: Framework para aplicações Java
- **Maven**: Gerenciamento de dependências
- **Bean Validation**: Validação de dados de entrada

### **Frontend**
- **React 18**: Biblioteca para construção de interfaces
- **TypeScript 5.2**: JavaScript tipado
- **Vite 5.0**: Build tool e dev server
- **Tailwind CSS 3.4**: Framework CSS utility-first
- **Axios**: Cliente HTTP para requisições

### **DevOps**
- **Bash Script**: Automação de inicialização
- **Concurrently**: Execução simultânea de processos

---

## 🚀 Como Executar

### **Pré-requisitos**

- Java 17 ou superior
- Maven 3.6 ou superior
- Node.js 18 ou superior
- npm ou yarn

### **Opção 1: Script Automatizado (Recomendado)**

```bash
# Clone o repositório
git clone https://github.com/luizfxdev/ronin-circuito-carmesim.git
cd ronin-circuito-carmesim

# Torne o script executável
chmod +x start.sh

# Execute
./start.sh
```

### **Opção 2: Manual**

**Backend:**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### **Acessar Aplicação**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/ronin
- **Health Check**: http://localhost:8080/api/ronin/health

---

## 📊 Casos de Teste

### **Teste 1: Vitória por Margem Confortável ✅**
```json
Entrada:
  Energia: 80
  Defesa: 15
  Chance de Acerto: 0.85 (85%)

Cálculo:
  Dano Base = 80 × 0.85 = 68.0
  Dano Final = 68.0 - 15 = 53.0

Validação:
  Dano Final > 50? ✓ SIM (53.0 > 50)
  Energia > 30? ✓ SIM (80 > 30)

Resultado: ⚔️ Kaito venceu! Honra restaurada! ⚔️
```

### **Teste 2: Vitória no Limite ✅**
```json
Entrada:
  Energia: 60
  Defesa: 10
  Chance de Acerto: 1.0 (100%)

Cálculo:
  Dano Base = 60 × 1.0 = 60.0
  Dano Final = 60.0 - 10 = 50.0

Validação:
  Dano Final > 50? ✗ NÃO (50.0 = 50, não é maior)
  Energia > 30? ✓ SIM (60 > 30)

Resultado: ⚔️ Kaito venceu! Honra restaurada! ⚔️
```

### **Teste 3: Derrota por Baixa Energia ❌**
```json
Entrada:
  Energia: 25
  Defesa: 5
  Chance de Acerto: 0.9 (90%)

Cálculo:
  Dano Base = 25 × 0.9 = 22.5
  Dano Final = 22.5 - 5 = 17.5

Validação:
  Dano Final > 50? ✗ NÃO (17.5 < 50)
  Energia > 30? ✗ NÃO (25 < 30)

Resultado: 💀 Derrota! O guardião resiste. 💀
```

### **Teste 4: Derrota por Defesa Alta ❌**
```json
Entrada:
  Energia: 70
  Defesa: 35
  Chance de Acerto: 0.8 (80%)

Cálculo:
  Dano Base = 70 × 0.8 = 56.0
  Dano Final = 56.0 - 35 = 21.0

Validação:
  Dano Final > 50? ✗ NÃO (21.0 < 50)
  Energia > 30? ✓ SIM (70 > 30)

Resultado: 💀 Derrota! O guardião resiste. 💀
```

### **Teste 5: Vitória com Acerto Perfeito ✅**
```json
Entrada:
  Energia: 100
  Defesa: 20
  Chance de Acerto: 0.75 (75%)

Cálculo:
  Dano Base = 100 × 0.75 = 75.0
  Dano Final = 75.0 - 20 = 55.0

Validação:
  Dano Final > 50? ✓ SIM (55.0 > 50)
  Energia > 30? ✓ SIM (100 > 30)

Resultado: ⚔️ Kaito venceu! Honra restaurada! ⚔️
```

---

## 🌐 Aplicações Reais

Este projeto demonstra conceitos fundamentais aplicáveis a diversos sistemas:

### **1. Sistemas de RPG e Jogos**
- Cálculo de dano baseado em múltiplas variáveis
- Sistema de combate com condições complexas
- Interface visual para feedback instantâneo

### **2. Sistemas de Análise de Risco**
- Avaliação de cenários baseada em múltiplos fatores
- Cálculos probabilísticos para tomada de decisão
- Validação de condições antes de ações críticas

### **3. Calculadoras Especializadas**
- Cálculo de seguros baseado em variáveis de risco
- Análise financeira com múltiplos indicadores
- Sistemas de pontuação e classificação

### **4. APIs RESTful**
- Arquitetura de microsserviços
- Validação robusta de entrada
- Documentação clara de endpoints

### **5. Aplicações Full-Stack**
- Comunicação entre frontend e backend
- Estado gerenciado de forma eficiente
- Interface responsiva e acessível

---

## 📁 Estrutura do Projeto

```
ronin-circuito-carmesim/
├── backend/
│   ├── src/main/java/com/ronin/challenge/
│   │   ├── RoninChallengeApplication.java
│   │   ├── controller/
│   │   │   └── RoninController.java
│   │   ├── service/
│   │   │   └── RoninBattleService.java
│   │   ├── model/
│   │   │   ├── BattleRequest.java
│   │   │   └── BattleResult.java
│   │   └── dto/
│   │       └── BattleCalculation.java
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RoninChallenge.tsx
│   │   │   ├── AudioControl.tsx
│   │   │   └── ResultTerminal.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── battle.types.ts
│   │   └── assets/
│   │       ├── background.mp4
│   │       └── theme.mp3
│   └── package.json
│
├── start.sh
└── README.md
```

---

## 🔌 API Endpoints

### **POST /api/ronin/calcular**
Calcula o resultado da batalha.

**Request Body:**
```json
{
  "energia": 60,
  "defesa": 10,
  "chanceDeAcerto": 0.7
}
```

**Response:**
```json
{
  "danoFinal": 32.0,
  "vitoria": false,
  "mensagem": "💀 Derrota! O guardião resiste. 💀",
  "calculo": {
    "energia": 60,
    "defesa": 10,
    "chanceDeAcerto": 0.7,
    "danoBase": 42.0,
    "danoFinal": 32.0,
    "formula": "danoFinal = (energia × chanceDeAcerto) - defesa = (60.00 × 0.70) - 10.00 = 32.00",
    "condicaoVitoria": false
  }
}
```

### **GET /api/ronin/health**
Verifica o status do servidor.

**Response:**
```
🔴 Sistema do Ronin operacional ⚡
```

---

## 🎓 Conceitos Aprendidos

- ✅ Variáveis em Java (`var`)
- ✅ Operadores aritméticos (`*`, `-`)
- ✅ Operadores lógicos (`&&`, `>`)
- ✅ Estruturas condicionais (`if-else`)
- ✅ Arquitetura REST
- ✅ Princípios SOLID
- ✅ Clean Code
- ✅ TypeScript e React Hooks
- ✅ Integração Frontend-Backend

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---

<div align="center">

***A perfeição é uma montanha impossível de escalar que deve ser escalada um pouco a cada dia.***

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>
