import './App.css';
import "semantic-ui-css/semantic.min.css";
import { useDispatch,useSelector } from "react-redux";
import {increment,decrement} from "./store/actions/action"
import {Button} from "semantic-ui-react"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="bttnn">
      <h1 className="divv">Counter : {counter}</h1>
      <br />
      <Button color="blue" className="bttnn" onClick={()=>dispatch(increment(1))}>+1</Button>
      <Button color="grey" className="bttnn" onClick={()=>dispatch(decrement(1))}>-1</Button>
      <Button color="blue" className="bttnn" onClick={()=>dispatch(increment(2))}>+2</Button>
    </div>
  );
}

export default App;
