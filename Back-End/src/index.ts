import express from 'express'
const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const db = {
    courses: [
        {id:1, title: 'front-end'},
        {id:2, title: 'back-end'},
        {id:3, title: 'auto qa'},
        {id:4, title: 'devops'}
    ]
}
// @ts-ignore
app.get('/', (req, res) => {
    const a = 4;
    if (a>5){
        res.send('OK!')
    } else {
        res.send('Hello World!')
    }
})

app.get('/courses', (req, res) =>{
   let FoundCourses =  db.courses;
   if (req.query.title){
       FoundCourses = FoundCourses .filter(c => c.title.indexOf(req.query.title as string) > -1)
   }
   if (!FoundCourses.length){
       res.sendStatus(404)
       return;
   }

    res.json(FoundCourses)
})
app.get('/courses/:id', (req, res) =>{
    const foundCours = db.courses.find(c => c.id === +req.params.id);
    if (!foundCours){
        res.sendStatus(404)
        return;
    }

    res.json(foundCours)
})
// @ts-ignore
app.get('/users', (req, res) => {
    res.send(' Samurais!')
})
// @ts-ignore
app.post('/users', (req, res) => {
    res.send('We careate Samurais!')
})

app.post('/courses', (req, res) => {
    const createdCours = {
        id: +(new Date()),
        title: 'unknown'
    };
    db.courses.push(createdCours)
    res.json(createdCours)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})