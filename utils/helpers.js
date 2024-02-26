const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));



//URLS
const BASE_URL = 'http://localhost:9000';
// cities endpoint: http://localhost:9000/cities
// city ID endpoint : http://localhost:9000/cities/73930385

export {formatDate, BASE_URL}