import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Card from './components/Card'
import DisplayCounter from './components/DisplayCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mx-auto my-5 py-5">
            <Card>
              <Header/>
              <DisplayCounter />
              <div className="d-flex gap-2 justify-content-center mb-5 mt-3">  
                <button className="btn btn-primary px-4">+1</button>
                <button className="btn btn-secondary px-4">-1</button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
