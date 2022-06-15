import {React, useState} from 'react';


const ShowTogglable = ({children , buttomLaberOpen, buttomLaberClose , titleComponent}) => {
    const [show,setShow] =useState(false);
    
               if(show === false){
                   if(!buttomLaberOpen){
                        return null
                   }
                   return(
                    <div>
                    <button onClick={() => setShow(!show)} className="btn btn-success">{buttomLaberOpen}</button>
                    </div>   
                    )
                }else{
                    return(
                <div className="card">
                <div className="card-header text-center">
                <button onClick={() => setShow(!show)} className="btn btn-danger float-start">{buttomLaberClose}</button>
                <h2>{titleComponent}</h2>
                </div>
                <div className="card-body">
                {children}
                </div>
                </div>)}
            
}

export default ShowTogglable;
