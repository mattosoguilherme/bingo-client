import styled from "styled-components";

export const NavS = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #8b0000;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-size: 2rem;

    color: white;
    padding: 0.2rem;
    &:hover {
      color: #f29d35;
      cursor: pointer;
    }
  }
`;

export const NavPrincipalS = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #8b0000;

  a {
    font-size: 2rem;
    color: white;
    padding: 0.2rem;
    &:hover {
      color: #f29d35;
      cursor: pointer;
    }
  }
  .nav-link {
    &:hover {
      color: #f29d35 !important ;
      cursor: pointer;
    }
  }
  .dropdown-menu {
    background-color: #8b0000;
  }
`;

const ContainerFormS = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 420px) {
    background-color: #8b0000;
    height: 1600px;
    align-items: start;
  }

  img {
    align-self: center;
    margin-top: 2rem;
  }

  .modal-content {
    border: none;
    background-color: #8b0000;
  }
  .modal-body {
    border: none;
    color: white;
    font-size: 1.6rem;
    text-align: center;
  }

  .modal-footer {
    border: none;
  }

  .modal-header {
    border: none;
  }
`;

export const ContainerBingo = styled.main`
  width: 100%;
  height: 34.6rem;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  @media (max-width: 420px) {
    flex-direction: column;
  }

  .field-limit-player {
    margin: 1rem 0 0 0;
    font-size: 1.5rem;
    width: 100%;
    display: flex;
    @media (max-width: 420px) {
      font-size: 1.1rem;
      text-decoration: solid;
    }
  }

  .field-limit-player span {
    margin: 0 1rem 0 1.2rem;
    @media (max-width: 420px) {
      margin: 0 0.3rem 0 0.3rem;
    }
  }

  .field-limit-player p {
    margin: 0 1rem 0 0;
  }

  .field-limit-player button {
    background-color: #f29d35;
    border-radius: 15px;
    width: 4rem;
    font-size: 1rem;
    @media (max-width: 420px) {
      width: 2.5rem;
    }

    &:hover {
      background-color: transparent;
      color: white;
    }
  }

  .modal-header {
    border: none;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    background-color: #f29d35;
  }

  .modal-header button {
    position: absolute !important;
    margin: 2px 2px 0 0 !important;
    align-self: flex-end !important;
  }

  h5 {
    color: white;
    font-size: 2.5rem;
    justify-self: center;
  }

  .modal-content {
    border: none;
    background-color: #8b0000;
  }

  .modal-body {
    border: none;
    color: white;
  }

  .modal-footer {
    border: none;
  }

  .roles_game {
    width: 90%;
    height: 30rem;
    background-color: #8b0000;
    text-align: center;
    color: white;
    overflow-y: scroll;
  }

  .roles_game h1 {
    background-color: #f29d35;
  }

  .left {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 420px) {
      width: 100%;
      margin-top: 1rem;
    }
  }

  .right {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 420px) {
      width: 100%;
    }
  }

  .right button {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    @media (max-width: 420px) {
      margin-top: 1rem;
    }
  }
`;

export const GroupBtModal = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2rem;
    margin: 0 1rem 0 1rem;
  }

  button {
    display: flex !important ;
    justify-content: center !important;
    align-items: center !important;
    width: 5rem !important;
    height: 90% !important;
    font-size: 2rem !important;
    border-radius: 20px !important;
    background-color: #f29d35;

    &:hover {
      background-color: transparent;
      color: white;
    }
  }
`;

export const BodyModalS = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-around;
`;

export const TableS = styled.table`
  background-color: white;
  align-self: center;
  color: black;
  width: 15rem;
  border-color: black;
  border: solid;
  margin: 0 0 0.5rem 1rem;
  @media (max-width: 420px) {
    width: 10rem;
  }

  td {
    text-align: center;
    border-color: black;
    border: solid;
    cursor: pointer;
  }

  th {
    text-align: center;
  }
`;

export const TableBuyS = styled.table`
  background-color: white;
  color: black;
  width: 15rem;
  border-color: black;
  border: solid;
  margin: 0 0 0.5rem 0;
  @media (max-width: 420px) {
    width: 10rem;
  }

  td {
    text-align: center;
    border-color: black;
    border: solid;
    cursor: pointer;
  }

  th {
    text-align: center;
  }
`;

export const TableRaffle = styled.table`
  background-color: white;
  color: black;
  width: 15rem;
  border-color: black;
  border: solid;
  margin: 0.5rem;
  @media (max-width: 420px) {
    width: 20rem;
    height: 10rem;
  }

  td {
    text-align: center;
    border-color: black;
    border: solid;
    cursor: pointer;
  }

  td button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .checked {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: green;
  }

  th {
    text-align: center;
  }
