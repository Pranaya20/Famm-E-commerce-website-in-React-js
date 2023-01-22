import styled from 'styled-components'

 const MainContainer = styled.div`
nav{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 90px;
    position: fixed;
    left: 0;
    right: 0;
    -webkit-backdrop-filter: blur(26px);
    backdrop-filter: blur(26px);
    z-index: 999;
    top: 0;
    padding: 0px 82px;
}
.active-nave{
    color: #f7444e;
}
.nav-container-main{
    max-width: 1140px;
}
.nav-image{
    width:166px;
    position: absolute;
    left: 65px;
    height:24px;
  }
h1{
    color:black;
}
ul{
    color:black;
    display:flex; 
    justify-content: center;
    align-items: center;
    list-style-type: none !important; 
}
li{
    margin-left:40px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}
li:hover{
  color: #f7444e;
}
.hamburger{
    visibility: hidden;
  }
  #close{
    visibility: hidden;
 } 


/* Responsive columns */
@media (min-width : 1200px) and (max-width : 1400px){
 
}
@media (min-width : 1024px) and (max-width : 1200px){
 
}
@media (min-width : 991px) and (max-width : 1024px){
  li{
    font-size: 15px;
  }
}
@media (min-width : 767px) and (max-width : 991px){
    li{
        font-size: 15px;
        margin-left: 24px;
      }
}
@media (min-width : 320px) and (max-width : 767px){
  ul{
      visibility: hidden;
  }
  .hamburger{    
      visibility: visible;
      float:right;
      display: block;
    position: absolute;
    right: 74px;
    width: 20px;
    height: 20px;
    }
    .heading{
      cursor: pointer;
      position: absolute;
      left: 25px;
    }
    .active{
      right:0px !important;
    }
    #navbar{
      background: #f1f1f1;
      width:400px;
      height:100vh;
      visibility: visible;
      justify-content: start;
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 0px;
      right:-397px;
      box-shadow: 0 40px 60px rgba(0,0,0,0.1);
      padding:40px 0px 0px 20px;
      transition: 0.3s;
      z-index: 9999;
    }
    li{
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 500;
    }
    .active{
      right:0px;
    }
    #close{
      visibility: visible;
      position: absolute;
      right: 78px;
      font-size: 24px;
   } 
    
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}


`;

export default MainContainer;