import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
const UserContext = createContext({
  username: '',
  profileImage: '',
  setUsername: () => {},
  setProfileImage: () => {},
});

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Tomer Sagi');
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/2.jpg');

  return (
    <UserContext.Provider value={{ username, profileImage, setUsername, setProfileImage }}>
      {children}
    </UserContext.Provider>
  );
};
