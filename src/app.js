const express = require('express')
const cors = require('cors');
const db = require('./utils/database');
const initmodels = require('./models/initModels');
const routerUser = require('./routes/users.routes');
const routerToDo = require('./routes/todo.routes');
const routerCategory = require('./routes/category.routes')
const PORT = '5600';



const app = express();
app.use(cors());
app.use(express.json());
initmodels();
app.use(routerUser);
app.use(routerToDo);
app.use(routerCategory)




db.authenticate()
    .then(() => {
        console.log('conectada la base de dato')
    })
    .catch((error) => console.log(error))
db.sync({alter:true})
    .then(() => {
        console.log('base de datos sincronizada')
    })
    .catch((error) => console.log(error))

    
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor')
})

app.listen(PORT, () => {
    console.log(`servidor escichando en el puerto ${PORT}`)
})