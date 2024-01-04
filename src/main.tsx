/* eslint-disable perfectionist/sort-imports */
import '@/shared/theme/styles/reset.css'
import '@/shared/theme/styles/global.css'

import { App } from '@/app/App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app-root') as HTMLElement)

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
