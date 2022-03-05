import "./login.css";
const Login = () => {

    const pagestyle = {
        formTitle:{
            textAlign:'center',
            color:'red'
        },

    };

    return(
        <div className="login-bg">
            <div className="container-fluid mt-5">
               <div classname="col-3 mx-auto">
                   <div className="card bg-warning">
                       <div className="card-body">
                           <img 
                           className="logo"
                           src="https://avatars.githubusercontent.com/u/26999847?s=280&v=4"  alt="digipodium"
                            />
                            <h3 style={pagestyle.formTitle}>Continue here</h3>
                            <div className="form-floating mt -5">
                                <input classNAme="form-control" placeholder="Email" />
                            <label> Email</label>
                           </div>
                           <div className="form-floating mt-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>

              <button className="btn btn-primary mt-5 w-10">SignIn Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
                   