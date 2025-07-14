# 🐳 Projeto Docker Compose: Node.js + Flask + MySQL

Este projeto demonstra a integração de uma API **Node.js** (Express) consumindo uma API **Flask** (Python), que por sua vez se conecta a um banco de dados **MySQL**.  
Todos os serviços são orquestrados utilizando **Docker Compose**.

---

## 📁 Estrutura do Projeto

### 🔧 Serviços

- **node_api**: API Node.js que consome a API Flask  
- **flask_api**: API Flask que se conecta ao MySQL  
- **mysql_db**: Banco de dados MySQL

---

## 🚀 Suba os Containers
```bash
docker-compose up --build
```


## 🌐 Acesse as APIs

- Node.js: [http://localhost:3000](http://localhost:3000)  
- Flask: [http://localhost:5000](http://localhost:5000)

---

## 🔁 Fluxo das Requisições

1. O usuário faz uma requisição para o **Node.js** (`localhost:3000`)  
2. O Node.js faz uma requisição HTTP para o **Flask** (`flask_api:5000`)  
3. O Flask consulta o **MySQL** e retorna a resposta para o Node.js

---

## ⚙️ Variáveis de Ambiente

O serviço **Flask** utiliza um arquivo `.env` para configurar o acesso ao banco de dados:
```bash
DB_HOST=mysql_db
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

## 📝 Observações

- O **MySQL** está exposto na porta **3307** do host  
- Os containers estão conectados na mesma rede Docker: `app_networks`  
- O volume mapeado permite **hot reload** para o Flask durante o desenvolvimento

---

Desenvolvido com 💙 por Isabela
