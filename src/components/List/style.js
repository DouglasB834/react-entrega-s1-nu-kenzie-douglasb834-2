import styled from "styled-components";

export const TagUl = styled.ul`
width: 35rem;
padding: 1rem;
margin-bottom:2rem ;
border-radius: 5px;
overflow-y:auto ;
height: 500px;
margin: auto;


@media ( max-width: 720px){
    width: 22rem;   
}
@media ( max-width: 375px){
    width: 16rem;   
}
`

export const DivBtnList =styled.div`
background-color: var(--gray-1);
width: 100%;
margin-top: 3rem;
height: 50px;
display: flex;
justify-items: center;
justify-content: space-between;
align-items: center;
margin: 2rem auto;
border-radius: 5px;



div  .btnTodos{
    background-color: var(--color-primary);
    padding: .7rem .9rem;
    border-radius: 7px;
    cursor: pointer;
    color: var(--gray-1);
}

div .btnFilter{
    cursor: pointer;
    padding: .9rem;
    margin-left: 10px;
    border-radius: 5px;
}

div .btnFilter:hover{
    background-color:var(--gray-3) ;
    color: var(--gray-1);

}


`