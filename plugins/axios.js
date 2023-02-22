import moment from 'moment';
export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if(error.response.status === 401) {

      localStorage.setItem('Refresh',true)

      if(localStorage.getItem('UserToken') )
        redirect('/login')
      else
        window.location.reload(true)

    }
  })
}