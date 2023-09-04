import { styled } from "styled-components";

export const FriendPerson = styled.li`
    width: 400px;
    list-style: none;
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(227, 227, 227);
    gap: 10px;
    margin-bottom: 10px;
`
export const FriendsStatus = styled('span') (({ isOnline }) => {
    return {
        display: 'block',
        width: '17px',
        height: '17px',
        borderRadius: '50%',
        backgroundColor: isOnline ? 'green' : 'red',
        marginTop: '7px',
        marginRight: '20px',
        marginLeft: '50px',
    }
})
    
