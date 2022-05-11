import axios from "axios";
import { useEffect } from "react";

import { TableRaffle } from "../styles";

export const BingoValidate = [];

const Card = (props) => {
  const c = props.data;

  c.Checked.sort(function (a, b) {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return 0;
  });

  const speech = new SpeechSynthesisUtterance();

  const frases = ["Excelente", "Ooh Yeah", "Nore Deep"];

  const f = frases[Math.floor(Math.random() * frases.length)];

  const listNumbersDraw = props.list;
  const token = localStorage.getItem("token");

  useEffect(async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("/auth", config)
      .then((res) => {
        if (res.data.role === "ADMIN") {
          BingoValidate.push(c.playerId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandleCheck = (event) => {
    console.log(event.target.id);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post(
        "/raffle/validation_number",
        {
          numbers_raffle: listNumbersDraw,
          id_checked: Number(event.target.id),
        },
        config
      )
      .then(() => {
        event.target.className = "checked";
        speech.text = String(f);
        window.speechSynthesis.speak(speech);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <TableRaffle>
        <thead>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <button id={c.Checked[0].id} onClick={HandleCheck}>
                {c.cards_drawn[0]}
              </button>
            </td>

            <td>
              <button id={c.Checked[3].id} onClick={HandleCheck}>
                {c.cards_drawn[3]}
              </button>
            </td>

            <td>
              <button id={c.Checked[6].id} onClick={HandleCheck}>
                {c.cards_drawn[6]}
              </button>
            </td>

            <td>
              <button id={c.Checked[9].id} onClick={HandleCheck}>
                {c.cards_drawn[9]}
              </button>
            </td>

            <td>
              <button id={c.Checked[12].id} onClick={HandleCheck}>
                {c.cards_drawn[12]}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id={c.Checked[1].id} onClick={HandleCheck}>
                {c.cards_drawn[1]}
              </button>
            </td>
            <td>
              <button id={c.Checked[4].id} onClick={HandleCheck}>
                {c.cards_drawn[4]}{" "}
              </button>
            </td>
            <td>
              <button id={c.Checked[7].id} onClick={HandleCheck}>
                {c.cards_drawn[7]}
              </button>
            </td>
            <td>
              <button id={c.Checked[10].id} onClick={HandleCheck}>
                {c.cards_drawn[10]}
              </button>
            </td>
            <td>
              <button id={c.Checked[13].id} onClick={HandleCheck}>
                {c.cards_drawn[13]}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id={c.Checked[2].id} onClick={HandleCheck}>
                {c.cards_drawn[2]}
              </button>
            </td>
            <td>
              <button id={c.Checked[5].id} onClick={HandleCheck}>
                {c.cards_drawn[5]}
              </button>
            </td>
            <td>
              <button id={c.Checked[8].id} onClick={HandleCheck}>
                {c.cards_drawn[8]}
              </button>
            </td>
            <td>
              <button id={c.Checked[11].id} onClick={HandleCheck}>
                {c.cards_drawn[11]}
              </button>
            </td>
            <td>
              <button id={c.Checked[14].id} onClick={HandleCheck}>
                {c.cards_drawn[14]}
              </button>
            </td>
          </tr>
        </tbody>
      </TableRaffle>
    </>
  );
};

export default Card;
