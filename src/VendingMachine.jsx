import { Link } from "react-router-dom";
import './styles/VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-msg">
                <p className="VendingMachine-text">
                    Feeling Snacky?
                </p>
                <p className="VendingMachine-text">
                    Choose An Item!
                </p>
            </div>
            <div className="VendingMachine-items">
                <span className="VendingMachine-link"><Link to="/soda" style={{textDecoration: 'none'}}>Soda</Link></span>
                <span className="VendingMachine-link"><Link to="/chips" style={{textDecoration: 'none'}}>Chips</Link></span>
                <span className="VendingMachine-link"><Link to="/candy" style={{textDecoration: 'none'}}>Candy</Link></span>
            </div>
        </div>
    )
}

export default VendingMachine