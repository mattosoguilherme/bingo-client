import styled from "styled-components";

const FormS = styled.form`
  background-color: #8b0000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  width: 30rem;
  padding: 2rem;
  border-radius: 20px 0 20px 0px;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width: 900px) {
    width: 23rem;
    margin-top: 1rem;
    border: none;
    box-shadow: none;
  }
  label {
    color: white;
    font-size: 1.3rem;
  }
  h1 {
    font-size: 3rem;
    align-self: center;
    color: white;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    margin-bottom: 2rem;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    color: white;
    border-color: white;
    ::-webkit-input-placeholder {
      color: white;
      font-size: 1.3rem;
    }
  }

  img {
    display: flex;
    position: relative;
    align-self: end;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    margin-top: 0.7rem;
    font-size: 1.2rem;
  }

  #div-button {
    display: flex;
    justify-content: center;
  }

  a {
    color: white;

    &:hover {
      color: #a6122d;
    }
  }
`;

export const CheckPass = styled.div`
  display: flex;
  width: 100%;

  align-items: center;

  input {
    margin: 0;
    width: 1.3rem;
    margin-left: 2rem;
  }
  span {
    color: white;
  }
`;

export const DivPass = styled.div`
  display: flex;
  flex-direction: row-reverse;

  button {
    position: absolute;
    border: none;
    background-color: transparent;
    align-self: center;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
  }
`;

export const ButtonS = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #f29d35;
  align-items: center;
  padding: 0.2rem;
  width: 7rem;
  border-radius: 20px 0 20px 0px;
  text-align: center;

  &:hover {
    color: white;
    background-color: transparent;
  }
`;

export const GroupButtonS = styled.div`
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;

  button {
    width: 8rem !important;
    border-radius: 20px 0 20px 0px !important;
    text-align: center !important;
    background-color: #f29d35 !important;

    &:hover {
      color: white !important;
      background-color: transparent !important;
    }
  }
`;

export const ProfileS = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 50%;
  background-color: #8b0000;
  border-radius: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 415px) {
    width: 100%;
    border-radius: none;
    border: none;
    border-width: none;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 0 20px 20px 20px;
    margin-bottom: 1rem;
    border: solid;
    border-width: 0.5rem;
    border-color: #f29d35;
  }

  input {
    background-color: #f29d35;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0 20px 20px 20px;
    padding-left: 1rem;
    width: 70%;
    align-self: center;
  }

  span {
    width: 12rem;
    align-self: center;
    border-radius: 0 20px 20px 20px;
    background-color: #5ba69e;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
  }
`;

export const GroupBtProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    font-size: 1.2rem;
    background-color: #d92a1a;
    margin: 1rem;
    width: 9rem;
    height: 2rem;
    border-radius: 0 20px 20px 20px;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
`;

export const DivRaffle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
  }

  button {
    align-self: center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 0 0.5rem 0 0;
  }
`;

export const Loading = styled.img`
  width: 30rem;
  height: 30rem;
  align-self: center;
  @media (max-width: 420px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const TextLoading = styled.h1`
  align-self: center;
  color: #f29d35;
  margin: 2rem 0 2rem 0;
`;

export const BuyDiv = styled.div`
  background-color: #8b0000;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 30rem;
  height: 27rem;
  border-radius:20px;
  text-align:center;

  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
    border-radius:0;
  }

  footer {
    display: flex;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0 0 0;
    justify-content: space-around;

    button {
    width: 8rem !important;
    border-radius: 20px 0 20px 0px !important;
    text-align: center !important;
    background-color: #f29d35 !important;

    &:hover {
      color: white !important;
      background-color: transparent !important;
    }
  }
  }

  h1 {
    width: 100%;
    background-color: #f29d35;
    text-align: center;
    border-radius: 20px 20px 0 0;
  }
`;

export default FormS;
