import { Navigate, Outlet } from 'react-router-dom'



const RouteProvider = () => {
    const auth = true; /** GetToken() */
    return (
        <div>
            {
                auth ? <Outlet /> : <Navigate to='/auth/login' />
            }
        </div>
    )
}

export default RouteProvider
