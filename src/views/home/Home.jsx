import './Home.css'

const Home = () => {

  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">C9 & Pol</span>
          <span className="headerTitleLg">Adivas</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
            Explorar Ahora
        </button>
      </div>
      <div className="home">


      </div>
    </div>
  );
};

export default Home;
