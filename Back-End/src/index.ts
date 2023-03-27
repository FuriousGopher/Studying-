 import express from 'express'
export const app = express()
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

app.get('/', (req, res) => {

        res.send('Hello World!')

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
app.get('/courses/:id', (req, res) =>{2
    const foundCourse = db.courses.find(c => c.id === +req.params.id);
    if (!foundCourse){
        res.sendStatus(404)
        return;
    }

    res.json(foundCourse)
})
app.get('/users', (req, res) => {
    res.send(' Samurais!')
})
app.post('/users', (req, res) => {
    res.send('We create Samurais!')
})
app.post('/courses', (req, res) => {
    const createdCours = {
        id: +(new Date()),
        title: 'unknown'
    };
    db.courses.push(createdCours)
    res.json(createdCours)
})
app.delete('/courses/:id', (req, res) =>{
    db.courses = db.courses.filter(c => c.id !== +req.params.id);


    res.sendStatus(204)
})

app.delete('/__test__/data', (req, res) =>{
    db.courses = [];
    res.sendStatus(204)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})