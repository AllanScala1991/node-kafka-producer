const express = require("express");
const app = express();
const kafka = require("./kafka");
const producer = kafka.producer;

// cria a mensagem que sera enviada
const message = {
    message: "Teste Kafka",
    date: new Date().toISOString()
}

// cria o payload onde é informado o tópico e a mensagem que será enviada, convertendo para string
const payload = [
    {
        topic: "topic1",
        messages: JSON.stringify(message)
    }
]

// endpoint básico para envio de mensagem
app.get("/", (req, res) => {
    producer.send(payload, (err, data) => {
        err? console.log(err) : console.log("Message send successfully")
    })
})

// inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Server is running...")
})