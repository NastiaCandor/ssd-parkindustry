const Requests = {
    get: async (url, headers = {}) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
        throw error;
      }
    },
  
    post: async (url, body, headers = {}) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
          dataType: 'json',
          processData: false,
          contentType : false,
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка при выполнении POST-запроса:', error);
        throw error;
      }
    },
  
    // Добавьте методы для других типов запросов, таких как PUT, DELETE и т.д.
  };
  
  export default Requests;