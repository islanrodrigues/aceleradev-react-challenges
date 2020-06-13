import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src="https://www.kindpng.com/picc/m/34-349852_whatsapp-icons-png-stuck-out-tongue-winking-eye.png" alt="" />
              </div>

              <p className="user__name">
                Novo Usuário
                <span>{`@${"novoUsuario"}`}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input 
              type="text"
              value=""
              placeholder="Ex.: Fulano de Tal"
              onChange={() => {}}
            />

            <label>Usuário</label>
            <input 
              type="text"
              value=""
              placeholder="Ex.: fulano123"
              onChange={() => {}}
            />

            <label>E-mail</label>
            <input 
              type="email"
              value=""
              placeholder="Ex.: fulano@fulano.com"
              onChange={() => {}}
            />

            <label>URL da Imagem de Perfil</label>
            <input 
              type="text"
              placeholder="http://..."
              onChange={() => {}}
            /> 

            <button 
              type="button"
              onClick={() => {setSubmit(true)}}
            >
              Cadastrar
            </button>

          </div>
        </div>
      </section>

      {
        !!submit && 
        <SuccessMessage />
      }
    </>
  );
};

export default UserForm;
