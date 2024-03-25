import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './components/ListItem'


function App() {
  // Définition de l'état todoList pour stocker la liste des tâches avec des identifiants uniques et du contenu initial.
  const [todoList, setTodoList] = useState([
    {id: nanoid(8), content: "Item 1"},
    {id: nanoid(8), content: "Item 2"},
    {id: nanoid(8), content: "Item 3"},
  ])

  // Définition de l'état todo pour stocker la valeur actuelle de l'entrée du nouvel élément todo.
  const [todo, setTodo] = useState("")
  
  // Définition de l'état showValidation pour contrôler l'affichage des messages de validation.
  const [showValidation, setShowValidation] = useState(false)

  // Fonction pour supprimer une tâche de la liste en utilisant son identifiant.
  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  // Fonction pour gérer la soumission du formulaire en ajoutant une nouvelle tâche.
  function handleSubmit(e){
    e.preventDefault()

    if (todo === "") {
      setShowValidation(true)
      return
    }

    setTodoList([...todoList, {id: nanoid(8), content: todo}])
    setTodo("")
    setShowValidation(false)
  }

  return (
    <div className='h-screen bg-slate-900'>
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        <h1 className='text-3xl text-slate-100 mb-4'>To-do Liste</h1>

        <form onSubmit={handleSubmit} className='mb-10'>
          <label htmlFor='todo-item' className='text-slate-50'>
            Ajouter une chose à faire
          </label>
          <input 
            value={todo}
            onChange={e => setTodo(e.target.value)}
            type="text" 
            className='mt-1 block w-full rounded'
          />
          {showValidation && (
            <p className='text-red-400'>
              Ajouter d'abord du contenu à votre tâche
            </p>
          )}
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[150px]'>Ajouter</button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li className='text-slate-50 text-md'>Pas d'item à afficher...</li>
          )}
          {todoList.length > 0 && 
          todoList.map(item => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
