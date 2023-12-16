import { App } from '@/app/App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app-root') as HTMLElement)

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
