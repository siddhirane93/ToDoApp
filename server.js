const importlistAll = require('./listAll.js');
const listFiltered = require('./listFiltered.js');
const addNewToDo = require('./addNewToDo.js');
const updateStatus = require('./updateStatus.js');
const deleteToDo = require('./deleteToDo.js');

const express = require('express');
const app = express();
app.use(express.json())

app.get('/getAllTodos', (req, res) => {
    //setTimeout(listAll, 1000); 
    // Call your function to get all todos
    const allTodos = importlistAll.listAll();
    res.json(allTodos)
});

app.get('/getFilteredTodos', (req, res) => {
    const { status } = req.query;
    console.log(`Getting filtered todos for status ${status}..`)
    // Call your function to filter todos by sending the above status 
    const filteredTodos = listFiltered(status);
    //console.log(filteredTodos);
    res.json(filteredTodos)
})

app.post('/addNewTodo', (req, res) => {
    const { title } = req.body;
    console.log(`Adding a new todo titled ${title}..`)
    // Call your function to add a new todo with the above title 
    // If adding is successful, your function should return All Todos again
    const allTodos = addNewToDo(title);

    if (allTodos)
        res.json(allTodos)
    else
        res.sendStatus(500)

})

app.post('/updateTodo', (req, res) => {
    const { id, status } = req.body;
    console.log(`Updating todo id:${id} to ${status}..`)

    // Call your function to update a todo using the above id and status 
    // If updating is successful, your function should return all todos again
    const updateTodoStatus = updateStatus({id,status});

    if (updateTodoStatus)
        res.json(updateTodoStatus)
    else
        res.sendStatus(500)
})

app.delete('/deleteTodo/:id', (req, res) => {
    const { id } = req.params;
    // Call your function to delete a todo using the above id 
    // If delete is successful, return all todos again 
    const allTodos = deleteToDo({id});

    if (allTodos)
        res.json(allTodos)
    else
        res.sendStatus(500)
})



app.listen(3000, () => {
    console.log('App started on  http://localhost:3000')
})