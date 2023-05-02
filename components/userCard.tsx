import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CardMedia from '@mui/material/CardMedia';

const UserCard=(props:any)=>{
  console.log(props.users)
  const theme = useTheme();

   return (
<div> 
<Card sx={{ display: 'flex' }}>
   {
    props.users.length > 0 ?
    props.users.map((user:any)=>( 
  <Box key={user.id}>

  <Box sx={{ display: 'flex', flexDirection: 'row', 
width:450}}>
   <CardContent sx={{ flex: '1 0 auto' }}>
   <Box sx={{ display: 'flex', alignItems: 'center',
   pl: 1, pb: 1 }}> 
    <Typography component="div" variant='inherit'>
      {user.name}
    </Typography>
    </Box>
        </CardContent>
<Box sx={{ display: 'flex', alignItems: 'center', 
       pl: 1, pb: 1 }}>
<IconButton >
 <EditIcon onClick={()=>{props.editRow(user)}}/>
</IconButton>
<IconButton >
<DeleteIcon sx={{ height: 38, width: 38 }} 
 onClick={()=>{props.deleteUser(user.id)}}
 />
</IconButton>
<IconButton >
<AddIcon/>
</IconButton>
</Box>
<CardMedia src={user.img} 
alt="Picture of the author"
width={80}
component='img'
height={80} />
</Box>
</Box>
)): (
<Typography component="div" variant="h1"> No users 
</Typography>
)
}
 </Card>
 </div>
   )
  };
  
export default UserCard;

































































