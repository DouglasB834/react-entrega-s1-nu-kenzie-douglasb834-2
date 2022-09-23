import styled from "styled-components";

export const TagDiv = styled.div`

display: flex;
    height: 80vh;
    width: 40%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

form{
    width: 100%;
    height: 351px;
    max-width: 363px;
    border: solid 2px var(--gray-2);
    margin-top: 2rem;    
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5px;
}

.desc{
    display: flex;
    flex-direction: column;
    gap: .9rem;
    padding: 1rem;
    width: 90%;
    margin: 0 auto;
}
.desc label{
    text-align: start;
    font-size: .7rem;
}

.desc input ,select{
    width: 90%;
    outline: none;
    border: none;
    padding:  1rem;
    border-radius: 5px;
    outline: none;
    background-color: var(--gray-1);   
}

select option{
    background-color: var(--gray-2);
}

.ul__valor{
    display: flex;
    align-items: center;
    width: 50%;
    background-color: var(--gray-1);
}

.ul__valor >div {
    display: flex;
    background-color: var(--gray-1);
    height: 40px;
}

.div__box_valores{
    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 1rem;
}

.div__box_valores .values{
    width: 90%;
    margin-top: 1rem;
}

.div__box_valores .values p{
    margin-bottom: 6px;
    text-align: start;
    font-size: .9rem;
}

.div__box_valores .values input{
    width :100px;
    height: 40px;
    border: none;
    outline: none;
    background-color: var(--gray-1);
    border-radius: 5px;
    transition: .2 linear;
}
.values input:focus{
    border: solid  1px var(--gray-4);

}

button{
    margin-top: 2.5rem;
    padding: 14px 20px;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: var(--gray-1);
    transition: .2s linear;
    cursor: pointer;
    
}
button:hover{
    background-color: var(--color-primary-2);
}
button:active{
    background-color: var(--gray-3);
    color: var(--gray-1);
}

@media (max-width: 1007px) {
    width: 85%;
    max-width: 90%;
    padding: none;
    
}

/* @media (max-width: 600px) {
    height: 80vh;
    width: 90%;
    
} */

`

