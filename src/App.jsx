import "./App.css";

export default function App() {
  const greetings = "hello world";

  return (
    <div className="container">
      <form>
        <h2>Login form</h2>
        <h3>Spirituality World</h3>
        <input
          type="text,number,email"
          placeholder="phone number, username,or email"
          id="name"
        />
        <input type="password" placeholder="password" id="password" />
        <button>Log In</button>
        <div className="alternate">
          <p class="line">OR</p>
        </div>
        <div className="links">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqhCE1ZItBk2eXdpda7hUVibZjDbg_iVhUzQ1_xvmjQ&s"
            alt="Loading...."
          />
          <a href="https://www.facebook.com">Log in with Facebook</a>
        </div>
        <p class="setPassword">Forgot password?</p>
      </form>
      <div className="footer">
        <p>Don't have an account?</p>
        <a>Sign up.</a>
      </div>
    </div>
  );
}
