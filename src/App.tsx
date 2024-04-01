import React from "react";
import ComboBox from "./components/ComboBox/ComboBox";
import { colors } from "./tokens/colors";

function App() {
  const items = [
    {name: "짜장면", value: true}, 
    {name: "햄버거", value: true}, 
    {name: "마라탕", value: false}, 
    {name: "순댓국", value: true}, 
    {name: "돈까스", value: true},
    {name: "카레 돈까스", value: true},
  ]




  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <ComboBox placeholder="placeholder" items={items} color={colors.blue}></ComboBox>
    </div>
  )
}

export default App;
