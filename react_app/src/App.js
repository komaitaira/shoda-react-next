import React, { useEffect, useState } from 'react';
import './App.css';

// function AlertMessage(props) {
//   const data = props.data;
//   const msg = JSON.stringify(data);

//   return <div className="alert alert-primary h5 text-primary">
//     <h5>{msg}</h5>
//     <hr />
//     <table className="table h6">
//       <tbody>
//         <tr><th>Name</th><td>{data.name}</td></tr>
//         <tr><th>Mail</th><td>{data.mail}</td></tr>
//         <tr><th>Age</th><td>{data.age}</td></tr>
//       </tbody>
//     </table>
//   </div>
// }


// function App() {
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const [age, setAge] = useState(0);
//   const [form, setForm] = useState({
//     name: "no name", mail: "no mail", age: 0
//   });

//   const doChangeName = (event) => {
//     setName(event.target.value);
//   }

//   const doChangeMail = (event) => {
//     setMail(event.target.value);
//   }
  
//   const doChangeAge = (event) => {
//     setAge(event.target.value);
//   }

//   const doSubmit = (event) => {
//     setForm({
//       name: name, mail: mail, age: age
//     })
//     event.preventDefault()
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage data={form} setData={setForm}/>
//         <form onSubmit={doSubmit}> 
//           <div className="form-group">
//             <label>Name:</label>
//             <input type="text" className="form-controll" onChange={ doChangeName }/>
//           </div>
//           <div className="form-group">
//             <label>Mail:</label>
//             <input type="text" className="form-controll" onChange={ doChangeMail }/>
//           </div>
//           <div className="form-group">
//             <label>Age:</label>
//             <input type="text" className="form-controll" onChange={ doChangeAge }/>
//           </div>
//           <input type="submit" className="btn btn-primary" value="Click"/>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


function AlertMessage(props) {
  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.msg}</h5>
    </div>
  )
}

function App() {
  const [val, setVal] = useState(0);
  const [msg, setMsg] = useState("set a number...");

  const doChange = (event) => {
    setVal(event.target.value);
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i <= val; i++) {
      total += i;
    }
    setMsg("total: " + total + ".");
  })

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg}/>
          <div className="form-group">
            <label>Input:</label>
            <input type="number" className="form-controll" onChange={ doChange }/>
          </div>
      </div>
    </div>
  );
}

export default App;
