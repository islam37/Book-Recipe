
const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://recipe-book-server-woad-alpha.vercel.app";

export default API_BASE;
