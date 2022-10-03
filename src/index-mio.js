import { Welcome } from './components/Welcome.js';
import {Tarjeta, BlogPost} from'./tarea/Tarea1.js';
import {MatchNombre, PasswordInput, ValidationInput} from'./tarea/Tarea2.js';
import {UncontrolledCheckbox, CheckboxList} from './tarea/Tarea3.js';

ReactDOM.render(<CheckboxList items={{
       uno: false,
       dos: true,
       tres: false,
     }}  />, document.getElementById('react-app'));

// ReactDOM.render(<UncontrolledCheckbox name="Acepto términos y condiciones" initialValue={true}  />, document.getElementById('react-app'));

// ReactDOM.render(<ValidationInput validation= {(value) => value.length >= 8}  />, document.getElementById('react-app'));

// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));
// ReactDOM.render(<Tarjeta nombre="Jose Basualdo" titulo="FullStack Developer" imagen="https://avatars.githubusercontent.com/u/68978572?v=4" />, document.getElementById('react-app'));
// ReactDOM.render(<BlogPost titulo="Ardillas!!" parrafos={`Hoy vi una ardilla.\n
// La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
// Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`} autor={{
//     nombre: "José Basualdo",
//     titulo: "FullStack Developer",
//     imagen: "https://avatars.githubusercontent.com/u/68978572?v=4"
//   }
// } />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
