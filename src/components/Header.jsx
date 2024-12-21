import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="">
        <ul className="w-[80%] md:w-[80%] mx-auto p-3 flex items-center justify-between">
            <div className="flex font-medium space-x-4">
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <li>ABOUT</li>
            </div>
            <div className="flex items-center space-x-4">
                <li>
                    <button className="text-gray-950 font-medium">LOGIN</button>
                </li>
                <li>
                    <button className="bg-gray-950 px-3 py-2 text-white font-medium">SIGN UP</button>
                </li>
            </div>
        </ul>
    </nav>
  )
}

export default Header