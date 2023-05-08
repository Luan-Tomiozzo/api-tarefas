<h1 align="center">
   <div>API de Gerenciamento de Tarefas - Node.js, Express e SQLite</div>
    <br>
</h1>
<p align="center">API RESTful criada com Node.js, Knex e SQLite, utilizando Knex.js para criação de tabelas e queries no banco de dados.</p>
<h1 align="center"></h1>

### **Instalação**
Antes de tudo, você precisa clonar este repositório:
```bash
https://github.com/Luan-Tomiozzo/api-tarefas.git
```

Antes de iniciar a aplicação, é necessário criar as tabelas no banco de dados. Para isso, execute o seguinte comando:
```bash
npm install
```
---
### **Banco de Dados**.
A API utiliza o SQLite como banco de dados. Para criar a tabela de atividades no banco de dados, execute o seguinte comando:
```bash
npm run setup
```
Esse comando irá executar o script _setup_ que fica no package.json e irá criar as tabelas no banco de dados e popular com alguns dados para teste.

---
### **Execução**
Inicie a aplicação com o comando:
```bash
npm run start
```
A API está configurada para rodar na porta 'http://localhost:5000'.

---
### **Endpoints**
Para testar a API, utilize um cliente HTTP como o  **[Postman](https://www.postman.com/)**  ou o **[Insomnia](https://insomnia.rest/)**.

**GET /api/activities**

Retorna todas as atividades cadastradas.

- **Curl:**
```bash
curl --request GET \
  --url http://localhost:5000/api/activities
```

**GET /api/activities/:id**

Retorna uma atividade específica, com base no ID informado.

- **Curl:**
```bash
curl --request GET \
  --url http://localhost:5000/api/activities/1
```

**POST /api/activities**

Cria uma nova atividade.

- **Curl:**
```bash
curl --request POST \
  --url http://localhost:5000/api/activities \
  --header 'Content-Type: application/json' \
  --data '{
	"titulo": "Comprar pão",
	"descricao": "Ir na padaria e comprar pão francês"
}'
```

**PUT /api/activities/:id**

Atualiza uma atividade existente, com base no ID informado.

- **Curl:**
```bash
curl --request PUT \
  --url http://localhost:5000/api/activities/7 \
  --header 'Content-Type: application/json' \
  --data '{
    "titulo": "Estudar Node.js",
    "descricao": "Estudar o básico do Node.js e ver sobre persistência de dados também",
    "concluida": true
}'
```


**DELETE /api/activities/:id**

Remove uma atividade existente, com base no ID informado.

- **Curl:**
```bash
curl --request DELETE \
  --url http://localhost:5000/api/activities/1
```
---
### **Licença**
Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para mais detalhes.
