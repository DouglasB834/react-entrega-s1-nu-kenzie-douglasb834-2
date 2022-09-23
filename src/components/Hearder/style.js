import styled from "styled-components"

export const TagHearder   = styled.header`
width: 100%;
background-color:var(--gray-1) ;
box-shadow: 1px 1px 10px rgb(194 194 194 / 70%);

.container{
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 80px;
margin: 0 auto;
}

.container >h2{
  font-size: 1.8rem;
  font-weight: 800;
    color: var(--gray-4);
}
.container >h2 >span{
    color: var(--color-primary);
}

.container button{
 padding: 15px;
 background-color: var(--gray-2);
 color: var(--gray-3);
 border-radius: 5px;
 transition: .2s linear;
 cursor: pointer;
}

.container button:hover{
    background-color: var(--gray-3);
    color: var(--gray-1);

}


`