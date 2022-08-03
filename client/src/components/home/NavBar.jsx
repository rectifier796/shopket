import { navData } from "../../constants/data";
import {Box,styled,Typography} from '@mui/material';


const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'overlay',
[theme.breakpoints.down('lg')]:{
    margin:0
}
}));


const Container=styled(Box)`
padding:12px 8px;
text-align:center
`
const Text=styled(Typography)`
font-size: 14px;
font-weight:600;
font-family:inherit;
`


const NavBar=()=>{
    return(
        <>
        <Box style={{background:'#fff'}}>
        <Component>
            {
                navData.map((data)=>{
                    return(
                    <Container>
                        <img src={data.url} alt="Items" style={{width:64}} />
                        <Text>{data.text}</Text>
                    </Container>
                    )
                })
            }
        </Component>
        </Box>
        </>
    )
}
export default NavBar;