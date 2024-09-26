//https://blog.logrocket.com/using-localstorage-react-hooks/
//https://www.freecodecamp.org/espanol/news/tutorial-de-una-aplicacion-react-abm-como-construir-una-aplicacion-de-gestion-de-libros-en-react-desde-cero/

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
