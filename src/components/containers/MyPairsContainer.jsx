import React from "react";
import { EditPairsProvider } from "../views/MyPairs/context/EditPairsContext";
import MyPairs from "../views/MyPairs/MyPairs";

const MyPairsContainer = () => {
  return (
    <EditPairsProvider>
      <MyPairs />
    </EditPairsProvider>
  )
}

export default MyPairsContainer