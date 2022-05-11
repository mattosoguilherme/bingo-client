import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import { GroupS } from "../styles";

const GroupCard = (props) => {
  const token = localStorage.getItem("token");
  const [card, setCard] = useState();
  const [logged, setLogged] = useState(false);

  useEffect(async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("/auth", config)
      .then((res) => {
        setCard(res.data.Card);
        setLogged(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {logged && (
        <GroupS>
          {card.map((c) => (
            <Card list={props.list} data={c} key={c.id} />
          ))}
        </GroupS>
      )}
    </>
  );
};

export default GroupCard;
