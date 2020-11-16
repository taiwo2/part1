import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
})
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const Hello=(props) =>{
//   return (
//     <div>
//       <p>grettings {props.name}, Your {props.age}</p>
//     </div>
//   )
// }
// const Footer=() =>{
//   return (
//     <div>
//       Taiwo's link here <a href="#waliyy">T.waliy</a>
//     </div>
//   )
// }
// const coumt= (props) =>{
//  const [counter,setCounter]=setState(0);
//  setTimeout( ()=>(
//    setCounter(counter +1),1000);
// ;

  const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const App = (props) => {
  const [notes,setNote]= useState(props.notes)

  const addNote=(event) => {
    event.preventdefault()
    console.log('button clicked',event.target)
  } 
  const [newNote,setNewNote]=useState('a new note')
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
    setNote(event.target.value)
  }
  const Note=({note,toggleImportance}) =>{
    const label=note.important ? 'make not important' : 'make important'
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note => 
          <li key={note.id}>
            {note.content}
            <button onclick={toggleImportance}>{label}</button>
          </li>)} 
      </ul>
      <form onSubmit={addNote}>
      <input value={newNote}
      onChange={handleNoteChange} />
        <button type="submit">save</button> 
      </form>
    </div>
  )
}
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

ReactDOM.render(
  // <React.StrictMode>
    <App notes={notes} />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
