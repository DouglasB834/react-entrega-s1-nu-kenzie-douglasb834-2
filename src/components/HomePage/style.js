import styled  from "styled-components"


export const HomepageStyle = styled.div`
    display: flex;
    background-color: var(--gray-4);
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

.leyout{
    display: flex;
    flex-direction: column;
    width: 347px;
    color: var(--gray-1);
    justify-content: center;
    align-items: center;
}


.leyout > img{
    /* width: auto; */
    
}

.leyout >h2{
    font-size: 1.3rem;
    color: var(--gray-2);
}
.leyout >h2 >span{
    color: var(--color-primary);
}
.leyout h1{
    font-size: 2rem;
}


.leyout >span{}

.leyout .btnInicar{}

.leyout .btnIniciar > button{
    background-color: var(--color-primary);
    color: var(--gray-1);
    margin-top: 1rem;
    padding: 13px 20px;
    width: 241px;
    border-radius: 5px;
    cursor: pointer;
    
}
.leyout .btnIniciar > button:hover{
    background-color: var(--color-primary-2);
}

.figure{
    display: flex;
    width: 593px;
}



@media screen and (max-width: 740px){
    .container{
        flex-wrap: wrap;
    }
}

`

