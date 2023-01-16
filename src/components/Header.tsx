import { Link } from 'react-router-dom'
import logo from '../assets/logoHeader.png'

export function Header() {
    return (
        <header className=" flex fixed justify-between items-center flex-row z-20 w-full bg-cover bg-no-repeat bg-bgHome bg-blend-color-burn bg-fixed py-1 px-4 shadow-lg ">
            <div className=' left-0 z-auto'>
                <Link to={'/'} >
                    <img className='w-14 h-auto' src={logo} />
                </Link>
            </div>
            <div className=' right-0 justify-between'>
                    <Link to={'/champList'} className='text-white  font-text text-2xl'>Campeões</Link>
                    <Link to={'/search-summoner'} className='text-white  font-text text-2xl'>Buscar Invocador</Link>
            </div>
        </header>
    )
}