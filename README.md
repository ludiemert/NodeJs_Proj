Modelo README PROJETOS GITHUB
<h1 align="center"> 💻 NLW Expert - Node.js</h1>

<br>
<p align="center">
<img alt="Docker" src="https://img.shields.io/badge/docker-00599C.svg?style=for-the-badge&logo=docker&logoColor=white">
<img alt="Fastify" src="https://img.shields.io/badge/fastify-000000?style=for-the-badge&logo=fastify&logoColor=white">
<img alt="Node.js" src="https://img.shields.io/badge/node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<br>
<img alt="Redis" src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white">
<img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
<img alt="PrismaORM" src="https://img.shields.io/badge/prisma-000000?style=for-the-badge&logo=prisma&logoColor=white">
<img alt="WebSockets" src="https://img.shields.io/badge/websockets-FFA116?style=for-the-badge&logo=websockets&logoColor=white">
</p>

### About

This project was proposed by Rocketseat in <strong>Next Level Week Expert - Node.js track</strong>. 
The challenge involves the development of the backend for a polling application with data stored using PostgreSQL and Prisma ORM,
vote count stored with Redis for quick retrieval, and real-time feedback to connected clients through websockets.

A real-time voting system where users can create a poll and other users can cast their votes. 
The system generates a ranking among the options and updates the votes in real-time.

## How to Run

You will need Node.js and Docker installed on your machine.

```bash
# create .env file based on .env.example
cp .env.example .env
```

```bash
npm i
docker compose up -d
npx prisma migrate dev
npm run dev
```

## How to test

Use any tool to test APIs, like Postman, Insomnia or Hoppscotch.

Test the endpoints as per the examples below, where `server_base_url` is the same as `localhost:3333`.

<h2 align="center"> 💻 Project Vscode</h2>
<div align="center">
 <img src="./src/img/Proj_VSCode.png" width="400px" alt="Home Image"/>
</div>
---

<h2 align="center"> 💻 Project Docker</h2>
<div align="center">
 <img src="./src/img/Docker.png" width="400px" alt="Home Image"/>
</div>
---

<h2 align="center"> 💻 Project BD_Prisma_Studio</h2>
<div align="center">
 <img src="./src/img/BD_Prisma_Studio.png" width="400px" alt="Home Image"/>
</div>


### Create a Poll

`/polls`: Pass data with `title` and `options` in the body:


### Get Poll Data

`/polls/:pollId`: Pass pollId as queryParam


### Vote on Poll

`/polls/:pollId/votes`: Vote on a poll using pollId as queryParam and `pollOptionId` in the body

<h2 align="center"> 💻 Project hoppscotch_Back</h2>
<div align="center">
 <img src="./src/img/hoppscotch_Back.png" width="400px" alt="Home Image"/>
</div>


### Realtime Feedback

`/polls/:pollId/results`: Connect to a poll WebSocket Channel with its Id

<h2 align="center"> 💻 Project hoppscotch_Back_Conection</h2>
<div align="center">
 <img src="./src/img/hoppscotch_Back_Conection.png" width="400px" alt="Home Image"/>
</div>



## Useful Commands:

### Docker

```bash
# Run docker in detached mode
docker compose up -d

# list containers
docker ps

# Show logs of a container execution
docker logs <container_id>

# stop execution of a container
docker kill <container_id>
```

<h2 align="center"> 💻 Project Docker</h2>
<div align="center">
 <img src="./src/img/Docker.png" width="400px" alt="Home Image"/>
</div>

### Prisma

```bash
# starts a project with prisma
npx prisma init

# applies database migrations in the development environment
npx prisma migrate dev

# opens a GUI to explore and manage your database data
npx prisma studio
```

<h2 align="center"> 💻 Project BD_Prisma_Studio</h2>
<div align="center">
 <img src="./src/img/BD_Prisma_Studio.png" width="400px" alt="Home Image"/>
</div>

---

#### 🛠 Tecnologias | Tecnologias
#### The following tools were used in building the project


- [Axios](https://axios-http.com/)
- [ReactJS]( https://pt-br.legacy.reactjs.org/)
- [Node](https://nodejs.org/)
- [MYSQL_Workbench]( https://www.mysql.com/products/workbench/)


#### 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

#### ✒️ Authors

 *  * **Rocketseat**

- #### My LinkedIn - [![Linkedin Badge](https://img.shields.io/badge/-LucianaDiemert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucianadiemert/)](https://www.linkedin.com/in/lucianadiemert/)

#### Contact

<img align="left" src="https://www.github.com/ludiemert.png?size=150">

#### [**Luciana Diemert**](https://github.com/ludiemert)

🛠 `Front-end` `Back-end`Developer Jr. <br>
📍 São Jose dos Campos – SP - Brazil

<a href="https://www.linkedin.com/in/lucianadiemert" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;
<a href="mailto:lucianadiemert@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="LuDiem#0654" alt="Discord Badge" height="25"></a>&nbsp;
<a href="https://www.github.com/ludiemert" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>

------------------
## 🎁 Acknowledgements and dedications

* Thank you #Rocketseat team

