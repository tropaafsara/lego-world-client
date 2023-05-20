
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {

    const { error, status } = useRouteError()
    return (

        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 abc '>
            <div className="text">
                <div>ERROR</div>
                <h1>404</h1>
                

                <div>Page Not Found</div>
                {error?.message}
            </div>

            <div className="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" />

            </div>
            <Link to='/' className='btn '>
                    Back to homepage
                </Link>





        </div>

    )
}

export default ErrorPage