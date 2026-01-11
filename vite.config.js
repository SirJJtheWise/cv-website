import { defineConfig } from 'vite'

export default defineConfig({
    // Base configuration for GitHub Pages deployment
    // If your repo is https://github.com/user/repo, set this to '/repo/'
    // For now, using './' allows relative paths which usually works fine
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                project: 'project.html'
            }
        }
    }
})
