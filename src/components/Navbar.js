import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import disneyLogo from "../assets/images/disney+.png";
import { GET_USER } from "../graphql/queries";

import loader from "../assets/images/loader.svg"

const Navbar = () => {

    const { loading, error, data } = useQuery(GET_USER);

    return (
        <div className="navbar">
            <Link to="/">
                <img className="nav-logo" src={disneyLogo} alt="disney logo" />
            </Link>
            {
                loading ? <img className="nav-loading" src={loader} alt="loading" /> :
                    error ? alert("Some error happened!<br />Please try again later.") :
                        data &&
                        <div className="user-info">
                            <span>{data.account.username.toUpperCase()}</span>
                            <img className="user-avatar" src={data.account.avatar.url} alt={data.account.avatar.fileName.split(".")[0]} />
                        </div>
            }
        </div>
    )
}

export default Navbar;