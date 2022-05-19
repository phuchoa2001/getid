import { useHistory } from "react-router-dom";
import Styles from './index.module.css';
function Header() {
    let history = useHistory();
    return (
        <div onClick={() => history.push("/")}>
            <img src="/image/logo.png" alt="logo" className={Styles.img} />
        </div>
    );
}

export default Header;