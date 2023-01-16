import { Link } from 'react-router-dom'
import logo from '../assets/logoHeader.png'

export function Header() {
    return (
        <header className=" fixed z-20 w-full bg-cover bg-no-repeat bg-bgHome bg-blend-color-burn bg-fixed py-1 px-4 shadow-lg ">
            <div className='flex left-0 z-auto'>
                <Link to={'/'} >
                    <img className='w-14 h-auto blur-none' src={logo} />
                </Link>
            </div>
        </header>
    )
}