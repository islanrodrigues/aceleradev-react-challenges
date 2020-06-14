import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import { createUser } from '../../services/UserService';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('Fulano de Tal');
  const [username, setUsername] = useState('fulano123');
  const [email, setEmail] = useState('fulano@fulano.com');
  const [avatar, setAvatar] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSetName = ({ target }) => {
    const { value } = target;

    setName(value);
  };

  const handleSetAvatar = ({ target }) => {
    const { value } = target;

    setAvatar(value);
  };

  const handleSetUserName = ({ target}) => {
    const { value } = target;

    setUsername(value);
  };

  const handleSetEmail = ({ target}) => {
    const { value } = target;

    setEmail(value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const payload = JSON.stringify({ name, avatar, username, email });

    createUser(payload).then(() => setSubmit(true));
  };

  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {
                  avatar ? 
                    <img src={avatar} alt="" />
                  : 
                    <img src="https://www.kindpng.com/picc/m/34-349852_whatsapp-icons-png-stuck-out-tongue-winking-eye.png" alt="" />
                }
                
              </div>

              <p className="user__name">
                {name}
                <span>{`@${username}`}</span>
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
              value={name}
              placeholder="Ex.: Fulano de Tal"
              onChange={handleSetName}
            />

            <label>Usuário</label>
            <input 
              type="text"
              value={username}
              placeholder="Ex.: fulano123"
              onChange={handleSetUserName}
            />

            <label>E-mail</label>
            <input 
              type="email"
              value={email}
              placeholder="Ex.: fulano@fulano.com"
              onChange={handleSetEmail}
            />

            <label>URL da Imagem de Perfil</label>
            <input 
              type="text"
              placeholder="http://..."
              onChange={handleSetAvatar}
            /> 

            <button 
              type="button"
              onClick={handleAddUser}
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
