const http = require("http")
let requestCount = 0

const server = http.createServer((request, response) => {

    switch (request.url){
        case '/students':
            response.write("  students")
            break;
        case '/back':
            response.write("  back")
            break;
        default:
            response.write("  404 not found")
    }


    requestCount++
    response.write("     Hello im new Server"    +requestCount)
    response.end()
})

server.listen(3003)