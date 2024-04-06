import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const handleLogin = e =>{
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email,password);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  }

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
              
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
                
                      <div className="input input-bordered flex items-center gap-2">
                        <MdEmail></MdEmail>
                        <input type="text" name="email" className="grow" placeholder="Email" />
                      </div>

                      <div className="input input-bordered flex items-center gap-2">
                      <RiLockPasswordLine></RiLockPasswordLine>
                        <input type="password" name="password" className="grow" placeholder="password"/>
                      </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
        </div>
    </div>
  );
};

export default Login;