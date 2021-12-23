import { Suspense } from 'react'

import { Spinner } from 'components'
import { AppRoutes } from 'routes'

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AppRoutes />
    </Suspense>
  )
}
