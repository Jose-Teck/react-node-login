
const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@test.com",
        password: "1234",
      }),
    });
  
    const data = await res.json();
    console.log(data);
  };
  function togglePassword(){
    const passwordInput = document.querySelector('input[type="password"]');
    const icon = document.querySelector('.bi-eye');
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    }
  }
  function Login(){
    return (
        <div className="login-container">
        <h2>Login</h2>
        <div className="input"><input placeholder="Username" required />
        <i className="bi-person"></i>
        </div>
        <div className="input"><input placeholder="Password" type="password"/>
        <i className=" bi-eye"></i></div>
        <div className="btns"><button onClick={handleLogin}>Login</button>
        <button>Sign Up?</button></div>
      </div>
    );
}


export default Login;