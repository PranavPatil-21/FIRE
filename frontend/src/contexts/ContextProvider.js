import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [Username, setUsername] = useState('');
  const [index, setIndex] = useState(0);
  const [trackactive, settrackactive] = useState(false);
  const [Navbarview, setNavbarview] = useState(1);
  const [sidebarData, setsidebarData] = useState([]);
  const [TrackNameMain, setTrackNameMain] = useState([]);
  const [TrackYearMain, setTrackYearMain] = useState([]);
  const [chatopen, setchatopen] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings, Username, setUsername, index, setIndex, trackactive, settrackactive, sidebarData, setsidebarData,TrackNameMain, setTrackNameMain,TrackYearMain, setTrackYearMain,Navbarview,setNavbarview,chatopen,setchatopen }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);