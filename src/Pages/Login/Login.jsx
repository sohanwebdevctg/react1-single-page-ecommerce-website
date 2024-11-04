import { useNavigate } from 'react-router-dom';
import loginImg from '../../../public/login/login.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../../utilities/localstorage';

const Login = () => {

  //navigate the user
  const navigate = useNavigate();

  const loginFun = (event) => {

    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const user = true;

    if(email === null && password === null){
      toast("Wow so easy!");
    }else{
      const userValue = {email: email, password : password, user : user};
      toast("your are logged in now");
      setUser(userValue)
      form.reset();
      navigate('/');
    }
  }


  return (
    <>
      <div className="my-8 xl:my-10 bg-white h-full sm:h-screen flex items-center px-5">
        {/* content section start */}
        <div className="container mx-auto">
          {/* login form start */}
          <div className="card bg-base-100 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-10/12 xl:w-8/12 2xl:w-9/12 mx-auto">
            <form onSubmit={loginFun} className=" w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-5">
              {/* left start */}
              <div className="flex-1 bg-[#0B2B83] rounded-2xl h-full w-full">
                <img src={loginImg} className='h-80 sm:h-96 md:h-96 lg:h-[420px] xl:h-[440px] 2xl:h-[460px] w-full rounded-ss-2xl rounded-se-2xl sm:rounded-se-none sm:rounded-es-2xl'></img>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1 p-5">
                <div className="form-control text-center">
                  <h3 className='text-2xl text-[#0B2B83] font-bold'>Sign in Account</h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter you email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="enter you password"
                    className="input input-bordered"
                    name='password'
                    required
                  />
                </div>
                <div className="form-control mt-6 w-full">
                <button className="btn bg-[#0B2B83] hover:bg-[#0B2B83] text-white w-full">Sign In</button>
                </div>
              </div>
              {/* right end */}
              
            </form>
          </div>
          {/* login form end */}
        </div>
        {/* content section end */}
      </div>
      {/* toast start */}
      <ToastContainer />
      {/* toast end */}
    </>
  );
};

export default Login;