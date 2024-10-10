
function App() {
  return (
    <div className="wrapper clear">
       <header className="d-flex justify-between align-center p-40">
        <div className = "d-flex align-center"> 
        <img width = {100} height = {100} src = "/img/logo.png" />
        <div>
          <h3 className="text-uppercase">
            React Sneakers</h3>
          <p>
            Магазин лучших кросовок</p>
         </div> 
        </div>
        <ul className = "d-flex">
         <img width = {20} height = {20 } src = "/img/basket.png"/>
         <span className="pr-20">1205 rub</span>
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
            <img width={133}  height={160} src="/img/card/card1.jpeg" alt=""></img>
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
            <img width={133}  height={160} src="/img/card/card1.jpeg" alt=""></img>
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
            <img width={133}  height={160} src="/img/card/card1.jpeg" alt=""></img>
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
            <img width={133}  height={160} src="/img/card/card1.jpeg" alt=""></img>
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
