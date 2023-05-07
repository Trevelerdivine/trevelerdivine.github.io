function base_status() 
{
  const char_name = document.getElementById("char_name").value;
  fetch("./"+char_name)
.then(response => response.json())
.then(data => {
const hp = data.ステータス.基礎HP["90"];
document.getElementById("hp").textContent = hp*10000;
})
.catch(error => console.error(error));
}