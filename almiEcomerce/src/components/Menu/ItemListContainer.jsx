
  
    export const GreetingTitle = ()=> {
    return (
    <div style={{margin: "5vh",color:"lightblue"}}>
        <h2 >Arboles autoctonos Córdoba</h2>
    </div>
      
    )
} 


export const Greeting = (props) => {
    return (
    <div style={{margin: "5vh",color:"grey"}}>
        <p>{props.name}</p>
    </div>
      
    )
}

export default Greeting
