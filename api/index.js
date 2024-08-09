const express = require("express");
const { Router } = require('express');
const app = express();
const router = Router();


router.get('/hello-vercel', async (req, res) => {
    res.status(200).json({ code: 200, data: 'hello-vercel', msg: '请求成功' })
})

router.get('/hello', async (req, res) => {
    res.status(200).json({ code: 200, data: '晚上好', msg: '请求成功' })
})


app.use('/', router)
app.listen(9000, () => console.log("Server ready on port 9000"));

module.exports = app;
