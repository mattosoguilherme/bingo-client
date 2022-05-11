import { useEffect, useState } from "react";
import ContainerFormS, {
  Badge,
  GroupBtModal,
  ResultModal,
  TableBuyS,
  TextModalS,
} from "../../components/styles";
import { BuyDiv } from "../styles";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Buy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  Number(id);
  const [logged, setLogged] = useState();
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState();
  const [score, setScore] = useState();
  const total = count * 100;

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    async function GetPlayer() {
      await axios
        .get("/auth", config)
        .then((res) => {
          if (res.data.Card) {
            if (res.data.Card.length > 0) {
              const cards = res.data.Card;
              const refund = cards.length * 100;

              axios
                .patch(
                  `/score/credit/${Number(res.data["Score"].id)}`,
                  { score: refund },
                  config
                )
                .then((e) => console.log(e))
                .catch((e) => console.log(e));

              for (let index = 0; index < cards.length; index++) {
                axios
                  .delete(`/card/${cards[index].id}`, config)
                  .then((r) => console.log(r))
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
          }

          setLogged(true);

          setScore(res.data["Score"].scorep);
          setPlayer(res.data);
        })
        .cacth((e) => {
          console.error(e);
          setLogged(false);
        });
    }

    GetPlayer();
  }, []);

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
            .patch(
              `/session/${id}`,
              { playerId: player.id, close: false },
              config
            )
            .then(() => {
              navigate(`/session/${id}`);
            })
            .cath((err) => {
              console.log(err);
            });
        })
        .catch((erro) => {
          console.error(erro);
          alert(erro);
        });
    }
  };

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
          <ContainerFormS>
            <BuyDiv>
              <h1> Compra de cartelas</h1>

              <Badge> Uma cartela = 100 pontos</Badge>
              <TableBuyS>
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
              </TableBuyS>

              <TextModalS>Quantas cartelas você quer comprar?</TextModalS>
              <GroupBtModal>
                <button onClick={Less}> -</button>
                <span>{count}</span>
                <button onClick={More}>+</button>
              </GroupBtModal>

              <ResultModal>
                {" "}
                Total:{total} <Badge> {score} </Badge>{" "}
              </ResultModal>

              <footer>
                <Link to="/session">
                  <button type="button">Cancelar</button>
                </Link>

                <button onClick={BuyCard} type="button">
                  Ingressar
                </button>
              </footer>
            </BuyDiv>
          </ContainerFormS>
        </>
      )}
    </>
  );
};

export default Buy;
