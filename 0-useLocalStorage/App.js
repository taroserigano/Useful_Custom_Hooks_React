  import "./styles.css";
import React from 'react'; 
import useLocalStoraage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'
export default function App() {
  const [name, setName] = useLocalStoraage('name', '')
  useUpdateLogger(name) 
  
  return (
    <input 
    type="text" 
    value = {name}
    onChange={e => setName(e.target.value)}
    /> 
  );
}
