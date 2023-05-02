import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField'
import {Button,Container} from '@mui/material/'


const  AddUserForm=(props:any)=>{

const { register, handleSubmit, errors } = useForm();

 const onSubmit =(data:any,e:any):any=> {
  console.log(data);
  props.AddUser(data)
  e.target.reset()
};

return(
  <div>
<Container> 
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="name"
        label="Name"
        inputRef={register({ required: true })}
        error={!!errors.name}
        helperText={errors.name? ' Name is required' : 
''} />
      <TextField 
        name="img"
        label="link img"
        inputRef={register({ required: true })}
        error={!!errors.img}
        helperText={errors.img ? 'Link img is required' :
''}
      />
      
<Button type="submit" variant="contained"  
color="primary">
        Submit
      </Button>
    </form>
    </Container> 
    </div> 
  );
};

export default AddUserForm;

