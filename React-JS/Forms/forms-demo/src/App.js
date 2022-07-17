import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const infoRef = useRef();

  const [values, setValues] = useState({
    username: '',
    password: '',
    gender: 'm',
    age: '',
    userType: 'individual',
    tac: false,
    bio: '',
    eik: '',
    egn: ''

  });

  useEffect(() => {
    if (values.username && values.age) {
      infoRef.current.value = `${values.username} - ${values.age}`
    }
  }, [values.username, values.age])



  useEffect(() => {
    if (values.username && values.age) {
      setValues(oldValues => ({
        ...oldValues,
        bio: `${values.username} - ${values.age}`,
      }))
    }
  }, [values.username, values.age])


  const onChangeHandler = (e) => {
    setValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="App">
      <header className="App-header">

        <span><h4>React Forms</h4></span>

        <form >
          <div>
            <label htmlFor="username">username: </label>
            <input type="text" id="username" name='username' value={values.username} onChange={onChangeHandler} />
          </div>

          <div>
            <label htmlFor="password">password: </label>
            <input type="password" id="password" name='password' value={values.password} onChange={onChangeHandler} />
          </div>

          <div>
            <label htmlFor="gender">gender: </label>
            <select value={values.gender} name="gender" id="gender" onChange={onChangeHandler}>
              <option value="f">female</option>
              <option value="m">male</option>
            </select>
          </div>

          <div>
            <label htmlFor="age">age: </label>
            <input type="number" id='age' name='age' value={values.age} onChange={onChangeHandler} />
          </div>

          <div>
            <label htmlFor="bio">bio: </label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={onChangeHandler} />
          </div>

          <div>
            <label htmlFor="individual-user">individual:</label>
            <input type="radio" id='individual-user' name='userType' checked={values.userType === 'individual'} value='individual' onChange={onChangeHandler} />
            <label htmlFor="corporate-user">  corporate:</label>
            <input type="radio" id='corporate-user' name='userType' checked={values.userType === 'corporate'} value='corporate' onChange={onChangeHandler} />
          </div>
          <div>
            <label htmlFor="identifier">{values.userType === 'corporate' ? 'eik ' : 'egn '}</label>

            {values.userType === 'corporate'
              ? <input type="text" name="eik" id="identifier" value={values.eik} onChange={onChangeHandler} />
              : <input type="text" name="egn" id="identifier" value={values.egn} onChange={onChangeHandler} />
            }
          </div>
          <div>
            <label htmlFor="tac">TaC: </label>
            <input type="checkbox" id='tac' name='tac' checked={values.tac} onChange={onChangeHandler} />
          </div>


          <div><button onClick={onSubmitHandler} disabled={!values.tac}>Submit me</button></div>
        </form>

        <div>
          <label htmlFor="uncontrolled">uncontrolled input </label>
          <input type="text" id="uncontrolled" ref={infoRef} />
        </div>

      </header>
    </div>
  );
}

export default App;
