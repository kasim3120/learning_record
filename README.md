學習歷程有 Id，Title，Description，State。

使用者可以創建，搜索，更新，刪除。

搜尋框查找歷程。

server.ts：Express web server，CORS、initialize、Express RESTful API。

/config/
db.config.js：export MongoDB connect Mongoose configure。

/controllers/
study.controller.ts

/routes/
study.routes.ts：CRUD。

/models/
index.ts：MongoDB Database configure。
study.model.ts：Mongoose Data model。

後端-
- MongoDB。
- Mongoose。
- Express.js。

RESTful API 架構：
- GET api/study
- GET api/study/:id
- GET api/study?title=[title]
- POST api/study
- PATCH api/study/:id
- DELETE api/study/:id
- DELETE api/study

前端-
- React。
- axios。
