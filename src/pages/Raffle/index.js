import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BingoValidate } from "../../components/Card";
import GroupCard from "../../components/GroupCard";
import HeaderLog from "../../components/HeaderLog";
import NumberDraw from "../../components/Numbers";
import ContainerFormS from "../../components/styles";

import { DivRaffle, Loading, TextLoading } from "../styles";

const listNumbersDraw = [];

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const Raffle = () => {
  const { id } = useParams();

  console.log(useParams());

  const navigate = useNavigate();

  const [start, setStart] = useState(false);
  const [release, setRelease] = useState(false);
  const [bingoCheck, setBingoCheck] = useState(false);
  const [numberBall, setNumberBall] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [close, setClose] = useState(false);

  const [limit, setLimit] = useState();
  const [playerId, setPlayerId] = useState("");
  const [cardId, setCardId] = useState();

  const token = localStorage.getItem("token");

  const speech = new SpeechSynthesisUtterance();

  speech.lang = "pt-BR";
  speech.volume = "100";
  speech.pitch = "1";
  speech.rate = "1";

  const voices = window.speechSynthesis.getVoices();

  speech.voice = voices[1];


  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetPlayer() {
      await axios
        .get("/auth", config)
        .then((res) => {
          setCardId(res.data.Card[0].id);

          if (res.data.role === "ADMIN") {
            setAdmin(true);
            setPlayerId(res.data.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function Awaiting() {
      const array = 100;

      for (let index = 0; index < array; index++) {
        let c = true;
        await sleep(1000);
        axios
          .get(`/session/${id}`, config)
          .then((res) => {
            if (res.data.Players.length === res.data.limit) {
              setRelease(true);
              c = false;
            }
            setLimit(res.data.limit);
          })
          .catch((err) => {
            console.log(err);
            setClose(true);
          });
       
        if (!c) {
          break;
        }
      }
    }

    Awaiting();

    GetPlayer();
  }, []);

  const Call = async () => {
    setStart(true);
    const lengthLoop = 91;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    for (let index = 0; index < lengthLoop; index++) {
      if (close) {
        window.speechSynthesis.pause();
        break;
      }

      await axios
        .post(
          "/raffle/draw",
          { position: index, sessionId: Number(id) },
          config
        )
        .then((res) => {
          setNumberBall(res.data);
          speech.text = String(res.data);
          window.speechSynthesis.speak(speech);
          listNumbersDraw.push(res.data);
        })
        .catch((e) => {
          console.log(e);
          setClose(true);
        });

      await axios
        .get("/auth", config)
        .then((res) => {
          const cards = res.data.Card;

          for (let i = 0; i < cards.length; i++) {
            if (
              cards[i].Checked[0].check &&
              cards[i].Checked[1].check &&
              cards[i].Checked[2].check &&
              cards[i].Checked[3].check &&
              cards[i].Checked[4].check &&
              cards[i].Checked[5].check &&
              cards[i].Checked[6].check &&
              cards[i].Checked[7].check &&
              cards[i].Checked[8].check &&
              cards[i].Checked[9].check &&
              cards[i].Checked[10].check &&
              cards[i].Checked[11].check &&
              cards[i].Checked[12].check &&
              cards[i].Checked[13].check &&
              cards[i].Checked[14].check
            ) {
              setBingoCheck(true);
              setPlayerId(cards[i].playerId);
              setCardId(cards[i].id);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get(`/session/${id}`, config)
        .then((res) => {
          if (res.data.close) {
            window.speechSynthesis.pause();
            navigate(`/award/${id}`);
          }
        })
        .catch((err) => {
          console.log(err);
          setClose(true);
        });

      await sleep(5000);
    }
  };

  const CheckBingo = async () => {
    setClose(true);
    window.speechSynthesis.pause();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .post(
        "/raffle/check",
        { sessionId: Number(id), cardId: Number(cardId) },
        config
      )
      .then(() => {
        axios
          .patch(
            `/session/${id}`,
            {
              playerId: playerId,
              close: true,
              limit: limit,
              winner: playerId,
            },
            config
          )
          .then(() => {
            navigate(`/award/${id}`);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const CheckBingoADMIN = async () => {
    setClose(true);

    window.speechSynthesis.pause();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post("/raffle/check", { sessionId: Number(id), cardId: cardId }, config)
      .then(() => {
        axios
          .patch(
            `/session/${id}`,
            {
              playerId: playerId,
              close: true,
              limit: limit,
              winner: BingoValidate[0],
            },
            config
          )
          .then((r) => {
            console.log(r);
            navigate(`/award/${id}`);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <HeaderLog />
      {!release && (
        <ContainerFormS>
          <TextLoading> Esparando outros jogadores...</TextLoading>
          <Loading src="https://c.tenor.com/nEP6ovplEd8AAAAi/so-really.gif" />
        </ContainerFormS>
      )}
      {release && (
        <>
          <ContainerFormS>
            <NumberDraw list={listNumbersDraw} data={numberBall} />
            <DivRaffle>
              <GroupCard list={listNumbersDraw} />

              {!start && (
                <>
                  <button onClick={Call}> Começar Bingo </button>
                </>
              )}

              {bingoCheck && (
                <>
                  <button onClick={CheckBingo}> BINGO! </button>
                </>
              )}
              {admin && (
                <>
                  <button onClick={CheckBingoADMIN}> Testar bingo </button>
                </>
              )}
            </DivRaffle>
          </ContainerFormS>
        </>
      )}
    </>
  );
};

export default Raffle;
