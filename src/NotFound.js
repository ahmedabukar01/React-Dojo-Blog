import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <h4>Sorry ^^..</h4>
            <Link to="/">Go Back to Homepage</Link>
        </div>
    )
}

export default NotFound
