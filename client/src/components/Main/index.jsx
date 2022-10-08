import styles from "./styles.module.css";
import { useState } from "react";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		
	};

	const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [general, setGeneral] = useState('');
  const [sc, setSc] = useState('');
  const [obc, setObc] = useState('');
  const [st, setSt] = useState('');
  const [ebc, setEbc] = useState('');
  const [farmer, setFarmer] = useState('');
  const [student, setStudent] = useState('');
  const [buissnessman, setBuissnessman] = useState('');
  const [teacher, setTeacher] = useState('');

  const [other, setOther] = useState('');


  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
 // 👇️ access input values here
 console.log('number 👉️', number);
 console.log('age 👉️', age);
 console.log('income 👉️', income);
 console.log('genera 👉️', general);
 console.log('sc 👉️', sc);
 console.log('st 👉️', st);
 console.log('ebc 👉️', ebc);
 console.log('farmer 👉️', farmer);
 console.log('student 👉️', student);
 console.log('buissnessman 👉️', buissnessman);
 console.log('teacher 👉️', teacher);
 console.log('other 👉️', other);
 
 

 // 👇️ clear all input values in the form
 setNumber('');
 setAge('');
 setIncome('');
 setGeneral('');
 setSc('');
 setSt('');
 setEbc('');
 setIncome('');
};
	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Jan Suvidha Portal</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>User Details</h1>
						<input
							type="number"
							placeholder="phone number"
							name="number"
							onChange={event => setNumber(event.target.value)}
          value={number}
							required
							className={styles.input}
						/>
						<br />
						<input
							type="number"
							placeholder="Age"
							name="age"
							equired
							className={styles.input}
							onChange={event => setAge(event.target.value)}
							value={age}
						/>
						<br />
					<select className={styles.op}>
	<option value="null">Select  Caste </option>
  <option value="1" onChange={event => setGeneral(event.target.value)}>General</option>
  <option value="2" onChange={event => setSc(event.target.value)}>SC</option>
  <option value="3"onChange={event => setSt(event.target.value)}>ST</option>
  <option value="4"onChange={event => setObc(event.target.value)}>OBC</option>
  <option value="5"onChange={event => setEbc(event.target.value)}>EBC</option>
</select>
<br />

						<select className={styles.op}>
<option value="null">Select Occupation </option>
  <option value="farmer"onChange={event => setFarmer(event.target.value)}>Farmer</option>
  <option value="student" onChange={event => setStudent(event.target.value)}>Student</option>
  <option value="buissnessman"onChange={event => setBuissnessman(event.target.value)}>Buissnessman</option>
  <option value="teacher"onChange={event => setTeacher(event.target.value)}>Teacher  </option>
  <option value="Other"onChange={event => setOther(event.target.value)}>Other  </option>
  
</select>
<br />
<input
							type="number"
							placeholder="Income"
							name="income"
							onChange={event => setIncome(event.target.value)}
							value={income}
							required
							className={styles.input}
						/>
						<br />
						<div className="styles.op">
						<button type="submit" className={styles.green_btn}>
							Submit
						</button>
						</div>
		</form>
			</div>
			</div>
			</div>
			</div>

			</>
			
				
	);
};
export default Main;
