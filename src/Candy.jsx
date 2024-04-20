import { Link } from "react-router-dom";
import './styles/Candy.css'

const Candy = () => {
    return (
        <div className="Candy">
            <div className="Candy-msg">
                <p className="Candy-text">If you've got a sweet tooth...</p>
                <p className="Candy-text">You better brush it!</p>
                <button className="Candy-btn">
                    <Link to="/" 
                        style={{textDecoration: 'none',
                            color: 'white'
                        }}
                    >Home</Link>
                </button>
            </div>
            <div className="Candy-img">
                <img src="src/assets/candies-171342_1280.jpg" alt="Assorted Candy" />
            </div>
        </div>
    )
}

export default Candy