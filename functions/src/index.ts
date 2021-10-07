import * as functions from "firebase-functions";
import cors = require("cors");
import express = require("express");
import admin = require("firebase-admin")

const app = express();
app.use(cors());
admin.initializeApp();

const log = functions.logger.log;

app.post("/acounts", async (req, res) => {
  log("User added", { structuredData: true });
  res.status(201).send();
});

exports.primeGateway = functions.https.onRequest(app);
