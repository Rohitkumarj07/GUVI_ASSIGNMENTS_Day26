export default  function ContentCard (data={}){
console.log(data.data.name);
    return (
        <>
        
      
        
       
               
                    <div className="col-sm-12 col-lg-3">
        
           
        <div className="card" >
<h3>{data.data.name}</h3>
  <div className="card-body">
    <img src={data.data.image} alt=""  className="cardimage"/> <img />
    <h5 className="card-title">{data.data.name}</h5>
    <p className="card-text">{data.data.description}</p>
    <a href="#" className="btn btn-primary">Read</a>
  </div>


</div>
</div>
 
            
            </>
    )
    
    
    }