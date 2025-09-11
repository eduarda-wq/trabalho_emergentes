import axios from "axios";

export const API_URL = "http://localhost:3000"; // endereço do backend Node.js com Prisma

// cria instância do axios
export const api = axios.create({
  baseURL: API_URL,
});

// interceptor para adicionar token em TODAS as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- FUNÇÕES AUXILIARES ---

// login -> retorna dados do usuário + token
export async function login(email: string, senha: string) {
  try {
    const response = await api.post("/login", { email, senha});

    const data = response.data;

    if (!data.token) {
      throw new Error("Token não recebido do servidor");
    }

    // salva token no localStorage
    localStorage.setItem("token", data.token);

    // se o backend devolver também dados do usuário, você pode salvar:
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.erro || "Erro ao fazer login");
  }
}

// obter token
export function getToken() {
  return localStorage.getItem("token");
}

// logout
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// exemplo de chamada autenticada
export async function getProfile() {
  const response = await api.get("/profile"); // token já vai no header
  return response.data;
}
