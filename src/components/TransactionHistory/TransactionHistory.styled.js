import { styled } from "styled-components";

export const TransactionHistoryTable = styled.table`
    width: 100%;
    text-align: center;
    max-width: 700px;
    border-radius: 10px;
    font-weight: 600;
    margin-top: 35px;
    margin-bottom: 25px;
    margin: 40px;
    margin-top: 10px;
    padding-top: 15px ;

`

export const TableThead = styled.thead`
    padding: 20px;
    font-size: 25px;
    color: white;
    border: 2px solid red;
    background-color: rgba(35, 57, 255, 0.5);

     th {
  padding: 10px;
}
`
export const TableTbody = styled.tbody`
    padding: 20px;
    font-size: 20px;
    color: black;
    border: 2px solid #000;
    background-color: rgba(105, 231, 253, 0.5);

    
    td {
  padding: 10px;
}
`