import './Logo.css';

function Logo() {
  return (
      <div className='logo-box no-select' >
        <h1 className='logo-text'>P</h1>
        <img src='/pom-title.svg' className='header-title' alt="Title" />
        <h1 className='logo-text'>M</h1>
      </div>
  );
}

export default Logo;