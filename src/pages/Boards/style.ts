import styled from 'styled-components';

const BoardsBlock = styled.div`
width: 80%;
margin: 0 auto;
`


const BoardList = styled.ul`
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  gap: 15px;
  margin-top: 30px;

`
const CardName = styled.h5`
`
const BoardCard = styled.li`
  width: 410px;
  height: 120px;
  display: flex;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%)
  align-items: center;
  padding: 10px;
  gap: 20px;
  background-color: #B7EAF7;
  border-radius: 8px;
  transition: 0.2s linear;
  cursor: pointer;
`
const BoardDescription = styled.p`
height: 70%;
font-size: 14px;
background-color: white;
border-radius: 8px;
padding: 5px;
`
const EditImg = styled.img`
  width: 20px;

`
const BinImg = styled.img`
  width: 20px;
`
const KanbanImg = styled.img`
height: 70px;
margin-top: 10px;
`
const Images = styled.div`
display: flex;
gap: 10px;
`
const NameBlock = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
`
const CardBlock = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;
`

const AddBoardButton = styled(BoardCard)`
border: 1px dashed black;
cursor: pointer;
`
const AddBoardImg = styled.img`
width: 50px;
margin: 0 auto;
`
export { BoardsBlock, AddBoardImg, BoardList, AddBoardButton, BoardCard, EditImg, BinImg, KanbanImg, CardName, BoardDescription, Images, NameBlock, CardBlock };