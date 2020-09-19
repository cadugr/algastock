import React, { useState, useEffect } from 'react'
import './TestComponent.css'

function TestComponent (props: {name: string}) {
  const [age, setAge] = useState(21)

  useEffect(() => {
    console.log('Component was created')
  }, []) //Só é executado após a criação do componente

  //A diferença de um método de atualização do ciclo de vida de um componente funcional para um componente de classe 
  //é que no funcional o método é executado uma vez sempre namontagem do componente 
  useEffect(() => {
    console.log('Age was updated to: ' + age)
  }, [age])
  
  return <div className="TestComponent">
      Olá { props.name }, { age }
      <button onClick={() => {
          setAge(age + 1)
      }}>
          +
      </button>
  </div>
}

export default TestComponent