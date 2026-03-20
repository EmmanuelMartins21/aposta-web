import { useState } from "react";
import api from "../services/api";
import type {ApostasResponse}  from "../types/aposta";
import "./home.css";

 async function login() {
  const response = await api.post("/api/v1/login", {
    username: import.meta.env.VITE_USERNAME || "admin",
    password: import.meta.env.VITE_PASSWORD || "123",
  });
   localStorage.setItem("token", response.data.token);
}

export default function Home() {
  const [data, setData] = useState<ApostasResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const gerar = async () => {
    setLoading(true);

    try {
      await login();
      const response = await api.get("/api/v1/apostas");
      setData(response.data);
    } catch {
      alert("Erro ao gerar aposta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Gerador de Apostas</h1>

        <button className="button" onClick={gerar} disabled={loading}>
          {loading ? "Gerando..." : "Gerar Apostas"}
        </button>

        {data && (
          <div className="result">
            <div className="aposta">
              <b>Aposta 1:</b> {data.aposta1.join(", ")}
            </div>
            <div className="aposta">
              <b>Aposta 2:</b> {data.aposta2.join(", ")}
            </div>
            <div className="aposta">
              <b>Aposta 3:</b> {data.aposta3.join(", ")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}