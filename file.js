const fs = require("fs")

//Sync
fs.writeFileSync("./test.txt", "Hello word")

//Async
fs.writeFile("./test1", "Hi",(err)=>{});

//Sync
fs.readFile("./test1", "utf-8", (err, result) => {
    console.log(result)
})

//Async
const result = fs.readFileSync("./test1", "utf-8")
console.log(result)


