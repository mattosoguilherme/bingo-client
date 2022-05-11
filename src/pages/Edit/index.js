import HeaderLog from "../../components/HeaderLog";
import ContainerFormS from "../../components/styles";
import FormS, { CheckPass, DivPass, GroupButtonS } from "../styles";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState({});
  const [logged, setLogged] = useState(false);
  const [updatePass, setUpdatePass] = useState(false);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    async function GetPlayer() {
      await axios
        .get(`/auth`, config)
        .then((response) => {
          if (response.data.Card & (response.data.Card.length > 0)) {
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

          setPlayer(response.data);
          setLogged(true);
          setLoading(true);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    GetPlayer();
  }, [logged]);

  const VisibilityPass = () => {
    const pass = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (visible) {
      pass.type = "text";
      eye.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NS45NTEwMSwzMi4yNWMtNDAuNTYxOTgsMCAtNzYuMzAxNTUsMjguMTE0NTQgLTg1Ljc4MzA0LDY0Ljk1NDkxYy0wLjczODI3LDIuODc1NzYgMC45OTQ1Miw1LjgwNTUyIDMuODcwMjgsNi41NDM3OGMyLjg3NTc2LDAuNzM4MjcgNS44MDU1MiwtMC45OTQ1MiA2LjU0Mzc4LC0zLjg3MDI4YzguMTcwMDEsLTMxLjc0NDYyIDM5LjgyMDk2LC01Ni44Nzg0MiA3NS4zNjg5OCwtNTYuODc4NDJjMzUuNTQ4MDIsMCA2Ny4yOTkyMiwyNS4xNDI2NCA3NS40NjY5Niw1Ni44Nzg0MmMwLjczODI3LDIuODc1NzYgMy42NjgwMiw0LjYwODU1IDYuNTQzNzgsMy44NzAyOGMyLjg3NTc2LC0wLjczODI3IDQuNjA4NTUsLTMuNjY4MDIgMy44NzAyOCwtNi41NDM3OGMtOS40ODM3NiwtMzYuODQ5MjIgLTQ1LjMxOTA0LC02NC45NTQ5MSAtODUuODgxMDIsLTY0Ljk1NDkxek04Ni4wMDcsNjAuOTE2NjdjLTE5LjA2MzU4LDAgLTM0LjYyOTU2LDE1LjU2NiAtMzQuNjI5NTYsMzQuNjI5NTZjMCwxOS4wNjM1NyAxNS41NjU5OCwzNC42MzY1NiAzNC42Mjk1NiwzNC42MzY1NmMxOS4wNjM1OCwwIDM0LjYzNjU2LC0xNS41NzI5OSAzNC42MzY1NiwtMzQuNjM2NTZjMCwtMTkuMDYzNTYgLTE1LjU3Mjk4LC0zNC42Mjk1NiAtMzQuNjM2NTYsLTM0LjYyOTU2ek04Ni4wMDcsNzEuNjY2NjdjMTMuMjUzODUsMCAyMy44ODY1NiwxMC42MjU3MiAyMy44ODY1NiwyMy44Nzk1NmMwLDEzLjI1Mzg1IC0xMC42MzI3MSwyMy44ODY1NiAtMjMuODg2NTYsMjMuODg2NTZjLTEzLjI1Mzg1LDAgLTIzLjg3OTU2LC0xMC42MzI3MSAtMjMuODc5NTYsLTIzLjg4NjU2YzAsLTEzLjI1Mzg0IDEwLjYyNTcxLC0yMy44Nzk1NiAyMy44Nzk1NiwtMjMuODc5NTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";
      setVisible(false);
    } else {
      pass.type = "password";
      eye.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NC45OTIxOSwyMS41Yy0xOC40ODU5MywwIC0zNS42ODEyNCw2LjE0MDI0IC00OS43MDQ3NSwxNi41MzA5MmMtMi4wNTgzNCwxLjUyNTA2IC0zLjE0NjU4LDQuMDMyNDcgLTIuODU0NzEsNi41Nzc1NGMwLjI5MTg3LDIuNTQ1MDcgMS45MTk1LDQuNzQxMDMgNC4yNjk2NCw1Ljc2MDUyYzIuMzUwMTUsMS4wMTk0OSA1LjA2NTY4LDAuNzA3NTggNy4xMjM0OCwtMC44MTgyYzExLjcwNDgyLC04LjY3MjY1IDI1LjgzOTk0LC0xMy43MTc0NSA0MS4xNjYzNCwtMTMuNzE3NDVjMTUuMzI2NCwwIDI5LjQ2OTE0LDUuMDM4MTMgNDEuMTY2MzQsMTMuNzAzNDVjMi4wNTc4MSwxLjUyNTU1IDQuNzczMiwxLjgzNzI5IDcuMTIzMiwwLjgxNzhjMi4zNSwtMS4wMTk1IDMuOTc3NTMsLTMuMjE1MzMgNC4yNjk0NSwtNS43NjAyNmMwLjI5MTkyLC0yLjU0NDkzIC0wLjc5NjEzLC01LjA1MjI2IC0yLjg1NDI0LC02LjU3NzM5Yy0xNC4wMTY4LC0xMC4zODM2OCAtMzEuMjE4ODIsLTE2LjUxNjkzIC00OS43MDQ3NSwtMTYuNTE2OTN6TTE1Ny41NDA2OSw2OS4wNDkxNWMtMi42MjA0MiwwLjA2MTM2IC00Ljk5ODM2LDEuNTQ4MjQgLTYuMjAwODQsMy44NzcyOGMtNC4wNzI2Miw3LjYxNjg4IC05LjIyMDUyLDE0LjMwNjU5IC0xNS4wNDcyLDIwLjExNDI2Yy0wLjU0NDg4LDAuNDAwODUgLTEuMDMwMjgsMC44NzY4MiAtMS40NDE3MywxLjQxMzc0Yy02LjYyNTMyLDYuMjc4NTYgLTE0LjE2MDM0LDExLjI1NTU3IC0yMi4zODE4NCwxNC42OTcyNmMtMC43MzQyNCwwLjE2NDExIC0xLjQzODA2LDAuNDQyODEgLTIuMDg1NjEsMC44MjU4NGMtNy40MjI2NSwyLjgzMDk4IC0xNS4yODY3Myw0LjU1ODYgLTIzLjUxNTYyLDQuNjYxMTRjLTAuMzI0NjIsLTAuMDQ1NzEgLTAuNjUyLC0wLjA2OTA5IC0wLjk3OTgyLC0wLjA2OTk5Yy0wLjI3NjEzLDAuMDAyNzQgLTAuNTUxODcsMC4wMjE0NCAtMC44MjU4NCwwLjA1NTk5Yy0yNy4xMTcyNCwtMC4zNzYwNyAtNTAuOTQxMzgsLTE2LjY3NDUzIC02NC4zMDQwNCwtNDEuNTQ0MjdjLTEuODc0NjYsLTMuNDg2NDggLTYuMjIwNzEsLTQuNzkzMTIgLTkuNzA3MTksLTIuOTE4NDZjLTMuNDg2NDgsMS44NzQ2NiAtNC43OTMxMiw2LjIyMDcxIC0yLjkxODQ2LDkuNzA3MTljMy41NTI1NCw2LjYxMTc3IDcuNzk5NjQsMTIuNzIzMDkgMTIuNjExNjUsMTguMjUyNmwtMTQuNDQ1MzEsMTQuNDQ1MzFjLTEuODcyMTQsMS43OTc1NCAtMi42MjYyNiw0LjQ2NjczIC0xLjk3MTUzLDYuOTc4MThjMC42NTQ3MywyLjUxMTQ1IDIuNjE2MDIsNC40NzI3MyA1LjEyNzQ3LDUuMTI3NDdjMi41MTE0NSwwLjY1NDc0IDUuMTgwNjQsLTAuMDk5MzggNi45NzgxOCwtMS45NzE1M2wxNC41MTUzLC0xNC41MTUzYzUuMDA3MDUsNC4yNTE5OCAxMC40MDczOSw3Ljk4MTcgMTYuMTY2OTksMTEuMDI5OTVsLTkuODQwMTcsMTkuMzAyNDFjLTEuMjQ5MTksMi4yODk3OCAtMS4xNTU4Myw1LjA3NzQyIDAuMjQzNzgsNy4yNzg0OWMxLjM5OTYxLDIuMjAxMDYgMy44ODQ0NiwzLjQ2ODAxIDYuNDg3OTEsMy4zMDc5OGMyLjYwMzQ1LC0wLjE2MDAzIDQuOTE0NDMsLTEuNzIxNzcgNi4wMzM5MywtNC4wNzc2OGwxMC4yODgwOSwtMjAuMTg0MjRjNS45MzU4LDEuOTQ5NDMgMTIuMTIyMzUsMy4yNjMxNyAxOC41MDQ1NiwzLjgyMTI5djIxLjgzNTk0Yy0wLjAzNjU1LDIuNTg0NTYgMS4zMjEzNiw0Ljk4ODU4IDMuNTUzNzYsNi4yOTE1M2MyLjIzMjQsMS4zMDI5NSA0Ljk5MzQyLDEuMzAyOTUgNy4yMjU4MiwwYzIuMjMyNCwtMS4zMDI5NSAzLjU5MDMxLC0zLjcwNjk3IDMuNTUzNzYsLTYuMjkxNTN2LTIxLjg0OTkzYzYuMDAyNjksLTAuNTIyNzQgMTEuODI4NTMsLTEuNzE2MjMgMTcuNDQwNzYsLTMuNDcxMzVsMTAuMTA2MTIsMTkuODQ4MzFjMS43OTczNSwzLjUyOSA2LjExNTIxLDQuOTMyNzcgOS42NDQyLDMuMTM1NDJjMy41MjksLTEuNzk3MzUgNC45MzI3NywtNi4xMTUyMSAzLjEzNTQyLC05LjY0NDJsLTkuNTc0MjIsLTE4Ljc5ODVjNS44NjU2MywtMy4wMDI0OSAxMS4zMTgyNSwtNi43NTE4MiAxNi40MTg5NCwtMTEuMDAxOTVsMTMuOTgzNCwxMy45ODM0YzEuNzk3NTQsMS44NzIxMiA0LjQ2NjcyLDIuNjI2MjIgNi45NzgxNiwxLjk3MTQ4YzIuNTExNDQsLTAuNjU0NzQgNC40NzI3MSwtMi42MTYwMSA1LjEyNzQ1LC01LjEyNzQ1YzAuNjU0NzQsLTIuNTExNDQgLTAuMDk5MzYsLTUuMTgwNjEgLTEuOTcxNDgsLTYuOTc4MTZsLTEzLjc1OTQ0LC0xMy43NzM0NGM1LjA5NTY4LC01Ljc1NjQ3IDkuNTgyNDEsLTEyLjE1ODE4IDEzLjI5NzUyLC0xOS4xMDY0NGMxLjI0NTYxLC0yLjI0ODcgMS4xOTE1NywtNC45OTIyNiAtMC4xNDE2MywtNy4xOTAxN2MtMS4zMzMyLC0yLjE5NzkgLTMuNzQxMzYsLTMuNTEzNTEgLTYuMzExMTcsLTMuNDQ3ODZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";
      setVisible(true);
    }
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const emailForm = event.target.email.value;
    const nicknameForm = event.target.nickname.value;

    setLoading(false);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if ((nicknameForm === player.nickname) & (emailForm === player.email)) {
      if (!updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then(() => {
            setLoading(true);
            alert("Perfil atualizado com sucesso.");
            navigate(`/profile`);
          })
          .catch((err) => {
            setLoading(true);
            alert(err.response.data.message);
            console.log(err);
          });
      }

      if (updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          password: event.target.password.value,
          newpass: event.target.newpass.value,
          newpassConfirmation: event.target.newpassConfirmation.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then((res) => {
            alert("Perfil atualizado com sucesso.");
            navigate(`/profile`);
          })
          .catch((err) => {
            alert(err.response.data.message);
            console.log(err);
          });
      }
    }

    if ((nicknameForm !== player.nickname) & (emailForm !== player.email)) {
      if (!updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          nickname: event.target.nickname.value,
          email: event.target.email.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then(() => {
            setLoading(true);

            alert(
              "Perfil atualizado com sucesso. Faça login novamente com seu novo email."
            );
            navigate("/");
          })
          .catch((err) => {
            setLoading(true);
            alert(err.response.data.message);
            console.log(err);
          });
      }

      if (updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          nickname: event.target.nickname.value,
          email: event.target.email.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          password: event.target.password.value,
          newpass: event.target.newpass.value,
          newpassConfirmation: event.target.newpassConfirmation.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then(() => {
            alert(
              "Perfil atualizado com sucesso. Faça login novamente com seu novo email."
            );
            navigate("/");
          })
          .catch((err) => {
            alert(err.response.data.message);
            console.log(err);
          });
      }
    }

    if ((nicknameForm !== player.nickname) & (emailForm === player.email)) {
      if (!updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          nickname: event.target.nickname.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then((res) => {
            setLoading(true);
            alert("Perfil atualizado com sucesso.");
            navigate(`/profile`);
          })
          .catch((err) => {
            setLoading(true);
            alert(err.response.data.message);
            console.log(err);
          });
      }

      if (updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          nickname: event.target.nickname.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          password: event.target.password.value,
          newpass: event.target.newpass.value,
          newpassConfirmation: event.target.newpassConfirmation.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then((res) => {
            alert("Perfil atualizado com sucesso.");
            navigate(`/profile`);
          })
          .catch((err) => {
            alert(err.response.data.message);
            console.log(err);
          });
      }
    }

    if ((nicknameForm === player.nickname) & (emailForm !== player.email)) {
      if (!updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          email: event.target.email.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then(() => {
            setLoading(true);

            alert(
              "Perfil atualizado com sucesso. Faça login novamente com seu novo email."
            );
            navigate("/");
          })
          .catch((err) => {
            setLoading(true);
            alert(err.response.data.message);
            console.log(err);
          });
      }

      if (updatePass) {
        const playerUpdated = {
          name: event.target.name.value,
          email: event.target.email.value,
          imgUrlPerfil: event.target.imgUrlPerfil.value,
          password: event.target.password.value,
          newpass: event.target.newpass.value,
          newpassConfirmation: event.target.newpassConfirmation.value,
          role: "USER",
        };

        await axios
          .patch("/player", playerUpdated, config)
          .then(() => {
            alert(
              "Perfil atualizado com sucesso. Faça login novamente com seu novo email."
            );
            navigate("/");
          })
          .catch((err) => {
            alert(err.response.data.message);
            console.log(err);
          });
      }
    }
  };

  return (
    <>
      <HeaderLog />
      {!loading && (
        <>
          <ContainerFormS>
            <img
              src="https://media2.giphy.com/media/jTgYNQpQyp6BqNi6FD/giphy.gif?cid=790b76110f35319b56c7324a1c5210ede9427b6f2bc789d4&rid=giphy.gif&ct=s"
              width="100"
              height="100"
              alt="loading"
            />
          </ContainerFormS>
        </>
      )}
      {logged && (
        <>
          <ContainerFormS>
            <FormS method="POST" onSubmit={HandleSubmit}>
              <label>Imagem de perfil</label>
              <input
                id="imgUrlPerfil"
                defaultValue={player.imgUrlPerfil}
                required
              />

              <label>Nome</label>
              <input id="name" defaultValue={player.name} required />

              <label>Nickname</label>
              <input id="nickname" defaultValue={player.nickname} required />

              <label>Email</label>
              <input id="email" defaultValue={player.email} required />

              <CheckPass>
                <span>Atualizar senha</span>
                <input
                  onChange={(e) => setUpdatePass(e.target.checked)}
                  type="checkbox"
                />
              </CheckPass>

              {updatePass && (
                <>
                  <DivPass>
                    <button onClick={VisibilityPass} type="button">
                      <img
                        id="eye"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NC45OTIxOSwyMS41Yy0xOC40ODU5MywwIC0zNS42ODEyNCw2LjE0MDI0IC00OS43MDQ3NSwxNi41MzA5MmMtMi4wNTgzNCwxLjUyNTA2IC0zLjE0NjU4LDQuMDMyNDcgLTIuODU0NzEsNi41Nzc1NGMwLjI5MTg3LDIuNTQ1MDcgMS45MTk1LDQuNzQxMDMgNC4yNjk2NCw1Ljc2MDUyYzIuMzUwMTUsMS4wMTk0OSA1LjA2NTY4LDAuNzA3NTggNy4xMjM0OCwtMC44MTgyYzExLjcwNDgyLC04LjY3MjY1IDI1LjgzOTk0LC0xMy43MTc0NSA0MS4xNjYzNCwtMTMuNzE3NDVjMTUuMzI2NCwwIDI5LjQ2OTE0LDUuMDM4MTMgNDEuMTY2MzQsMTMuNzAzNDVjMi4wNTc4MSwxLjUyNTU1IDQuNzczMiwxLjgzNzI5IDcuMTIzMiwwLjgxNzhjMi4zNSwtMS4wMTk1IDMuOTc3NTMsLTMuMjE1MzMgNC4yNjk0NSwtNS43NjAyNmMwLjI5MTkyLC0yLjU0NDkzIC0wLjc5NjEzLC01LjA1MjI2IC0yLjg1NDI0LC02LjU3NzM5Yy0xNC4wMTY4LC0xMC4zODM2OCAtMzEuMjE4ODIsLTE2LjUxNjkzIC00OS43MDQ3NSwtMTYuNTE2OTN6TTE1Ny41NDA2OSw2OS4wNDkxNWMtMi42MjA0MiwwLjA2MTM2IC00Ljk5ODM2LDEuNTQ4MjQgLTYuMjAwODQsMy44NzcyOGMtNC4wNzI2Miw3LjYxNjg4IC05LjIyMDUyLDE0LjMwNjU5IC0xNS4wNDcyLDIwLjExNDI2Yy0wLjU0NDg4LDAuNDAwODUgLTEuMDMwMjgsMC44NzY4MiAtMS40NDE3MywxLjQxMzc0Yy02LjYyNTMyLDYuMjc4NTYgLTE0LjE2MDM0LDExLjI1NTU3IC0yMi4zODE4NCwxNC42OTcyNmMtMC43MzQyNCwwLjE2NDExIC0xLjQzODA2LDAuNDQyODEgLTIuMDg1NjEsMC44MjU4NGMtNy40MjI2NSwyLjgzMDk4IC0xNS4yODY3Myw0LjU1ODYgLTIzLjUxNTYyLDQuNjYxMTRjLTAuMzI0NjIsLTAuMDQ1NzEgLTAuNjUyLC0wLjA2OTA5IC0wLjk3OTgyLC0wLjA2OTk5Yy0wLjI3NjEzLDAuMDAyNzQgLTAuNTUxODcsMC4wMjE0NCAtMC44MjU4NCwwLjA1NTk5Yy0yNy4xMTcyNCwtMC4zNzYwNyAtNTAuOTQxMzgsLTE2LjY3NDUzIC02NC4zMDQwNCwtNDEuNTQ0MjdjLTEuODc0NjYsLTMuNDg2NDggLTYuMjIwNzEsLTQuNzkzMTIgLTkuNzA3MTksLTIuOTE4NDZjLTMuNDg2NDgsMS44NzQ2NiAtNC43OTMxMiw2LjIyMDcxIC0yLjkxODQ2LDkuNzA3MTljMy41NTI1NCw2LjYxMTc3IDcuNzk5NjQsMTIuNzIzMDkgMTIuNjExNjUsMTguMjUyNmwtMTQuNDQ1MzEsMTQuNDQ1MzFjLTEuODcyMTQsMS43OTc1NCAtMi42MjYyNiw0LjQ2NjczIC0xLjk3MTUzLDYuOTc4MThjMC42NTQ3MywyLjUxMTQ1IDIuNjE2MDIsNC40NzI3MyA1LjEyNzQ3LDUuMTI3NDdjMi41MTE0NSwwLjY1NDc0IDUuMTgwNjQsLTAuMDk5MzggNi45NzgxOCwtMS45NzE1M2wxNC41MTUzLC0xNC41MTUzYzUuMDA3MDUsNC4yNTE5OCAxMC40MDczOSw3Ljk4MTcgMTYuMTY2OTksMTEuMDI5OTVsLTkuODQwMTcsMTkuMzAyNDFjLTEuMjQ5MTksMi4yODk3OCAtMS4xNTU4Myw1LjA3NzQyIDAuMjQzNzgsNy4yNzg0OWMxLjM5OTYxLDIuMjAxMDYgMy44ODQ0NiwzLjQ2ODAxIDYuNDg3OTEsMy4zMDc5OGMyLjYwMzQ1LC0wLjE2MDAzIDQuOTE0NDMsLTEuNzIxNzcgNi4wMzM5MywtNC4wNzc2OGwxMC4yODgwOSwtMjAuMTg0MjRjNS45MzU4LDEuOTQ5NDMgMTIuMTIyMzUsMy4yNjMxNyAxOC41MDQ1NiwzLjgyMTI5djIxLjgzNTk0Yy0wLjAzNjU1LDIuNTg0NTYgMS4zMjEzNiw0Ljk4ODU4IDMuNTUzNzYsNi4yOTE1M2MyLjIzMjQsMS4zMDI5NSA0Ljk5MzQyLDEuMzAyOTUgNy4yMjU4MiwwYzIuMjMyNCwtMS4zMDI5NSAzLjU5MDMxLC0zLjcwNjk3IDMuNTUzNzYsLTYuMjkxNTN2LTIxLjg0OTkzYzYuMDAyNjksLTAuNTIyNzQgMTEuODI4NTMsLTEuNzE2MjMgMTcuNDQwNzYsLTMuNDcxMzVsMTAuMTA2MTIsMTkuODQ4MzFjMS43OTczNSwzLjUyOSA2LjExNTIxLDQuOTMyNzcgOS42NDQyLDMuMTM1NDJjMy41MjksLTEuNzk3MzUgNC45MzI3NywtNi4xMTUyMSAzLjEzNTQyLC05LjY0NDJsLTkuNTc0MjIsLTE4Ljc5ODVjNS44NjU2MywtMy4wMDI0OSAxMS4zMTgyNSwtNi43NTE4MiAxNi40MTg5NCwtMTEuMDAxOTVsMTMuOTgzNCwxMy45ODM0YzEuNzk3NTQsMS44NzIxMiA0LjQ2NjcyLDIuNjI2MjIgNi45NzgxNiwxLjk3MTQ4YzIuNTExNDQsLTAuNjU0NzQgNC40NzI3MSwtMi42MTYwMSA1LjEyNzQ1LC01LjEyNzQ1YzAuNjU0NzQsLTIuNTExNDQgLTAuMDk5MzYsLTUuMTgwNjEgLTEuOTcxNDgsLTYuOTc4MTZsLTEzLjc1OTQ0LC0xMy43NzM0NGM1LjA5NTY4LC01Ljc1NjQ3IDkuNTgyNDEsLTEyLjE1ODE4IDEzLjI5NzUyLC0xOS4xMDY0NGMxLjI0NTYxLC0yLjI0ODcgMS4xOTE1NywtNC45OTIyNiAtMC4xNDE2MywtNy4xOTAxN2MtMS4zMzMyLC0yLjE5NzkgLTMuNzQxMzYsLTMuNTEzNTEgLTYuMzExMTcsLTMuNDQ3ODZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                        alt="VisiblePassword"
                        width="30"
                        height="24"
                      />
                    </button>

                    <input
                      id="password"
                      type="password"
                      placeholder="Senha atual"
                      required
                    />
                  </DivPass>

                  <label>Nova senha</label>
                  <input id="newpass" type="password" required />

                  <label>Confirmação de senha</label>
                  <input id="newpassConfirmation" type="password" required />
                </>
              )}

              <GroupButtonS>
                <Link to={`/profile`}>
                  <button>Voltar</button>
                </Link>
                <button type="submit">Salvar</button>
              </GroupButtonS>
            </FormS>
          </ContainerFormS>
        </>
      )}
    </>
  );
};

export default Edit;
