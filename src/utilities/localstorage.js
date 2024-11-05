/* user data start */

const getUser = () => {

  const userInfo = localStorage.getItem('userInfo');

  if(!userInfo){
    return [];
  }else{
    return JSON.parse(userInfo)
  }

}

const setUser = (data) => {
  return localStorage.setItem('userInfo', JSON.stringify(data));
}

const removeUser = () => {
  return localStorage.removeItem('userInfo');
}
/* user data end */


export { getUser, setUser, removeUser }