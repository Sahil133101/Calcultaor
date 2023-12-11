
import styles from "./App.module.css"
import Display from './Components/Display.jsx';
import ButtonContainer from "./Components/ButtonContainer.jsx";


export default function App(){
  return(
    <>
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer> </ButtonContainer>
  
      

       
      </div>
      </>

  );
}