"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
const db = {
    courses: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'auto qa' },
        { id: 4, title: 'devops' }
    ]
};
app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK!');
    }
    else {
        res.send('Hello World!');
    }
});
app.get('/courses', (req, res) => {
    let FoundCourses = db.courses;
    if (req.query.title) {
        FoundCourses = FoundCourses.filter(c => c.title.indexOf(req.query.title) > -1);
    }
    if (!FoundCourses.length) {
        res.sendStatus(404);
        return;
    }
    res.json(FoundCourses);
});
app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => c.id === +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourse);
});
app.get('/users', (req, res) => {
    res.send(' Samurais!');
});
app.post('/users', (req, res) => {
    res.send('We create Samurais!');
});
app.post('/courses', (req, res) => {
    const createdCours = {
        id: +(new Date()),
        title: 'unknown'
    };
    db.courses.push(createdCours);
    res.json(createdCours);
});
app.delete('/courses/:id', (req, res) => {
    db.courses = db.courses.filter(c => c.id !== +req.params.id);
    res.sendStatus(204);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
