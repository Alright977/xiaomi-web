import axios from 'axios'

const instance = axios.create({})

//  接口响应拦截
instance.interceptors.response.use((response) => {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

export default instance
