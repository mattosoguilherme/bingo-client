import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import HeaderLog from "../../components/HeaderLog";
import ContainerFormS from "../../components/styles";
import { GroupBtProfile, ProfileS, GroupButtonS } from "../styles";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState({});
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetPlayer() {
      await axios
        .get(`/auth`, config)
        .then((response) => {
          if (response.data.Card.length) {
            if (response.data.Card.length > 0) {
              const cards = response.data.Card;
              const refund = cards.length * 100;

              axios
                .patch(
                  `/score/credit/${response.data.Score.id}`,
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

          setPlayer(response.data);

          setLogged(true);
          setLoading(true);
        })
        .catch((erro) => {
          console.log(erro);
          setLogged(false);
          setLoading(false);
        });
    }

    GetPlayer();
  }, []);

  const HandleDelete = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .delete("/player", config)
      .then((res) => {
        alert(`Uma pena ${res.data.name}. Até logo...`);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderLog />
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
        <ContainerFormS>
          <ProfileS>
            <GroupBtProfile>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Excluir perfil
              </button>

              <Link to={`/edit`}>
                <button>Editar perfil</button>
              </Link>
            </GroupBtProfile>

            <img alt="imagem de perfil do usuário" src={player.imgUrlPerfil} />
            <span> {player["Score"].score} pontos</span>
            <input value={player.name} />
            <input value={player.nickname} />
            <input value={player.email} />
          </ProfileS>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Tem certeza que deseja excluir seu perfil ?
                </div>
                <div class="modal-footer">
                  <GroupButtonS>
                    <button type="button" data-bs-dismiss="modal">
                      Não
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      onClick={HandleDelete}
                    >
                      Sim
                    </button>
                  </GroupButtonS>
                </div>
              </div>
            </div>
          </div>
        </ContainerFormS>
      )}
    </>
  );
};

export default Profile;
