import { AppBar, Toolbar, styled,Box,Typography,IconButton,Drawer,List,ListItem } from "@mui/material";
import {Link} from 'react-router-dom';

import { useState } from "react";

import Search from "./Search";
import CustomButtons from "./CustomButtons";

import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const StyledBox=styled(Link)`
margin-left:12%;
line-height:0;
color:inherit;
`;

const SubHeading=styled(Typography)`
font-size: 10px;
font-style:italic;
`;

const PlusImage=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)(({theme})=>({
margin: '0 5% 0 auto',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}));

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    };

    const handleClose=()=>{
        setOpen(false);
    }

    const list=()=>{
        return(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
        );
    }

    return (
        <>
            <StyledHeader>
                <Toolbar style={{minHeight:55}}>

                    <MenuButton color="inherit" onClick={handleOpen}>
                        <Menu/>
                    </MenuButton>

                    <Drawer open={open} onClose={handleClose}>
                       {list()}
                    </Drawer>


                    <StyledBox to='/' style={{textDecoration:'none'}}>
                        <img src={logoURL} alt="logo" style={{width:75}}/>
                        <Box style={{display:'flex'}}>
                            <SubHeading>Explore&nbsp;
                                <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt="sub logo" />
                        </Box>
                    </StyledBox>
                    <Search/>
                    <CustomButtonWrapper>
                        <CustomButtons/>                   </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    );
};
export default Header;
