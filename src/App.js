
import { useState, useEffect } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import './Header.css'



import FormCreateNote from './components/FormCreateNote'
import FormUpdateNote from './components/FormUpdateNote'
import ShowTogglable  from './components/showTogglable';
import TableNotes  from './components/TableNotes';

import CardLoginRegister from './components/CardLoginRegister'
import CardUser from './components/CardUser';

import HeaderApp from './Client/Header'

import noteServices from './services/noteServices'



function App() {
  const [user,setUser] = useState(null)
  const [notas , setNotas] = useState()
  const [notaSelect, setNotaSelect] = useState()
  const [layout , setLayout] = useState()
  const [punteroLayout , setPunteroLayout] = useState(1)
 
  
  const query = async () => {
    const data = await noteServices.getAll()
    console.log(data)
    setNotas(data)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const userL = JSON.parse(loggedUserJSON)
      setUser(userL)
      setLayout('home')
      setPunteroLayout(1)
      console.log(userL)
      noteServices.setToken(userL.data.token)
      query()
      
    }else{
      setPunteroLayout(2)
      setLayout('sesion')
    }
  }, [])


  return (
    <div className="container-fluid  vh-100 overflow-hidden" id="App">

     <HeaderApp 
      setPunteroLayout={(e) => setPunteroLayout(e)}
      punteroLayout={punteroLayout}
      setLayout={(e)=> setLayout(e)}
      layout={layout}

      />

     {
       layout === 'sesion'
       ?
       <div>
        {
          user
         ?<CardUser setUser={e => setUser(e)} user={user}/>
         :<CardLoginRegister 
       setUser={setUser}
       setNote={setNotas}/>
        }
       </div>
       
       :null
     }

    

    {
      layout !== 'coments'
      ?null
      :<ShowTogglable 
     buttomLaberOpen={<span className="bi bi-arrow-up-right-circle"/>}
     buttomLaberClose={<span className="bi bi-box-arrow-in-left"/>}
     titleComponent="Create Note"
     >
       <FormCreateNote />
     </ShowTogglable>
    }

    
      
    {!user || !notas || layout !== 'home'
    ? null
    :  <TableNotes handelSetLayout={(e) => setLayout(e)} handelSetNote={(newNote) => setNotaSelect(newNote)} handelQuery={query} notas={notas}/>
    }
    {
      !notaSelect || layout !== 'coments'
      ?null
      :<FormUpdateNote notaUpdate={notaSelect} />
    }
    </div>
  );
}

export default App;
