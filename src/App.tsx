import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <Routes>
      <Route path="/" element={<Index dark={dark} setDark={setDark} />} />
      <Route path="/about" element={<About dark={dark} setDark={setDark} />} />
      <Route path="/blogs" element={<Blogs dark={dark} setDark={setDark} />} />
      <Route path="/blogs/:slug" element={<BlogPost dark={dark} setDark={setDark} />} />
    </Routes>
  );
}
