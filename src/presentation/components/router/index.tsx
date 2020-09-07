import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

type Props = {
  makeExample: React.FC
}

const Router: React.FC<Props> = ({ makeExample }: Props) => {
  return (
    <BrowserRouter>
      <Route path="/example" exact component={makeExample}/>
    </BrowserRouter>
  )
}

export default Router
