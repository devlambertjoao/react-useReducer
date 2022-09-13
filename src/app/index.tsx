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

  const fields = [
    {
      id: 1,
      title: "Name",
      placeholder: "Your Name",
      prop: "name"
    },
    {
      id: 2,
      title: "Email",
      placeholder: "your_email@email.com",
      prop: "email"
    },
  ]

  return (
    <div className="container">
      <div className="modal-container">
        <form className="form">
          {fields.map(field => {
            return (
              <label key={field.id} className="field-container">
                <span className="field-container__title">{field.title}</span>
                <input className="field-container__input" placeholder={field.placeholder} />
              </label>)
          })}
        </form>
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
