import React from "react";

const Tache = ({idTache, tache, remove}) => {



    return <li className="list-group-item d-flex justify-content-between align-items-center">
        {tache}
        <button className="btn btn-danger" onClick={() => (remove(idTache))}>Terminer</button>
    </li>
}

export default Tache