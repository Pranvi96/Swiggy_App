import Logo from "../assets/foodVilla.jpeg"

const Title = () => {
    return (
        <div>
            <img className="logo" src={Logo}/>
        </div>
    )
}

const Header = () => {
    return (
        <>
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Header