import { CardLi, DivCondicao, DivContainer } from "./style"
import trash from "../../img/trash.png"


export const Card =({element,hendleDelet})=>{


    return(

        <DivContainer>
        <DivCondicao className={element.type ==="entrada"? "miniBtn": "testediv" }/>
      
        <CardLi>
            <div className="div__extato">
                <p>{element.description}</p>
                <span>R${element.type === "entrada"? element.value : `-${element.value }`}</span>
                <button>
                <img src={trash} alt="" onClick={()=> hendleDelet(element)}/>
                
                </button>           
            </div>
            <span>{element.type}</span>
            
        </CardLi>
    </DivContainer>

    )

}