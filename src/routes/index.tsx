import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import config from './config'
import RouteProvider from './RouteProvider'



const RoutesProvider = () => {
    return (
        <Routes>
            {
                config.map(({ path, element, Layout },idx) => (
                    <Route element={<RouteProvider />} key={idx}>
                        <Route path={path} element={<Layout>{element}</Layout>}/>
                    </Route>
                ))
            }

            <Route element={<Navigate to="/login" replace />} path="*" />
        </Routes>
    )
}

export default RoutesProvider