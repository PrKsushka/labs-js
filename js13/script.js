//1
    setCookie("cookies","name1=Ksu;name2=Ksenia")
    function setCookie(cookie_name, cookie_value) {
        let cookie_string = cookie_name + "=" + cookie_value;
        document.cookie = cookie_string;
    }
    function getCookie(cookie_name) {
        let results = document.cookie.match(
          "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
        );

        if (results) return unescape(results[2]);
        else return null;
      }

    function getValue(cookie){
        if(!cookie) return null;
        let cookie_pair;
        let cookie_array = cookie.split(";")
        let value = "";
        for (let i = 0; i < cookie_array.length; i++) {
            cookie_pair = cookie_array[i].split("=");
            value += cookie_pair[1]+'\t';
        }
        return value;
    }
    console.log("Info from cookie about user: "+getValue(getCookie("cookies")));

//2

    let color =  getCookie("color");
    document.querySelector("body").style.backgroundColor = color;
    let mycolor = 'pink';
    setCookie("color",`${mycolor}`);
