import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app
 */
export function setEnvironment(app) {
    if (!process.env.NODE_ENV ||
        process.env.NODE_ENV.toString().trim() !== "production"
    ) {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param {Express App} app
 */
function setDevEnv(app) {
    process.env.NODE_ENV = "development";
    app.use(bodyParser.json());
    app.use(morgan("dev"));
    app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DB_URL = "mongodb://localhost:27017/mevnTSK";
    process.env.TOKEN_SECRET = "27946982a9a4408996607fe95a6299f9";
}

/**
 * Used to set production environment variables
 * @param {Express App} app
 */
function setProdEnv(app) {
    process.env.NODE_ENV = "production";
    app.use(cors()); //nemtudok micsinálni, kibaszik velem akkor én is vele
    process.env.DB_URL =
        "mongodb://localhost:27017/mevnTSK";
    process.env.TOKEN_SECRET = "27946982a9a4408996607fe95a6299f9";
    app.use(bodyParser.json());
    app.use(express.static(__dirname + "/../../dist"));
}