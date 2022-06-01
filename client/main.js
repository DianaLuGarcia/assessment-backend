const complimentBtn = document.getElementById("complimentButton");
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
fortuneBtn.addEventListener("click", getFortune);

const dropSelectedValue = document.getElementById("droplist");
function clicked() {
  alert("This is a SCAM! GET RID OF YOUR INFO!!");
}

const dropDown = document.addEventListener("change", clicked);
