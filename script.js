const API_key = "AIzaSyCr99ZSMQNnw4QKFhRP9p63ANl4MZIpCLk";

let search = async () => {
  let query = document.querySelector("#query").value;
  let data = await getDATA(query);
};

let getDATA = async (query) => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_key}`;

  let res = await fetch(url);
  let data = await res.json();
  append(data.items);
  return data.items;
  console.log(data);
};

let append = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.medium.url;

    h3 = document.createElement("h3");
    h3.innerText = el.snippet.title;

    let div = document.createElement("div");
    div.onclick = () => {
      saveVIDEO(el);
    };
    div.setAttribute("classs", "video");
    div.append(img, h3);

    container.append(div);
  });
};

let saveVIDEO = (data) => {
  localStorage.setItem("videoDATA", JSON.stringify(data));
  window.location.href = "video.html";
};

let sort = async () => {
  let data = await getDATA(q);

  data = data.filter((el) => {
    return el.snippet;
  });
};
