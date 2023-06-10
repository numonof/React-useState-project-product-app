import styled from "styled-components";
import {ReactComponent as Delate} from '../Images/Icon/deleteIcon.svg';

export const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
margin-bottom: 40px;
`;
export const Table = styled.div`
width: 100%;
height: 100%;
`;
export const ProductWrapper = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
`;
export const TableHeadRow = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
margin-bottom:15px;
border-bottom:5px solid #000;
background-color: #FFF;
`

export const TableRow = styled.div`
width:100%;
height:80px;
display:flex;
margin-bottom:5px;
align-items:center;
border-bottom:5px solid #ffff !important;
background-color: #FBFBFB;
`
export const TableHeadBlock = styled.div`
width:${({product})=>product ? '40%': '15%'};
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Cera Pro' ,sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
background-color: #FFFF;
text-align:center;
`
export const TableBlock = styled.div`
width:${({product})=>product ? '40%': '15%'};
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Cera Pro' ,sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
background-color: #FFFF;
text-align:center;
`
export const TableChildBlock = styled.div`
width:${({product})=>product ? '40%': '15%'};
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Cera Pro' ,sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
background-color: #FBFBFB;
// background-color:${({product})=>product ? '#FFF': '#E5E5E5'};
text-align:center;

`
export const ProductTitle=styled.h3`
font-family: 'Cera Pro' , sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
margin: 0;
`
export const ProductImg = styled.img`
width:70px;
height: 70px;
`;

export const ProductPrice = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
font-family: 'Cera Pro' sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 16px;
color: #727272;
`
export const ProductCount = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:center;
`
 export const DelateBtn = styled(Delate)`
width:24px;
height:24px;
margin-left:25px;
`;
export const AllCurrent = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Cera Pro';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 16px;
color: #727272;
`

export const CountButton = styled.button`
display:flex;
align-items:center;
justify-content:center;

width: 21.7px;
height: 25px;
font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height:16px;
color: #FFFFFF;
background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
border: 1px solid transparent;
border-radius: 31px;
`;
export const Count = styled.h3`
font-family: 'Cera Pro' , sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 10px;
color: #3D3D3D;
margin 0 16px;
`;

