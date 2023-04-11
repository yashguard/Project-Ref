import React, { useRef } from "react";

const Form = () => {
  let Fname = useRef();
  let Lastname = useRef();
  let gender = useRef();
  let field = useRef();

  const submitData = (e) => {
    e.preventDefault();
    alert(`<==============================> 
          First Name : ${Fname.current.value}
          Last Name : ${Lastname.current.value}
          Gender : ${gender.current.value}
          Field : ${field.current.value}`);
    Fname.current.value = "";
    Lastname.current.value = "";
    gender.current.value = "";
    field.current.value = "";
    Fname.current.focus();
  };
  return (
    <section>
      <form onSubmit={submitData}>
        Enter your First Name :{" "}
        <input ref={Fname} type="text" placeholder="Enter your First Name" />
        <br />
        Enter your Last Name :{" "}
        <input ref={Lastname} type="text" placeholder="Enter your Last Name" />
        Gender :{" "}
        <select ref={gender} className="gender" style={{ width: "120px" }}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Field :{" "}
        <select ref={field} className="role" style={{ marginBottom: "50px" }}>
          <option value="">Select</option>
          <option value="Front End Developer">Front End Developer</option>
          <option value="Back End Developer">Back End Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Flutter Developer">Flutter Developer</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <br />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </section>
  );
};

export default Form;
