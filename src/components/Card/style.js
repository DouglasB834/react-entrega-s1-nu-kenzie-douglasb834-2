import styled from "styled-components"

export const DivContainer = styled.div`
display: flex;
flex-wrap: wrap;

`

export const DivCondicao = styled.div`
    height: 109px;
    width: 3px;
    border-radius: 5px 0 0 5px ;

`

export const CardLi = styled.li`
    display: flex;
    gap: 2rem;
    width: 95%;
    height: 110px;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: var(--gray-1);
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
  
    :hover{
        box-shadow: 1px 1px 10px rgb(194 194 194 / 70%);
}


    .div__extato{
        width: 95%;
        /* max-width: 95%; */
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        
    }

    .div__extato button{
        cursor: pointer;
        margin-right: 1rem;
        padding: .1rem .3rem;
        transition: .2s linear;
        border-radius: 3px;
        border: 1px solid var(--gray-3);
        background-color: var(--gray-2);
    }
    .div__extato button:active{
        background-color: var(--color-primary);
    }

    .div__extato > div{
        width: 27%;
        display: flex;
        justify-content: space-between;

    }

    > span{
        width: 40%;
        text-align: start;
        margin-left: 1rem;
        transform: translateY(-10px);
    }

    @media (max-width: 600px) {
        width: 90%;
        /* margin: 0 auto; */
    
}

`
