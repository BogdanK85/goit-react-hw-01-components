import { styled } from "styled-components";

export const StatisticsSection = styled.section`
    width: 500px;
    margin: 40px 30px;
    text-align: center;
    display: block;
    border-color: 1px solid rgb(80, 80, 80);
    border-radius: 7px;
        background-color: rgb(227, 227, 227);
`
export const StatisticsTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    color: black;
    padding-top: 15px;
`

export const StatisticsList = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    /* background-color: rgb(177, 217, 217); */
`

export const StatisticsListItem = styled.li`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    border-color: 8px solid rgb(80, 80, 80);
    border-radius: 7px;
`
export const StatisticsLabel = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: black;
`

export const StatisticsPercentage = styled.span`
    font-size: 28px;
    font-weight: 700;
    color: black;
    margin-top: 10px;
`