import { Helmet } from "react-helmet-async";
import './Home.css'

function Home() {
  return (
    <>
      <Helmet>
        <title>Hey There!</title>
        <link rel="icon" type="image/x-icon" href="resources/128bitWave.ico" />
      </Helmet>
      <div className='home-frame'></div>
      <h1 className='home-title'>Welcome!</h1>
      <h3 className='home-subtitle'>This is Thomas' website</h3>
      <p className='home-p'>That's it. Thanks for stopping by :)</p>
    </>
  )
}

export default Home