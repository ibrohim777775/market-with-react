import Joi from 'joi-browser';
import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
export const useUser = () => {
  return useContext(UserContext);
}
const User = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    patronymic: '',
    region: '',
    addres: '',
    phone: null,
    secondPhone: null,
    email: '',

  })
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

  })
  function hello() {
    console.log('hello from user')
  }
  return (
    <UserContext.Provider value={{
      hello
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default User;

