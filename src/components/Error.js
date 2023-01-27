import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err
    console.log('testing err-----', err)
    return (
        <div>
            <h1>Error Page</h1>
            <h2>{status} : {statusText}</h2>
        </div>
    )
}

export default Error