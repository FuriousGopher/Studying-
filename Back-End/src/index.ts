
app.get('/', (req, res) => {
    const a = 4;
    if (a>5){
        res.send('OK!')
    } else {

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})