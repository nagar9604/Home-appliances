// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

//https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    middlewareMode: false, // important: false for normal mode
    setupMiddlewares(middlewares, devServer) {
      middlewares.use(
        history({
          verbose: true,
        })
      )
      return middlewares
    }
  }
})

