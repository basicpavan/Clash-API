import React from "react";
import { header } from "../style/header";
import { show_section } from "../components/card-cartas";

function Home() {
    // const [data, setData] = useState();
    // const [value, setValue] = useState();
    // const [loading, setLoading] = useState(false);
    // const [showPlayer, setShowPlayer] = React.useState(false);
    
    return(
        <div className="body">
                <header>
                <h1 className="title">Clash-API</h1>
            <section className="header-section">
                <a href="#">Players</a>
                <a href="#">Clans</a>
                <a href="#">Cartas</a>
                <a href="#">Torneios</a>
                <a href="#">Local</a>
                <a href="#">Desafios</a>
                <a href="#">LeaderBoards</a>
            </section>
        </header>
            


        </div>


)

}



export default Home