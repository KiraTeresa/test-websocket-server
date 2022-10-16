const router = require("express").Router();
const authRoutes = require("./auth.routes");

// WebSocket Server
const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8082})
wss.on("connection", ws => {
    console.log("New client connected. Yey Yey!!")

    ws.on("message", data =>{
      console.log("Client has sent us: ", data.toString())

      ws.send(data.toString())
    })

    ws.on("close", ()=>{
      console.log("Client has disconnected. Sad.")
    })
})

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("HOMEPAGE!!!")
});

router.get("/chat", (req,res)=>{
  console.log("******CHAT******")
  res.json("-- entering the chat --")
})

// router.use("/auth", authRoutes);

module.exports = router;
