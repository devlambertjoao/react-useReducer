import { useReducer } from "react"
import { appReducer, APP_INITIAL_STATE } from "./appReducer"
import './index.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);

  const doSomeRequestWithErrorResponse = () => {
    dispatch({ type: "REQUEST_START" });
    setTimeout(() => {
      dispatch({ type: "REQUEST_ERROR" })
    }, 2000);
  }

  const doSomeRequestWithSuccessResponse = () => {
    dispatch({ type: "REQUEST_START" });
    setTimeout(() => {
      dispatch({ type: "REQUEST_END", payload: "Wow! I'm working" });
    }, 750);
  }

  return (
    <div className="container">
      <div className="modal-container">
        <button onClick={doSomeRequestWithErrorResponse}>Do Bad request</button>
        <button onClick={doSomeRequestWithSuccessResponse}>Do Successfully request</button>
        {state.hasError && <span>Whops... Something went wrong :(</span>}
        {state.isLoading && <span>Loading...</span>}
        {state.message && <span>{state.message}</span>}
      </div>
    </div>
  )
}

export default App
