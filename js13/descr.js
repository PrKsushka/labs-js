        function get_cookie(name_to_get) {
          let cookie_pair;
          let cookie_name;
          let cookie_value;
          let cookie_array = document.cookie.split("; ");
          for (counter = 0; counter < cookie_array.length; counter++) {
            cookie_pair = cookie_array[counter].split("=");
            cookie_name = cookie_pair[0];
            cookie_value = cookie_pair[1];
            if (cookie_name == name_to_get) {
              return unescape(cookie_value);
            }
          }
          return null;
        }
        function set_cookie(
          cookie_name,
          cookie_value,
          cookie_expire,
          cookie_path,
          cookie_domain,
          cookie_secure
        ) {
          let cookie_string = cookie_name + "=" + cookie_value;
          if (cookie_expire) {
            let expire_date = new Date();
            let ms_from_now = cookie_expire * 24 * 60 * 60 * 1000;
            expire_date.setTime(expire_date.getTime() + ms_from_now);
            let expire_string = expire_date.toGMTString();
            cookie_string += "; expires=" + expire_string;
          }
          if (cookie_path) {
            cookie_string += "; path=" + cookie_path;
          }
          if (cookie_domain) {
            cookie_string += "; domain=" + cookie_domain;
          }
          if (cookie_secure) {
            cookie_string += "; true";
          }
          document.cookie = cookie_string;
        }
        
        let legal_characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890\nйцукенгшщзхэждлорпавыфячсмитьбю`;
        let key ;
        function encrypt_cookie(cookie_value, encrypt_key) {
          key = encrypt_key;
          let cookie_character;
          let character_location;
          let encrypted_location;
          let encrypted_character;
          // Эта переменная содержит зашифрованные символы cookie
          let encrypted_string = "";
          // Просмотр всех символов cookie
          for (let counter = 0; counter < cookie_value.length; counter++) {
            //Получение текущего символа cookie
            cookie_character = cookie_value.substring(counter, counter + 1);
            // alert(cookie_character);
            // Получение расположения текущего символа в таблице символов
            character_location = legal_characters.indexOf(cookie_character);
            // alert(character_location);
            // Шифрование XOR расположения символа в таблице ключом encrypt_key
            encrypted_location = character_location ^ encrypt_key;
            // alert(encrypted_location);
            // Использование зашифрованного расположения для определения зашифрованного символа в таблице символов
            encrypted_character = legal_characters.substring(
              encrypted_location,
              encrypted_location + 1
            );
            // alert(encrypted_character);
            // Добавление зашифрованного символа в строку
            encrypted_string += encrypted_character;
          }
          return encrypted_string;
        }
        function decrypt_cookie(encrypted_string, encrypt_key = key) {
          let cookie_character;
          let character_location;
          let encrypted_location;
          let encrypted_character;
          // Эта переменная содержит расшифрованное значение cookie
          let cookie_value = "";
          // Просмотр каждого символа зашифрованного значения
          for (let counter = 0; counter < encrypted_string.length; counter++) {
            // Получение текущего зашифрованного символа
            encrypted_character = encrypted_string.substring(
              counter,
              counter + 1
            );
            // Получение зашифрованного расположения символа в таблице символов
            encrypted_location = legal_characters.indexOf(encrypted_character);
            // Расшифровка расположения символа с помощью ключа encrypt_key
            character_location = encrypted_location ^ encrypt_key;
            // Получение текстового символа по расположению его в таблице символов
            cookie_character = legal_characters.substring(
              character_location,
              character_location + 1
            );
            // Добавление текстового символа в строку
            cookie_value += cookie_character;
          }
          return cookie_value;
        }