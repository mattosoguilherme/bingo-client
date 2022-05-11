import ContainerFormS, {
  Winner,
  PhotoWinner,
  Result,
  WinnerContainer,
} from "../../components/styles";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Award = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState();

  const [logged, setLogged] = useState(false);

  const token = localStorage.getItem("token");

  const [winner, setWinner] = useState();

  const [award, setAward] = useState();

  useEffect(async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get(`/session/${id}`, config)
      .then((res) => {
        console.log(res.data);
        const playerId = res.data.winner;
        setWinner(playerId);
        axios
          .get(`/player/${playerId}`, config)
          .then((res) => {
            if (res.data.Card.length > 0) {
              const cards = res.data.Card;

              for (let index = 0; index < cards.length; index++) {
                axios
                  .delete(`/card/${cards[index].id}`, config)
                  .then((r) => console.log(r))
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }

            const number_cards = res.data.Card.length;
            if (number_cards === 1) {
              setAward(10000);
            } else if (number_cards === 2) {
              setAward(8000);
            } else if (number_cards === 3) {
              setAward(6400);
            } else if (number_cards === 4) {
              setAward(4800);
            } else if (number_cards === 5) {
              setAward(3200);
            } else if (number_cards === 6) {
              setAward(1600);
            }

            setPlayer(res.data);
            setLogged(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const DeleteSession = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    for (let index = 0; index < player.Card.length; index++) {
      await axios
        .delete(`/card/${player.Card[index].id}`, config)
        .then((r) => console.log(r))
        .catch((err) => {
          console.log(err);
        });
    }

    await axios
      .delete(`/session/${id}`, config)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        navigate("/home");
      });
  };

  return (
    <>
      {!logged && (
        <>
          <ContainerFormS>
            <img
              alt="looping"
              src="https://media2.giphy.com/media/jTgYNQpQyp6BqNi6FD/giphy.gif?cid=790b76110f35319b56c7324a1c5210ede9427b6f2bc789d4&rid=giphy.gif&ct=s"
              width="100"
              height="100"
            />
          </ContainerFormS>
        </>
      )}

      {logged && (
        <>
          <WinnerContainer>
            <Winner>
              <h1>
                <img
                  alt="troféu"
                  src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_960_720.png"
                />
                {player.nickname}
                <img
                  alt="troféu"
                  src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_960_720.png"
                />
              </h1>
              <PhotoWinner>
                <img
                  alt="foto de perfil do ganhador"
                  src={player.imgUrlPerfil}
                />

                <span>Ganhador(a)! </span>
              </PhotoWinner>
              <Result>
                <p> Pontos apostados: {player.Card.length * 100} </p>
                <p> Pontos ganhos: {award} </p>
              </Result>

              <button type="button" onClick={DeleteSession}>
                Voltar a home
              </button>
            </Winner>
          </WinnerContainer>
        </>
      )}
    </>
  );
};

export default Award;
