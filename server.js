console.log("web serverni boshlash");

const express = require("express");
const fs = require("fs");

const app = express();

// read database synchronously
let user;
try {
    user = JSON.parse(fs.readFileSync("database/user.json", "utf8"));
} catch(err) {
    console.log("ERROR:", err);
    user = {}; // fallback
}

// static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// views
app.set("views", "views");
app.set("view engine", "ejs");

// routes
app.post("/create-item", (req, res) => {
    // your logic here
});

app.get("/author", (req, res) => {
    res.render("author", { user: user }); // user now always defined
});

app.get("/",  (req, res) => {
    res.render("harid");
});

// server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
