import { useState } from "react";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {};

  return (
    <div className="container">
      <span>Log in</span>
      <form>
        <div>
          <label>Email</label>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Go</button>
      </form>
      <form>Dropdown</form>
    </div>
  );
}
