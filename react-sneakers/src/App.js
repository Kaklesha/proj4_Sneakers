function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
          <img src="/img/Logo.png" alt="Logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>

        <ul className="headreRight d-flex justify-between">
          <li className="mr-30">
            <img src="/img/Group.svg" alt="Group.svg" />
            <span>1205 rub</span>
          </li>
          <li>
            <img src="/img/Union.svg" alt="Union.svg" />
          </li>
        </ul>
      </header>

    
        <div className="content p-40">
        
          <div className="d-flex align-center justify-between mb-40">
              <h1 >Все кросовки</h1>  
              <div className="search-block d-flex">
                <img src="/img/sneakers/search.svg" alt="dddd" /> 
                <input type="text" placeholder="Search..." /> </div>
                  
         
          </div>
          <div className="sneakers">
                <div className="card">

                  <div className="favorite">
                <img className='islike' src="/img/sneakers/unlike.svg" alt="unlike" />
                  </div>

                  <img
                    width={133}
                    height={112}
                    src="/img/sneakers/image 5.jpg"
                    alt=""
                  />
                  <h5>Мужские Кроссовки Nike </h5>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column ">
                      <span>Цена:</span>
                      <b>12999руб</b>
                    </div>
                    <button className="button">
                      <img
                        width={11}
                        height={11}
                        src="/img/sneakers/Group 91.svg"
                        alt="plus.svg"
                      />
                    </button>
                  </div>
                </div>
                
                <div className="card">
          <img
            width={133}
            height={112}
            src="/img/sneakers/image 5.jpg"
            alt=""
          />
          <h5>Мужские Кроссовки Nike </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12999руб</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="/img/sneakers/Group 91.svg"
                alt="plus.svg"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/sneakers/image 5.jpg"
            alt=""
          />
          <h5>Мужские Кроссовки Nike </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12999руб</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="/img/sneakers/Group 91.svg"
                alt="plus.svg"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/sneakers/image 5.jpg"
            alt=""
          />
          <h5>Мужские Кроссовки Nike </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12999руб</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="/img/sneakers/Group 91.svg"
                alt="plus.svg"
              />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
