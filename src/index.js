const express = require("express");
const server = require("./server");
require("./db");

server(express());
