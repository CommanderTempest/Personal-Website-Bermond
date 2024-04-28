import { Link } from "react-router-dom";
export default function Header() {
  return <div className="header">
    <div className="page-link"><Link to="/">Home</Link></div>
    <div className="page-link"><Link to="/spellblade">Spellblade</Link></div>
  </div>;
}
