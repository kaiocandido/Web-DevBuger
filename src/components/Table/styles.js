import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: black;
    border-radius: 20px;
`
export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    background-color: black;
    color: white;
    border-bottom: 1px solid black;

    &:last-child{
        border-top-right-radius: 20px;
    }

    &:first-child{
        border-top-left-radius: 20px;
    }
`
export const Td = styled.td`
    padding: 16px;
    background-color: white;
    color: black;
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody`

`