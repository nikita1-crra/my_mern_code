import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,
  } from "@mui/material";
  import { Formik } from "formik";
  import Swal from "sweetalert2";
  import app_config from  "../config"
const Sign= () =>{

  const url = app_config.api_url; 
  const userForm ={
    name :'',
    username : '',
    password :'',
    age :'',
  }

  const userSubmit =(values)=>{
    console.log(values);
    fetch(url+'/user/add',{method:'POST',
    body:JSON.stringify(values),
    headers:{'Content-Type':"application/json"},
  })
  .then((res)=>{
   console.log(res.status);
   if  (res.status == 200) {
     Swal.fire({
       icon: "success",
       title: "Success",
       text: "Registered Successfully",

     });
   }
   return res.json();
  })
  .then((data)=>{
    console.log(data);
  });



  };
    return(
        <div>
        <Paper className="login-container">
          <Grid container justifyContent="center">
            <Grid item md={6} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Signup Here</p>
                 <Formik initialValues={userForm}  onSubmit={userSubmit}>
                   {({values, handleChange,handleSubmit}) =>(
                     <form onSubmit ={handleSubmit}>

                  
                 
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Name"
                    label="username"
                   variant="outlined"
                   helperText = "Enter your name"
                   id="name"
                   onChange={handleChange}
                   value={values.name}
                  />
                   <TextField
                    className="w-100 mt-3"
                    placeholder="Username"
                    label="username"
                   variant="outlined"
                   helperText = "Enter your username"
                   id="username"
                   onChange={handleChange}
                   value={values.Username}
                  />
  
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    helperText = "Enter your strong password"
                    id="paswword"
                    onChange={handleChange}
                    value={values.Username}
                  />
                   <TextField
                    className="w-100 mt-3"
                    placeholder="age"
                    label="age"
                    type="age"
                    variant="outlined"
                    helperText = "Enter your age"
                    id="age"
                    onChange={handleChange}
                    value={values.age}
                  />
  
  
                  <Button color="error" variant="outlined" className="w-100 mt-5" type="submit">
                    Signin to Continue
                  </Button>
                  </form>
                   )}
                  </Formik>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>
        

    )
}
export default Sign;