import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionLobby from "./components/SessionLobby";
import "./index.css";

function Root() {
  const [wsUrl, setWsUrl] = useState<string | null>(null);

  if (!wsUrl) return <SessionLobby onConnect={setWsUrl} />;
  return <App wsUrl={wsUrl} onDisconnect={() => setWsUrl(null)} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
