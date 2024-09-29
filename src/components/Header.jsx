
import '../css/layout/header.css'
function Header() {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="header__logo">
                    <img
                        src="/src/assets/logo.svg"
                        alt="logo" />
                </div>

                <h1>Registro</h1>

                <div className="header__logo">
                    <img
                        src="/src/assets/gearfill.svg"
                        alt="logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;