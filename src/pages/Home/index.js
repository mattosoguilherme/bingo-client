import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderLog from "../../components/HeaderLog";
import ContainerFormS, {
  BadgePriceS,
  BadgeScore,
  BodyModalS,
  ContainerBingo,
  GroupBtModal,
  LeftModal,
  ResultModal,
  TableS,
  TextModalS,
} from "../../components/styles";

import { GroupButtonS } from "../styles";

const Home = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState();
  const [id, setId] = useState();
  const [count, setCount] = useState(0);
  const [countPlayer, setCountPlayer] = useState(2);
  const [admin, setAdmin] = useState(false);

  const total = count * 100;
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetPlayer() {
      await axios
        .get("/auth", config)
        .then((res) => {
          if (!res.data.Score) {
            axios
              .get("/score", config)
              .then(() => {
                setLogged(true);
                setLoading(true);
              })
              .catch(() => {
                setLogged(true);
                setLoading(true);
              });
          }

          if (res.data.Card) {
            if (res.data.Card.length > 0) {
              const cards = res.data.Card;
              const refund = cards.length * 100;

              axios
                .patch(
                  `/score/credit/${res.data.Score.id}`,
                  { score: refund },
                  config
                )
                .then((r) => console.log(r.data))
                .catch((e) => console.log(e));

              for (let index = 0; index < cards.length; index++) {
                axios
                  .delete(`/card/${cards[index].id}`, config)
                  .then((r) => console.log(r.data))
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
          }

          setLogged(true);
          setLoading(true);
          if (res.data.role === "ADMIN") {
            setAdmin(true);
          }

          setScore(res.data["Score"].score);
          setId(res.data.id);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }

    GetPlayer();
  }, []);

  const More = () => {
    if (count >= 6) {
      setCount(6);
    } else {
      setCount(count + 1);
    }
  };

  const Less = () => {
    if (count < 0) {
      setCount(0);
    }
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const MorePlayer = () => {
    setCountPlayer(countPlayer + 1);
  };

  const LessPlayer = () => {
    if (countPlayer <= 2) {
      setCountPlayer(2);
    }
    if (countPlayer > 2) {
      setCountPlayer(countPlayer - 1);
    }
  };

  const LessAdmin = () => {
    if (countPlayer <= 1) {
      setCountPlayer(1);
    } else {
      setCountPlayer(countPlayer - 1);
    }
  };

  const BuyCard = async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    if (count === 0) {
      alert("Você precisa de cartelas para jogar");
    }
    if (count > 0) {
      const quantity_cards = {
        number_cards: count,
      };

      await axios
        .post("/card", quantity_cards, config)
        .then(() => {
          axios
            .post(
              "/session ",
              { playerId: id, limit: countPlayer, close: false },
              config
            )
            .then((res) => {
              navigate(`/session/${res.data.id}`);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((erro) => {
          console.error(erro);
          alert(erro.response.data.message);
        });
    }
  };

  return (
    <>
      {!loading && (
        <ContainerFormS>
          <img
            alt="looping"
            src="https://media2.giphy.com/media/jTgYNQpQyp6BqNi6FD/giphy.gif?cid=790b76110f35319b56c7324a1c5210ede9427b6f2bc789d4&rid=giphy.gif&ct=s"
            width="100"
            height="100"
          />
        </ContainerFormS>
      )}

      {logged && (
        <>
          <HeaderLog score={score} />
          <ContainerBingo>
            <div className="left">
              <div className="roles_game">
                <h1>Fundamentos do Bingo Red</h1>

                <ul>
                  <li>
                    Ao se cadastrar, cada jogador ganha 1000 pontos para gastar
                    comprando cartelas.
                  </li>
                  <li>
                    Antes de cada partida, o jogador escolhe quantas cartelas
                    deseja usar (no máximo 6) simultaneamente.
                  </li>
                  <li>
                    Quando a partida começa, os números são sorteados, um por
                    um, aleatoriamente, e o jogador deve verificar se eles estão
                    em sua cartela.
                  </li>
                  <li>
                    Caso um número sorteado esteja na cartela do jogador, ele
                    deverá marcá-lo.
                  </li>
                  <li>
                    Ao completar cartela cheia, o jogador deverá "cantar" Bingo
                    clicando no botão "Bingo"
                  </li>
                  <li>
                    A partida termina quando o primeiro jogador completar a
                    cartela.
                  </li>
                  <li>
                    Nesse momento, ocorre a premiação de acordo com as
                    quantidades de cartelas que o jogador comprou:
                    <ol>
                      <li>Caso compre uma cartela, o prémio é 10.000 pontos</li>
                      <li>
                        Caso compre duas cartelas, o prémio é 8.000 pontos
                      </li>
                      <li>
                        {" "}
                        Caso compre três cartelas, o prémio é 6.400 pontos
                      </li>
                      <li>
                        Caso compre quatro cartelas, o prémio é 4.800 pontos
                      </li>
                      <li>
                        Caso compre cinco cartelas, o prémio é 3.200 pontos
                      </li>
                      <li>
                        Caso compre seis cartelas, o prémio é 1.600 pontos
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span>START</span>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Compra de cartelas
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <BodyModalS>
                      <LeftModal>
                        <BadgePriceS> Uma Cartela = 100 pontos </BadgePriceS>
                        <TextModalS>
                          Quantas cartelas você quer comprar?
                        </TextModalS>

                        <GroupBtModal>
                          <button onClick={Less}>-</button>
                          <span> {count} </span>

                          <button onClick={More}> +</button>
                        </GroupBtModal>
                      </LeftModal>

                      <TableS>
                        <thead>
                          <th>B</th>
                          <th>I</th>
                          <th>N</th>
                          <th>G</th>
                          <th>O</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                          </tr>

                          <tr>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>7</td>
                            <td>6</td>
                          </tr>

                          <tr>
                            <td>15</td>
                            <td>14</td>
                            <td>13</td>
                            <td>12</td>
                            <td>11</td>
                          </tr>
                        </tbody>
                      </TableS>
                    </BodyModalS>
                    <div className="field-limit-player">
                      <p> Limite de players na sessão: </p>

                      <div>
                        {admin && <button onClick={LessAdmin}> - </button>}
                        {!admin && <button onClick={LessPlayer}>-</button>}
                        <span> {countPlayer} </span>

                        <button onClick={MorePlayer}>+</button>
                      </div>
                    </div>
                    <ResultModal>
                      Total: {total}
                      <BadgeScore>Meus pontos: {score - total}</BadgeScore>
                    </ResultModal>
                  </div>
                  <div class="modal-footer">
                    <GroupButtonS>
                      <button type="button" data-bs-dismiss="modal">
                        Cancelar
                      </button>

                      <button
                        data-bs-dismiss="modal"
                        onClick={BuyCard}
                        type="button"
                      >
                        Começar bingo
                      </button>
                    </GroupButtonS>
                  </div>
                </div>
              </div>
            </div>
          </ContainerBingo>
        </>
      )}
    </>
  );
};

export default Home;
