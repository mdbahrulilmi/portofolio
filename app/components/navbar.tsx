export default function Navbar()
{
    return(
        <div className="navbar bg-base-100 shadow-sm px-5">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Mdbahrulilmi</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Connect</a></li>
                </ul>
            </div>
        </div>
    )
}