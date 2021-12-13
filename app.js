const express = require("express");
const app = express(); 
const path = require("path");
const dataInternacionales = require("./destinos-internacionales.json");
const destinoNacional = require("./destinosnacionales.json");
const dataNovedades = require("./novedades.json");
app.use(express.json());


app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res)=>{
    res.render("index", {dataInternacionales, destinoNacional, dataNovedades})
}); 

app.get("/registrarse", (req,res)=>{
    res.render("./pages/registrarse",)});

app.get("/internacional", (req,res)=>{
res.render("./pages/internacional", {dataInternacionales, dataNovedades})
});

app.get("/nacionales", (req,res)=>{
    res.render("./pages/nacionales", {destinoNacional, dataNovedades})
});

app.listen(3000, ()=>{
    console.log("corriendo en el servidor 3000")
})