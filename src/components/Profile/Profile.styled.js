import { styled } from "styled-components";


export const ProfileDiv = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 17px;
    border-color: 3px solid red;
    margin: 40px 30px;
`
export const ProfileDescription = styled.div`
    width: 100%;
    display: block;
    text-aline: center;
    margin: auto;
    background-color: rgb(227, 227, 227);
`
export const ProfileImage = styled.img`
    width: 67%;
    display: block;
    margin: auto;
    margin-top: 20px;
    border-radius: 50%;
    background-color: rgba(170, 200, 220, 0.5);
`
export const ProfileUserName = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: black;
`

export const ProfileTag = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: rgba(77, 77, 77, 0.5);
`

export const ProfileLocation = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: rgba(77, 77, 77, 0.5);
    margin-bottom: 7px;
    padding-bottom: 10px;
`

export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    width:100%;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    gap: 50px;
    background-color: rgb(177, 217, 217);
`
export const StaticListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
`

export const StaticLabel = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: black;
`

export const StaticQuantity = styled.span`
    font-size: 28px;
    font-weight: 700;
    color: black;
`