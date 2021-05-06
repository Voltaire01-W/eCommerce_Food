import styled from 'styled-components';

export const CartContainer = styled.div`
* 
    padding: 0;
    margin: 0;
  
  
  .Cart 
    text-align: left;
    width: 100%;
    height: 100vh;
    background-image: url(/img/bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
  .Cart .menu 
    width: 100%;
    height: 80px;
    background: #065968;
  
  .Cart .menu .items 
    width: 80%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
  
  .Cart .menu .items ul 
    margin: 15px;
  
  .Cart .menu .items ul li 
    list-style: none;
    display: inline-block;
    margin: 10px;
  
  .Cart .menu .items ul li a 
    color: #a9f2ff;
    text-decoration: none;
  
  .Cart .menu .items ul .circle 
    width: 10px;
    height: 5px;
    padding: 5px 10px;
    border-radius: 45%;
    color: #03343d;
    background: #a9f2ff;
  
  .Cart .box 
    margin-left: 40%;
    width: 300px;
    color: #a9f2ff;
    background: #03343d;
  
  .Cart .box .image 
    text-align: center;
    padding-top: 10px;
  
  .Cart .box .image img 
    width: 220px;
  
  .Cart .box .detail 
    background: descClr;
    margin: 10px;
  
  .Cart .box .detail .title 
    font-size: 1.5rem;
    color: #a9f2ff;
  
  .Cart .box .detail .desc 
    font-size: 0.5rem;
    color: #a9f2ff;
  
  .Cart .box .set-quan 
    padding: 10px 0;
    background: #065968;
    display: flex;
    flex-basis: 100%;
  
  .Cart .box .set-quan .quantaty 
    width: 70%;
    margin-left: 10%;
    font-size: 1rem;
    color: #a9f2ff;
  
  .Cart .box .set-quan .btns 
    width: 30%;
  
  .Cart .box .set-quan .btns .btn 
    background: #03343d;
    color: #a9f2ff;
    border: none;
    font-size: 2rem;
    color: #a9f2ff;
    margin-right: 5px;
    padding: 0 10px;
  
  .Cart .box .price .coupon input 
    background: #065968;
    border: none;
    font-size: 0.8rem;
    color: #a9f2ff;
    padding: 4px 0;
  
  .Cart .box .price .coupon input::placeholder 
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a9f2ff;
    opacity: 0.5;
    /* Firefox */
  
  .Cart .box .add .btn 
    margin: 10px;
    background: #03343d;
    color: #a9f2ff;
    border: none;
    font-size: 1rem;
    color: #a9f2ff;
    margin-right: 5px;
    padding: 0 10px;
    padding: 10px;
  
  .Cart .box .set-bg 
    background: #065968;
  `