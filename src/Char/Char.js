const char =(prop)=>{

    const style ={
        display:'inline-block', 
        padding:'16px', 
        textAlign:'center', 
        margin:'16px',
        border:'1px solid black',
        cursor:'pointer'

    }

    return(
        <div style={style}
            onClick={prop.clicked}>
            {prop.character}
        </div>
    )
};

export default char;