`;

export const LeftModal = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  @media (max-width: 420px) {
    width: 11rem;
  }
`;

export const TextModalS = styled.p`
  font-size: 1.5rem;
  width: 100%;
  align-self: flex-start;

  @media (max-width: 420px) {
    font-size: inherit;
  }
`;

export const BadgePriceS = styled.span`
  background-color: #f29d35;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const Badge = styled.span`
  background-color: #f29d35;
  border-radius: 10px;
  width: 12rem;
  text-align: center;
  margin: 0 0 1rem 0;
  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const BadgeScore = styled.span`
  background-color: #f29d35;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const ResultModal = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const GroupS = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 50rem;
  margin: 1rem 0 0 0;
  padding: 1rem;
  @media (max-width: 420px) {
    background-color: #8b0000;
    width: 100%;
  }
`;

export const BallS = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.5rem;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ba69e;
`;

export const GroupBalls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 55rem;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const GroupNumber = styled.div`
  display: flex;
  margin-top: 0.5rem;
  border-radius: 20px 0 20px 0;
  justify-content: space-around;
  background-color: #8b0000;
  width: 100%;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
  }

  .big_ball {
    color: white;
    align-self: center;
    width: 10rem;
    height: 10rem;
    margin: 0.5rem;
    border-radius: 50%;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5ba69e;
  }
`;

export const GroupSessionS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardSessionS = styled.div`
  background-color: #8b0000;
  border-radius: 20px 0 20px 0;
  color: white;
  padding: 0.5rem;
  margin: 1rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: center;
    width: 8rem;
    background-color: #f29d35;
    padding: 0 0.5rem 0 0.5rem;
    border-radius: 20px;
  }
  h2 {
    align-self: center;
  }

  p {
    display: flex;
    flex-direction: row;
  }

  p div {
    align-self: center;
    width: 0.5rem;
    height: 0.5rem;
    color: transparent;
    background-color: green;
    border-radius: 50%;
    margin: 0 0.5rem 0 0.3rem;
  }

  h5 {
    color: white;
    font-size: 2.5rem;
    justify-self: center;
  }

  .modal-header {
    border: none;
    padding: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    background-color: #f29d35;
  }

  .modal-header button {
    width: 1rem !important;
    margin: 4px 4px 0 0 !important;
    padding: 0 !important;
    position: absolute !important;
    align-self: flex-end !important;
    background-color: transparent !important;
  }

  h5 {
    color: white !important;
    font-size: 2.5rem !important;
    justify-self: center !important;
  }

  .modal-content {
    border: none;
    background-color: #8b0000;
  }

  .modal-body {
    border: none;
    color: white;
  }

  .modal-footer {
    border: none;
  }
`;

export const Winner = styled.div`
  width: 30rem;
  border-radius: 20px 0 20px 0;
  margin: 2rem 0 8rem 0;
  padding: 1rem;
  background-color: #8b0000;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 420px) {
    width: 95%;
    height: 34rem;
    border-radius: 0;
    border-radius: 20px 0 20px 0;
  }

  h1{
    position:absolute;
    font-size:3rem;
    @media (max-width: 420px) {
      font-size:2.3rem;
    }
   
  }

  h1 img {
    width: 100px;
    @media (max-width: 420px) {
      width: 60px;
    }
  }

  button {
    width: 10rem;
    margin: 1rem 0 0 0;
    background-color: #f29d35;
    border-radius: 1rem;
    font-size: 1.5rem;
    padding: 0.2rem;

    &:hover {
      color: white;
      background-color: transparent;
    }
  }
`;

export const PhotoWinner = styled.div`
  width: 16rem;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  text-align: center;
  margin: 4rem 0 0 0;

  img {
    width: 16rem;
    height: 16rem;
    margin: 0;
    border-radius: 50%;
    border: 5px solid #f29d35;
    align-self: center;
  }

  span {
    width: 30rem;
    align-self: center;
    position: absolute;
    font-size: 2.5rem;
    margin: 14rem 0 0 0;
    background-color: #f29d35;
    padding: 0.2rem;

    @media (max-width: 420px) {
      width: 15rem;
      font-size: 2rem;
      border-radius: 1rem;
    }
  }
`;

export const Result = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0.2rem 0 0.2rem;
  background-color: #6a6873;
  padding: 0.5rem 0 0.5rem 0;
  border-color: black !important;
  border: 3px solid;
  text-align: center;

  p {
    width: 100%;
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const WinnerContainer = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;

  background-image: url("https://acegif.com/wp-content/gif/confetti-25.gif");

  @media (max-width: 420px) {
    height: 1600px;
    padding: 0;
    margin: 0;
  }
`;

export default ContainerFormS;
