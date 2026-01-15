
import heroBG from '../assets/hero-bg.jpg';
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
        <div className="container">
          <div className="hero-section">
            <img src={heroBG} alt="cacao" className="hero-bg" />
            <div className='bg-overlay'>
            <div className='mini-logo'>
              <img src="#" alt="logo" className="logo-hero"/>
            <p>Belizean Cacao</p>
            </div>
            <h1>The Spirit of the <br /> <i>jungle</i> in every <br /> bean.</h1>
            <p>join our collective of chocolate artisans and eco-traveleres. Explore
              the heritage of the Mayan Mountains
            </p>
            </div>
          </div>
          <div className="login-form">
            <h2>Welcome Back</h2>
            <p>SIGN IN</p>
            <p>Register</p>
            <form action="#">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                  <i className="bi bi-eye" onClick={togglePassword}></i>
                </div>
              </div>
              <div className="options">
                <div className="remember-me">
                  <input type="checkbox" id="remember-me" name="remember-me"/>
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" onClick={handleLogin}>Login</button>
              <div className="login-footer">
                <p>OR CONTINUE WITH</p>
                <div className="social-icons">
                  <a href="#"><i className="bi bi-google"></i></a>
                  <p>Google</p>
                  
                 </div>
              </div>
            </form>
          </div>
        </div>
    );
}


export default Login;