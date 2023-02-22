export default ({ app }, inject) => {
    
    inject('words',(str,limit,separator=' ') => {
        if(str == '') return '';
        return str.substr(0, str.lastIndexOf(separator, limit)) + '...'
    } )

  }