import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GithubProfileViewer_react/', // replace 'repo-name' with your GitHub repo name
  plugins: [react()],
})
