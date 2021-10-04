import React from 'react'
import styled from 'styled-components'

const Form = ({onChange}) => {

   const Container = styled.div `
      width: 90%;
      border: 2px double #000000;
      border-radius: 25px;
      padding: 15px 0 15px 0;
      margin: 0 5% 0 5%;      
   `

   const Wrapper = styled.div `
      display: flex;
      justify-content: center;
      text-align: right;
   `

   const WrapperForm = styled.form `
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
   `

   const Input = styled.input `
      color: #000;
      padding: 5px;
      margin-left: 2px;
      cursor: text;
      background-color: #fafafa;
      border: 1px solid #000;
      border-radius: 5px;
   `

   const Label = styled.label `
      font-size: 1.2rem;
      color: #000;
      margin: 2px;
   `
   return (
      <Container>
         <Wrapper>
            <WrapperForm>
               <Label htmlFor="title">Title:
                  <Input type="text" name="title" id="title" onChange={onChange} />
               </Label>
               <Label htmlFor="description">Description:
                  <Input type="text" name="description" id="description" onChange={onChange} />
               </Label>
            </WrapperForm>
         </Wrapper>
      </Container>
   )
}

export default Form
