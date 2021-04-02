import styled from "styled-components";

const DetailsWrapper = styled.div`
   margin:70px;

   .edit-btn{
       background-color:#f7de00;
       color:black;
   }

   .delete-btn{
    background-color:#b30d0d;
    color:black;
   }

   .unapply-btn{
       font-size:19px;
       &:hover{
           font-size:20px;
       }
   }

   .apply-btn{
    background-color:#03b603;
   }
`
export {
    DetailsWrapper,
}