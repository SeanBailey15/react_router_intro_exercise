import { useRouteError } from "react-router-dom";
import './styles/ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)

    return (
        <div className="ErrorPage">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;