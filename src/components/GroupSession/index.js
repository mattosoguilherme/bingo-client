import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import CardSession from "../cardSession";
import ContainerFormS, { GroupSessionS } from "../styles";

const GroupSession = () => {
  const token = localStorage.getItem("token");
  const [sessions, setSessions] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/session", config)
      .then((r) => {
        if (r.data.Card) {
          if (r.data.Card.length > 0) {
            const cards = r.data.Card;
            const refund = cards.length * 100;

            axios
              .patch(
                `/score/credit/${r.data.Score.id}`,
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
        setSessions(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      {!logged && (
        <ContainerFormS>
          <Alert>
            <Alert.Heading>Nenhuma sessão ativa</Alert.Heading>
          </Alert>
        </ContainerFormS>
      )}
      {logged && (
        <GroupSessionS>
          {sessions.map((s) => (
            <CardSession data={s} key={s.id} />
          ))}
        </GroupSessionS>
      )}
    </>
  );
};

export default GroupSession;
