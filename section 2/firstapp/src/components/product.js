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
  import app_config from "../config";
  
  const Product = () => {
    const url = app_config.api_url;
  
    const loginForm = {
      name: "",
      price: "",
      height:"",
      width :"",
    };
  
    const loginSubmit = (values) => {
      console.log(values);
  
      // 1. URL
      // 2. request method
      // 3. Data
      // 4. Data format
  
      fetch(url + "/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Loggedin Successfully",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Loggedin Failed",
          });
        }
      });
    };
  
    return (
      <div>
        <Paper className="login-container">
          <Grid container justifyContent="center">
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Product description</p>
  
                  <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Name"
                          label="name"
                          variant="outlined"
                          id="name"
                          onChange={handleChange}
                          value={values.name}
                        />
  
                        <TextField
                          className="w-100 mt-3"
                          placeholder="price"
                          label="price"
                          type="price"
                          variant="outlined"
                          id="price"
                          onChange={handleChange}
                          value={values.price}
                        />
                        <TextField
                          className="w-100 mt-3"
                          placeholder="height"
                          label="height"
                          type="height"
                          variant="outlined"
                          id="height"
                          onChange={handleChange}
                          value={values.height}
                        />
                        <TextField
                          className="w-100 mt-3"
                          placeholder="width"
                          label="width"
                          type="width"
                          variant="outlined"
                          id="width"
                          onChange={handleChange}
                          value={values.width}
                        />
  
                        <Button
                          type="submit"
                          color="error"
                          variant="contained"
                          className="mt-5"
                        >
                         Continue
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
    );
  };
  
  export default Product;