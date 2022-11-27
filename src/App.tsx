import AkutagawaApp from './components/AkutagawaApp'
import {UserProvider} from "./contexts/UserContext.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AkutagawaApp />
      </UserProvider>
    </div>
  );
}

export default App;
