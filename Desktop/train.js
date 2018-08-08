
const spawn = require("child_process").spawn;

console.log("Hello")
const python = spawn("python",['../training_scripts/mnist.py'])
python.stdout.on("data", function(data) {
	console.log(data.toString())
	document.querySelector(".status").innerHTML=data.toString()
})
python.stderr.on('data', function(data) {
    console.log(" * [ERROR] " + data.toString())
  })