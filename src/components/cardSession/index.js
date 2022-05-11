import {
  BadgePriceS,
  BadgeScore,
  BodyModalS,
  CardSessionS,
  GroupBtModal,
  LeftModal,
  ResultModal,
  TableS,
  TextModalS,
} from "../styles";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardSession = (props) => {
  const session = props.data;

  const [logged, setLogged] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get("/auth", config)
      .then((res) => {
        setLogged(true);
        setPlayerId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {logged && (
        <CardSessionS>
          <h2> Sessão {session.id} </h2>
          <p>
            Jogadores <div>g</div> {session.Players.length} / {session.limit}
          </p>
          <Link to={`/buy/${session.id}`}>
            <button> entrar </button>
          </Link>
        </CardSessionS>
      )}
    </>
  );
};

export default CardSession;
