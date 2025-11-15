#!/bin/bash

set -e

echo "============================================"
echo "  RONIN DO CIRCUITO CARMESIM - INICIANDO"
echo "============================================"
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if ! command -v mvn &> /dev/null; then
    echo -e "${RED}[ERRO] Maven não encontrado!${NC}"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo -e "${RED}[ERRO] Node.js não encontrado!${NC}"
    exit 1
fi

if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    echo -e "${RED}[ERRO] Diretórios backend ou frontend não encontrados!${NC}"
    exit 1
fi

echo -e "${GREEN}[INFO] Verificando dependências...${NC}"
echo ""

if [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}[INFO] Instalando dependências do frontend...${NC}"
    cd frontend
    npm install
    cd ..
fi

echo -e "${GREEN}[INFO] Iniciando Backend...${NC}"
cd backend
mvn clean spring-boot:run > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..
sleep 5

echo -e "${GREEN}[INFO] Iniciando Frontend...${NC}"
cd frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

echo ""
echo "============================================"
echo -e "${GREEN}  APLICAÇÕES INICIADAS!${NC}"
echo "============================================"
echo ""
echo -e "${GREEN}Backend:${NC}  http://localhost:8080"
echo -e "${GREEN}Frontend:${NC} http://localhost:3000"
echo ""
echo "Backend PID:  $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo ""
echo -e "${YELLOW}Pressione Ctrl+C para encerrar...${NC}"

cleanup() {
    echo ""
    echo -e "${YELLOW}[INFO] Encerrando...${NC}"
    kill $BACKEND_PID 2>/dev/null || true
    kill $FRONTEND_PID 2>/dev/null || true
    echo -e "${GREEN}[INFO] Encerrado.${NC}"
    exit 0
}

trap cleanup SIGINT SIGTERM
wait
