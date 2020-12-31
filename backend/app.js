const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//Middleware

app.use(cors());
app.use(express.json());

//Rutas a usar

app.use("/project", require("./routes/projectRoutes"));

app.use("/developer", require("./routes/developerRoutes"));

app.use("/client", require("./routes/clientRoutes"));

app.use("/pm", require("./routes/pmRoutes"));

app.use("/topic", require("./routes/topicRoutes"));

app.use("/reply", require("./routes/replyRoutes"));

app.use("/chunk", require("./routes/chunkRoutes"));

app.use("/chunk/comments", require("./routes/chunkCommentRoutes"));

app.use("/fr", require("./routes/frRoutes"));

app.use("/auth", require("./routes/authRoutes"));

app.use("/evaluation", require("./routes/evaluationRoutes"));

app.use("/data", require("./routes/userRoutes"));
app.use("/user", require("./routes/userRoutes"));

//Iniciar el servidor

app.listen(4000, console.log("server running on port 4000"));
