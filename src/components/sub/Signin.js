function Signin(){
  return(
    <>
    {/* title, signin */}
    <section className="content Signin">
      <div className="inner">
      <h1>&#8550;. Signin</h1>

      <article className="access">
        <h2>Sign in or create an account</h2>
        <p>Welcome to the official website of the STUDIOALICE. By signing in, you can access to the various services provided by STUDIOALICE</p>

        <div className="wrap">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            Keep me signed in. 
            <span>Details</span>
          </label>
          
          <p className="id">Forget your username?</p> 
          <p className="pw">Forget your password?</p>

          <button>Sign in</button>
        </div>
      </article>

      </div>
    </section>

    <section className="membership">
      <div className="inner">
        <h1>Premium Membership</h1>

        <div className="wrap">
          <article>
            <h2>Gold</h2>
            <p>Annuall Fee $100</p>
            <img src="" alt="" />
            <span>Join Now</span>
            <strong>Learn More</strong>
          </article>
          <article>
            <h2>Gold</h2>
            <p>Annuall Fee $100</p>
            <img src="" alt="" />
            <span>Join Now</span>
            <strong>Learn More</strong>
          </article>
          <article>
            <h2>Gold</h2>
            <p>Annuall Fee $100</p>
            <img src="" alt="" />
            <span>Join Now</span>
            <strong>Learn More</strong>
          </article>
        </div>
      </div>
    </section>

    <section className="cardInfo">
    <div className="inner">
      <div className="pic">
        <img src="" alt="" />
      </div>
      <div className="txt">
        <h1>UnionPay Diamond cardholder can join</h1>
        <h2>Premium Blue Members for free (limited to once per year)</h2>
        <ul>
          <li>
            <div className="icon"></div>
            <h3>UnionPay Diamond cardholder can join</h3>
            <p>Premium Blue Members for free (limited to once per year)</p>
          </li>
          <li>
            <div className="icon"></div>
            <h3>For queries relating to the</h3>
            <p>memberships contact us at 02-580-1300 (Opening hours: 09:00 – 20:00)</p>
          </li>
          <li>
            <div className="icon"></div>
            <h3>Available Card</h3>
            <p>Woori Card: Royal Blue / Royal Blue L / Royal Blue 1000<br/>Lotte Card: uberSKY<br/>NH Card: Ü Card<br/>KB Card: BeV Ⅴ, BeV Ⅲ, Star B<br/>Shinhan Card: THE ACE BLUE LABEL<br/>Hana Card : CLUB SIGNATURE</p>
          </li>
        </ul>
      </div>
    </div>
    </section>

    </>
  )
}

export default Signin;