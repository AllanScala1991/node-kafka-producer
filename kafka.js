const kafka = require("kafka-node");
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new kafka.Producer(client);

// mensagem que valida que o producer conseguiu se conectar
producer.on("ready", () => {
    console.log("Producer is running.")
})

// mensagem caso o producer de erro
producer.on("error", (err) => {
    console.log(`Producer errpr: ${err}`)
})

// exporta o client e o producer
module.exports = {
    client: client,
    producer: producer
};