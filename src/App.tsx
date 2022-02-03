import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const routes = [
  {
    path: '/A',
    component: lazy(() => import('./pages/A/index'))
  },
  {
    path: '/B',
    component: lazy(() => import('./pages/B/index'))
  }
]

export const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>wait...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.component} key={route.path} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}
