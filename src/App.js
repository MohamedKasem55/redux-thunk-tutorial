import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector,useStore } from "react-redux";
import { useEffect } from 'react';
import { fetchUsers } from './store/actions';
import Card from './Card';
import { useState } from 'react';
function App() {
  let dispatch = useDispatch();
  const [users, setUsers] = useState([])
  let store = useStore()
  useEffect(() => {
    dispatch(fetchUsers())
    store.subscribe(()=>console.log(setUsers(store.getState().data)))
  }, [])
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"baseline" ,flexWrap:"wrap"}} > 
      {users.map(user=>(
        <Card key={user.id} user={user} />
      )
      )}
      </div>
    </div>
  );
}

export default App;
