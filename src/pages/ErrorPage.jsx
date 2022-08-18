import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div>
            <h1>La pagina selezionata non esiste</h1>
            <Link to={'/'}>
                <button>Torna alla pagina principale</button>
            </Link>
        </div>
    )
}

export default ErrorPage
