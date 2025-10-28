import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ GitHub Pages용 base 경로 지정
export default defineConfig({
  plugins: [react()],
  base: "/port25/", // ⚠️ GitHub repo 이름과 정확히 동일
});
