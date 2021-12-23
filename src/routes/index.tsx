import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { lazyImport } from 'utils/lazy-import'
const { HomePage } = lazyImport(() => import('pages/HomePage'), 'HomePage')

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
