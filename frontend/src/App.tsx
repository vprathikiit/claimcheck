import { useEffect, useState } from "react";
import "./App.css";

interface HealthResponse {
  status: string;
  message: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data: HealthResponse) => setHealth(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>ClaimCheck</h1>
      <h2>Backend Connection Status</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {health && (
        <p style={{ color: "green" }}>
          {health.status} — {health.message}
        </p>
      )}
      {!health && !error && <p>Connecting to backend...</p>}
    </div>
  );
}

export default App;