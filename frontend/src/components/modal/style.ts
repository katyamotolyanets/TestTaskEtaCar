import styled from "styled-components";

type ConfirmModalProps = {
    background: string,
    borderColor: string,
    borderThickness: string,
}

export const StyledConfirmModal = styled.div<ConfirmModalProps>`
  position: fixed;
  padding: 1%;
  top: 30vh;
  left: 35vw;
  border-radius: 1em;
  background-color: ${props => props.background || '#fff'};
  border: ${props => props.borderThickness ? `${props.borderThickness} solid ${props.borderColor}` : 'none'};
  max-height: 50%;
  max-width: 30%;
  form {
    display: flex;
    flex-direction: column;
    h2 {
      margin: 0 3%;
      padding: 3% 0;
      text-align: center;
    }
    .form-button-group {
      display: flex;
      justify-content: center;
      button, input {
        margin: 0 5%;
      }
    }
  }
`

export const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .modal__content {
    padding: 2% 5%;
    border-radius: 1em;
    background-color: #fff;
    max-height: 50%;
    max-width: 40%;
    overflow-y: auto;
    table {
      width: 100%;
      overflow-y: auto;
      td {
        width: 50%;
        font-size: 2vmin;
      }
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      margin: 5%;
      button {
        white-space: nowrap;
        margin-left: 2%;
        max-width: 100%;
      }
    }
  }
  h2 {
    text-align: center;
    font-size: 3vmin;
    margin: 5% 0;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  div {
    margin: 5% 0;
  }
  @media screen and (max-width: 1800px) {
    .modal__content {
      max-width: 50%;
    }
  }
  @media screen and (max-width: 1500px) {
    .modal__content {
      max-width: 55%;
    }
  }
  @media screen and (max-width: 1350px) {
    .modal__content {
      max-width: 60%;
    }
  }
  @media screen and (max-width: 1150px) {
    .modal__content {
      max-width: 65%;
    }
  }
  @media screen and (max-width: 950px) {
    .modal__content {
      max-width: 70%;
    }
  }
`