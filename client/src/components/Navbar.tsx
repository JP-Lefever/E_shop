import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 py-8 text-white font-bold flex justify-between p-10">
      <span className="animate-bounce text-5xl">ESHOP</span>
      <ul className="flex gap-4">
        <li className="hover:underline hover:underline-offset-4 text-2xl">
          <NavLink to={"/"}>Accueil</NavLink>
        </li>
      </ul>
    </nav>
  );
}
