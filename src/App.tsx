import { motion } from "framer-motion"
import './App.css'
import { useState } from "react"

function App() {
  const[x, setX] = useState(100);
  const[y, setY] = useState(100);
  const[r, setR] = useState(90);
  const[s, setS] = useState(1);

  function onMouseOver() {
    setX(x === 100 ? 0 : 100);
    setY(y === 100 ? 0 : 100);
    setR(r === 90 ? 0 : 90);
  }

  function onScroll() {
    setS(s * 1.001);
    setY(y + 10);
  }

  return (
   <div className="test-container" style={{height: "1000vh", overflow: "auto"}} >
    <p className="text-xl">ndsjkfnsdkjnf</p>
    <motion.div 
      onScroll={onScroll}
      style={{background:"#000", width:100, height: 100}}
      animate={{ scale: s, y:y }} />
    </div>
  )
}

export default App
