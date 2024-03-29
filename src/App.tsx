import Modal from "./components/Modal/Modal";
import { colors } from "./tokens/colors";
import { sizes } from "./tokens/sizes";
import { space } from "./tokens/space";


function App() {
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Modal  
      primaryColor={colors.blue[400]} 
      hoverColor={colors.blue[700]} 
      size={sizes.md} space={space.md} 
      sentence="하이요" 
      title="Text Modal" 
      subTitle="Modal"
      >
      </Modal>
    </div>
  )
}

export default App;
