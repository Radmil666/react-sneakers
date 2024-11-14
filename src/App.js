
function App() {
  return (
    <div className="wrapper clear">
       <header className="d-flex justify-between align-center p-40">
        <div className = "d-flex align-center pl-20"> 
        <img width = {100} height = {100} src = "/img/logo.png" />
        <div className = "pl-30">
          <h3 className="">
            New Balance</h3>
          <p>
            For Sience 1899</p>
         </div> 
        </div>
        <ul className = "d-flex">
         <img  width = {20} height = {20 } src = "/img/basket.png"/>
         <span className="pr-10 pl-10 ">1205 rub</span>
        <li>
        <li className="mr-30">
          <img width = {20} height = {20} src = "/img/user.png"/>
        </li>
        </li>
        </ul>
       </header>

        <div className = "content p-40">
          <h1 className = "mb-40">Все кроссовки </h1>

          <div className = "d-flex">

          <div className="card">
            <img width={150}  height={160} src="/img/card/card1.jpeg" alt=""></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede </h5>
            <div className="d-flex justify-between align-center pt-20">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 RUB.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={150}  height={160} src="/img/card/card2.jpeg" alt=""></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede </h5>
            <div className="d-flex justify-between align-center pt-20">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 RUB.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={150}  height={160} src="/img/card/card3.jpeg" alt=""></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede </h5>
            <div className="d-flex justify-between align-center pt-20">
              <div className="d-flex flex-column r">
                <span>Цена:</span >
                <b>12 999 RUB.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={150}  height={160} src="/img/card/card4.jpeg" alt=""></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede </h5>
            <div className="d-flex justify-between align-center pt-20">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 RUB.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" ></img>
              </button>
            </div>
          </div>
          </div>


        </div>
    </div>
  );
}

export default App;
