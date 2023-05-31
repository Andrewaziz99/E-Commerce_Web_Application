import "../Style/Register.css";
import { useState } from "react";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setconfPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, firstName, lastName, age, phone, gender })
      });
  
      if (response.ok) {
        console.log("Registered successful");
        window.location.href = "/";
      } else {
        console.log("Registered failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    if (password === confpassword) {
      const data = {
        email,
        password,
        firstName,
        lastName,
        age,
        phone,
        gender
      };
      const dataString = JSON.stringify(data);
      window.location.href = "/login";
    } else {
      alert("passwords doesn't match");
    }
  }
  return (
    <div className="bg-img">
      <div className="registerContent">
        <header>Register Form</header>
        <form action="http://localhost:3001/users" method="post" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h6>First name</h6>
            </div>
            <div className="col">
              <h6>Last name</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="field">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="First Name"
                  name="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="field">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Email</h6>
            </div>
            <div className="col">
              <h6>Phone number</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="field">
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="Email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="field">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Phone"
                  name="phone"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Password</h6>
            </div>
            <div className="col">
              <h6>Confirm password</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="field">
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="field">
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Confirm password"
                  onChange={(event) => setconfPassword(event.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Age</h6>
            </div>
            <div className="col">
              <h6>Gender</h6>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="field">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Age"
                  name="age"
                  onChange={(event) => setAge(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col inline">
                  <label className="radio-inline">
                    <input type="text" name="gender"></input>
                  </label>
                </div>
                {/* <div className="col inline">
                  <label className="radio-inline">
                    <input type="radio" name="gender" value="female"/>
                    Female
                  </label>
                </div> */}
              </div>
            </div>
          </div>
          <div className="field space">
            <input type="submit" value="Register Now" />
          </div>
        </form>
        <div className="signup space">
          Already have an account?
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;