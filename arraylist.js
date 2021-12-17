import React from 'react';


import{DropdownButton,Dropdown} from 'react-bootstrap';



     class Arraylist extends React.Component{
        myproduct={
            mysubproduct:[{
                
                "product":"sub requirement 1"
            },
        {
            "product":"subp requirement 2"
        },
        {
            "product":"sub requirement 3"
        
        
            }]
    
        }
        render(){
            return(
                <div>
                   
                    
                    <DropdownButton varient="success" title="main requirement">
                    {this.myproduct.mysubproduct.map(data=>(
                    <Dropdown.Item >{data.product}</Dropdown.Item>
                    ))}
       
                </DropdownButton>
                </div>
       
            );
        }
       }
       export default Arraylist;
       