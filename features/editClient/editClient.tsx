import { useLocation } from "react-router";

export const  EditClient=() =>{
  const location = useLocation();
  const { id ,  name} = location.state || {};
  return (
    <div>
      <h1>Edit:  {name}</h1>
      <p>Product ID:  {id}</p>
    </div>
  )
}
