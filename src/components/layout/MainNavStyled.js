import styled from 'styled-components'

export const MainNavStyled = styled.div`
    background-color: burlywood;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    h1{
        color: brown;
        margin: 0;
    }

    ul {
        display: flex;
        list-style: none;

        li {
            margin-left: 30px;

            a {
                text-decoration: none;
            }
        }
    }

`