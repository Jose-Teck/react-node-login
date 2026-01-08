
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

  function Login(){
    return (
        <div>
        <h2>Login</h2>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}


export default Login;