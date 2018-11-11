const { send } = require("micro");
const { parse } = require("url");
const Firestore = require("@google-cloud/firestore");
const { config } = require("./config");

const DEFAULT_USER_ID = "default";

function connect() {
  const firestore = new Firestore({
    projectId: config.google.projectId,
    credentials: {
      private_key: config.google.credentials.privateKey,
      client_email: config.google.credentials.clientEmail
    },
    timestampsInSnapshots: true
  });
  return firestore;
}

async function incrementByRef(userRef) {
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    console.error("does not exist");
    return;
  }

  const state = snapshot.data();
  const update = { count: state.count + 1 };
  const nextState = { ...state, ...update };

  await userRef.update(update);

  return nextState;
}

async function incrementById(userId) {
  const db = connect();
  const userRef = db.collection("users").doc(userId);
  const result = await incrementByRef(userRef);
  return result;
}

function validateAccessToken(token) {
  return token === config.app.accessToken;
}

function createOk(data) {
  return {
    data
  };
}

function createError(error) {
  return {
    error
  };
}

async function handler(req, res) {
  const { query } = parse(req.url, true);
  const { accessToken } = query;
  if (!validateAccessToken(accessToken)) {
    send(res, 400, createError("authentication error"));
    return;
  }

  const result = await incrementById(DEFAULT_USER_ID);

  send(res, 200, createOk(result));
}

module.exports = handler;
