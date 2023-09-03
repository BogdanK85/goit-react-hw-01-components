import { styled } from "styled-components";

export const online = 'online';
export const offline = 'offline';

export const FriendList = styled.ul`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px
    gap: 20px;

.online{
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7px;
    margin-right: 20px;
    margin-left: 50px;

    }

.offline{
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: red;
    margin-top: 7px;
    margin-right: 20px;
    margin-left: 50px;
    }
`

export const FriendsListItem = styled.li`
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

export const FriendsListAvatar = styled.img`
    margin-right: 55px;
`

export const FriendsName = styled.p`
    font-weight: 700;
    color: black;
`


