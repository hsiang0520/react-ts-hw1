import './App.css'

function App() {


  return (
    <>
      
        <header>
          <h1>蔡翔宇</h1>
        </header>

        <main>
          <section className="education-section">
            <img src="法令紋.jpg" alt="個人照" className="profile-pic" />
            <h2>學歷</h2>
            <ul>
              <li>高雄市私立中山工商</li>
              <li>高雄市市立瑞祥中學</li>
            </ul>
          </section>
          <section className="interests-section">
            <h2>興趣</h2>
            <ul>
              <li>大吃美食</li>
              <li>攝影</li>
              <li>旅遊與探索新地方</li>
              <li>做美甲</li>
            </ul>
          </section>
          <section className="contact-section">
            <h2>聯絡方式</h2>
            <p>電子郵件: 411631145@o365.tku.edu.com</p>
            <p>電話: 0912-1541542</p>
            <p>line: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">翔</a></p>
          </section>
        </main>

      </>
     )
}

      export default App
