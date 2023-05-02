import { useForm } from "react-hook-form"
import {Button,Container,TextField} from'@mui/material/'

const EditUserForm=(props:any)=>{
    
const {register,errors, handleSubmit,setValue }= 
useForm({
defaultValues: props.currentUser
});

setValue('name',props.currentUser.name );
setValue('img',props.currentUser.img );


const onSubmit=(data:any,e:any) =>{
 // console.log(data)
props.updateUser(props.currentUser.id, data)

  data.id= props.currentUser.id
  //limpiar datos 
  e.target.reset()
}

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
  ''}
        />
        
        <TextField
          name="img"
          label="link img"
          inputRef={register({ required: true })}
          error={!!errors.img}
          helperText={errors.img ? 'Link img is required' 
: 
  ''}
        />
        
        <Button type="submit" variant="contained" 
  color="primary">
          Editar
        </Button>
      </form>
      </Container> 
      </div>
    );
  };
  export default EditUserForm;