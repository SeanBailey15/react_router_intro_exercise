import { Link } from "react-router-dom";
import './styles/Soda.css'

const Soda = () => {
    return (
        <div className="Soda">
            <div className="Soda-msg">
                <p className="Soda-text">Love That</p>
                <p className="Soda-text">Carbonated Goodness!!!</p>
                <button className="Soda-btn">
                    <Link to="/"
                        style={{textDecoration: 'none',
                        color: 'white'
                    }}                        
                    >Back</Link>
                </button>
            </div>
            <div className="Soda-img">
                <img src="src/assets/cans-4163012_1920.jpg" alt="Cans Of Soda" />
            </div>
        </div>
    )
}

export default Soda