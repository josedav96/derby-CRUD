const derby = require('derby');
const path = require('path');
const HelloWorld = require('./components/HelloWorld/HelloWorld');
const Add = require('./components/Add/Add');
const Edit = require('./components/Edit/Edit');
const Lista = require('./components/Lista/Lista');


const app = derby.createApp('propia', __filename);

app.loadStyles(path.join(__dirname, 'public', 'css'))
app.loadViews(path.join(__dirname, 'views'));


app.component(HelloWorld);
app.component(Add);
app.component(Lista);
app.component(Edit);

app.get('/', (page) => {
    page.render(HelloWorld.prototype.name);
})

app.get('/add', (page) => {
    page.render(Add.prototype.name);
})

app.get('/lista', (page, model, params, next) => {
    Lista.load(model, null, null, (err) => {
        if (err) return next(err)
        page.render(Lista.prototype.name);
    })
})

app.get('/edit/:id', (page, model, params, next) => {
    Edit.load(model, params, null, (err) => {
        if (err) return next(err)
        page.render(Edit.prototype.name)
    })
})

module.exports = app;