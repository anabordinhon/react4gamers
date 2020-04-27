import React from 'react';

interface IProps{
  children: React.ReactNode;
}
export const ChestsContext = React.createContext({
  totalChests: 0,
  openedChests:{
    total:0,
    positions: []
  },
  updateOpenedChests:(position) => null
});

function ChestsProvider(props :IProps){
  const [chestsState, updateChestsState] = React.useState({
    totalChests: 2,
  openedChests:{
    total:0,
    positions: []
    },
    updateOpenedChests: (position) =>{
      updateChestsState((prevState) =>{
        return{
          totalChests: prevState.totalChests,
          openedChests:{
            total: prevState.openedChests.total + 1,
            positions:prevState.openedChests.positions.concat(position),
          },
          updateOpenedChests: prevState.updateOpenedChests,
        };
      })
    }
  });

  return(
    <ChestsContext.Provider value = {chestsState}>{props.children}</ChestsContext.Provider>
  )
}

export default ChestsProvider;