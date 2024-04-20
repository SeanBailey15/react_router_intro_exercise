import { Link } from "react-router-dom";
import './styles/Chips.css'

const Chips = () => {
    return (
        <div className="Chips">
            <div className="Chips-msg">
                <p className="Chips-text">Salty! Crunchy!</p>
                <p className="Chips-text">So so munchy!</p>
                <button className="Chips-btn">
                    <Link to="/"
                        style={{textDecoration: 'none',
                        color: 'white'
                    }}
                    >Back</Link>
                </button>
            </div>
            <div className="Chips-img">
                <img src="src/assets/snack-1555519_1920.jpg" alt="Potato Chips" />
            </div>
        </div>
    )
}

export default Chips