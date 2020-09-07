
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'

import '@/presentation/styles/global.scss'
import makeExample from '@/main/factories/pages/example/example-factory'

ReactDOM.render(
  <Router makeExample={makeExample}/>,
  document.getElementById('main')
)
