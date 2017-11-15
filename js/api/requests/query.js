const root_endpoint = 'https://api.github.com/'

const query = (query) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", root_endpoint + query);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/vnd.github.mercy-preview+json"); 
    xhr.onload = () => {resolve(xhr.response)};
    xhr.send();
  });
}

export default query 