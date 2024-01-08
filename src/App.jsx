import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Card from './components/Card'
import DisplayCounter from './components/DisplayCounter'
import Controls from './components/Controls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mx-auto my-5 py-5">
            <Card>
              <Header />
              <DisplayCounter />
              <Controls />
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
