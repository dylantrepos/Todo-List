import React, { useRef, useState } from "react";
import Tache from "./components/Tache";

function App() {

  const [tachesList, setTachesList] = useState([])
  const [id, setId] = useState(0)
  const tache = useRef()

  const handleSubmit = (e) => {
      e.preventDefault()
      tache.current.value && setTachesList([...tachesList, {id: id, tache: tache.current.value}])
      setId(e => e + 1)
    }
    
  const handleRemove = (id) => {
    setTachesList(tachesList.filter(n => n.id !== id))
  }

  return (
    <div className="App container my-5" style={{height: "100vh"}}>
        <div className="row w-100">
            <div className="col-md m-2">
                <h1>Todo list</h1>
                <hr />
                <form action="">
                  <div className="form-group">
                    <label htmlFor="todo-add">Ajouter une tâche </label>
                    <input type="text" name="todo-add" id="todo-add" ref={tache} placeholder="Ecrire la tâche ici..." className="form-control mt-2"/>
                  </div>
                  <button className="btn btn-primary mt-3 px-5" onClick={handleSubmit}>Ajouter</button>
                </form>
            </div>
            <div className="col-md d-flex justify-content-center card m-2" style={{background: '#fff', color: 'black'}}>
              <div className="card-body">
                <h4 className="card-title text-center">Mes tâches en cours</h4>
                <ul className="list-group">
                  {tachesList.map((tache, k) => <Tache key={k} tache={tache.tache} idTache={tache.id} remove={handleRemove}/>)}
                </ul>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
