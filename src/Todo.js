import {useState} from "react";

function Todo() {
        const [activity, setActivity] = useState('');
        const [edit, setEdit] = useState({});
        const [todos, setTodos] = useState([]);
        const [message, setMessage] = useState('');

        function generateId() {
            return Date.now()
        }

        function SaveTodoHandler(event) {
            event.preventDefault()

            if (!activity) {
                return setMessage ('Activity name should be filled')
            }
            
            setMessage('')

            if (edit.id) {
                const updatedTodo = {
                    id : edit.id,
                    // ... edit,
                    activity,
                };

                const editTodoIndex = todos.findIndex(function(todo) {
                    return todo.id === edit.id;
                });

                const updatedTodos = [...todos]

                updatedTodos[editTodoIndex] = updatedTodo

                setTodos(updatedTodos)
                
                return cancelEditHandler
            }

            setTodos([...todos, {
                id : generateId(),
                activity,
                done: false,
            }])
            setActivity('')
        }

        function removeTodoHandler(todoId) {
            const filteredTodos = todos.filter(function(todo) {
                return todo.id !== todoId //!= gaboleh sama artinya
                // fungsi .filter ini untuk membuat array baru dengan element yang sudah di filter
                // kita filter element yg ada di todo.id(id todo list yg ada di state saat ini)
                // tidak boleh sama dengan todoId(id to do yg di hapus) maka kita bisa hapus berdasarkan id nya
            })
            setTodos(filteredTodos)
            console.log(filteredTodos)
            if (edit.id) cancelEditHandler()
        }

        function editTodoHandler(todo) {
            setActivity(todo.activity)
            setEdit(todo)
        }

        function cancelEditHandler() {
            console.log('cancel edit')
            setEdit({})
            setActivity('')
        }

        function doneTodoHandler(todo) {
            const updatedTodo = {
                // id : todo.id,
                // activity,
                ...todo, 
                done: todo.done ? false : true
            };
            const editTodoIndex = todos.findIndex(function(currentTodo) {
                return currentTodo.id === todo.id;
            });

            const updatedTodos = [...todos]

            updatedTodos[editTodoIndex] = updatedTodo

            setTodos(updatedTodos)
        }
 
        return (
            <>
                <h1>Simple Todo List</h1>
                {message && 
                   <div style={{color: 'red'}}>{message}</div>
                }
                <form onSubmit={SaveTodoHandler}>
                    <input 
                        type="text" 
                        placeholder="Activity Name" 
                        value={activity}
                        onChange=
                            {function(event) {
                            setActivity(event.target.value);
                        }}
                    />
                    <button type="submit">
                        {edit.id ? 'Save Changes' : 'Add'}
                    </button>
                    {edit.id &&
                        <button onClick={cancelEditHandler}>
                            Cancel Edit
                        </button>         
                    }
                </form>
                {todos.length > 0 ?
                    <ul>
                    {todos.map(function(todo) {
                        return (
                            <li key={todo.id}>
                                <input 
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={doneTodoHandler.bind(this, todo)} 
                                />
                                {todo.activity} ({todo.done ? 'done' : 'not done'})
                                <button onClick={editTodoHandler.bind(this, todo)}>
                                    Edit
                                </button>
                                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                    </ul> : 
                    <p><i>There's no Todo</i></p>}
            </>
        )

}

export default Todo