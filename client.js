const { Kafka } = require("kafkajs");

//make kafka client
exports.kafka = new Kafka({            
    clientId: "my-app",
    brokers: ["192.168.101.3:9092"],
  });