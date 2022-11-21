import './App.css'
import Folder from './Folder';
import explorer from './data/Explorer'

function App() {
  return (
    <div>
      <Folder explorer = {explorer}/>
    </div>
  );
}

export default App;
