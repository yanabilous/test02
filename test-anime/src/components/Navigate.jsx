import logo from '../assets/logo.png';
function Navigate() {
  return (
    <div className="navigate-bg">
      <div className="navigate-wrapper container">
        <div className="nav">
          <a className="logo" href="#"><img src={logo} alt="logo"/></a>
          <ul className="nav-items">
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
          </ul>
        </div>
        <div className="search">
          <input placeholder="Search for…"/>
          <button>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.2419 8.14286C13.2419 10.8996 10.9986 13.1429 8.24191 13.1429C5.48521 13.1429 3.24191 10.8996 3.24191 8.14286C3.24191 5.38616 5.48521 3.14286 8.24191 3.14286C10.9986 3.14286 13.2419 5.38616 13.2419 8.14286ZM18.9562 17.4286C18.9562 17.0491 18.7999 16.6808 18.5432 16.4241L14.7151 12.596C15.6191 11.2902 16.0991 9.72768 16.0991 8.14286C16.0991 3.80134 12.5834 0.285713 8.24191 0.285713C3.90039 0.285713 0.384766 3.80134 0.384766 8.14286C0.384766 12.4844 3.90039 16 8.24191 16C9.82673 16 11.3892 15.5201 12.695 14.6161L16.5232 18.433C16.7799 18.7009 17.1482 18.8571 17.5276 18.8571C18.3089 18.8571 18.9562 18.2098 18.9562 17.4286Z"
                fill="#E1541B"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );

}

export default Navigate;