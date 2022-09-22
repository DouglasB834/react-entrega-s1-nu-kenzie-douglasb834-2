import { CardLi, DivCondicao, DivContainer } from "./style"


export const Card =({children})=>{
    return(

    <DivContainer>

        <DivCondicao/>

        <CardLi>
        {children}
        </CardLi>

    </DivContainer>

    )

}