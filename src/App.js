import {useState} from"react"
import "./App.css";
import Box from "./component/box";

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위바위보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 검퓨터는 랜덤하게 아이템 선택이 된다
//5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://eagawards.com/cdn/shop/products/36-giant-pink-ribbon-cutting-scissors-with-silver-blades_2048x.png?v=1681903589",
  },
  paper: {
    name: "Paper",
    img: "https://media0.giphy.com/media/ozf26DV8FqaCpkYt6n/giphy.gif?cid=6c09b95280cf6lqof5l7kh61pw9pm3nxwrrc7hzeas4xv52q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  },
};

function App() {
  const [userSelect,setUserSelect]= useState(null)
  const [computerSelect,setComputerSelect]=useState(null)
  const [result,setResult] = useState("")
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice))
  };

  const judgement = (user,computer) => {
    if(user.name===computer.name){
      return "Tie"
    }else if(user.name==="Rock")return computer.name === "Scissors"?"Win":"Lose"
    else if (user.name==="Scissors")return computer.name === "Paper"?"Win":"Lose"
    else if (user.name==="Paper")return computer.name === "Rock"?"Win":"Lose"
  }


  const randomChoice=() => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result=== "Win" ? "Lose" : result === "Lose" ? "Win" : "Tie"}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>✂️</button>
        <button onClick={() => play("rock")}>🪨</button>
        <button onClick={() => play("paper")}>📄</button>
      </div>
    </div>
  );
}

export default App;
