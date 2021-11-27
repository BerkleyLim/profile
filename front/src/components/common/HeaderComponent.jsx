import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import LoginService from '../../service/LoginService'

export default class HeaderComponent extends Component {
    constructor(props) {
      super(props);
      this.searchMenu = this.searchMenu.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {loginStatus: false};
    }

    info_print() {
      let initBody = document.body;
      let hiddenBtn = document.querySelector('.print-button'); 
      let hiddenHeader = document.querySelector('#header');
      let hiddenNavbar = document.querySelector('.navbar-device');
      let hiddenClearfix = document.querySelector('.clearfix');
    
      window.onbeforeprint = function () {
        hiddenBtn.style.display = "none";
        hiddenHeader.style.display = "none";
        hiddenNavbar.style.display = "none";
        hiddenClearfix.style.display = "none";
        document.body = document.querySelector('.main-container');
      }
      window.onafterprint = function () {
        hiddenBtn.style.display = "block";
        hiddenHeader.style.display = "block";
        hiddenNavbar.style.display = "block";
        hiddenClearfix.style.display = "block";
        document.body = initBody;
      }
      window.print();
    }

    componentDidMount() {
      this.handleLoginClick();
      this.handleLogoutClick();
    }

    handleLoginClick(data) {
      LoginService.login(data).then(() => {
        this.setState({loginStatus: true});
      });
    }

    handleLogoutClick() {
      LoginService.logout().then(() => {
        this.setState({loginStatus: false});
      });
    }

    searchMenu() {
      var keyword = document.getElementById('search-keyword').value;
      console.log(this.loginStatus)
      window.alert(keyword);
      if (keyword === ("1qa2wad234ewg67uy7t89ouy43ertdrfgedrtedr")) {
        // 로그인
        this.handleLoginClick(keyword);
      } else if (keyword === "logout") {
        // 로그아웃
        this.handleLogoutClick();
      } else{
        // 검색
        
      }
    }
    render() {
      const loginStatus = this.state.loginStatus;

      let loginMenu = null;
      if (loginStatus) {
        loginMenu = <li class="nav-item">로그아웃</li>;
        // console.log(loginStatus)
      } else {
        loginMenu = null;
        // console.log(loginStatus)
      }
        return (
            <div className='header'>
                <div className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a className="navbar-brand" href="http://localhost:3000">My.Dev </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/introduction">소개</Link>
                            </li>
                            <li class="nav-item">
                              <Link className="nav-link" to="/career">이력정보</Link>
                            </li>
                            <li class="nav-item">
                              <Link className="nav-link" to="/project">프로젝트</Link>
                            </li>
                            <li class="nav-item">
                              <Link className="nav-link" to="/together">파트너모집</Link>
                            </li>
                            <form className="d-flex">
                              <input id="search-keyword" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-outline-light" onClick='searchMenu()'>Search</button>
                            </form>
                            <li class="nav-item">
                                <Link className="nav-link" onClick="info_print()">
                                  <FontAwesomeIcon icon={faPrint} />
                                </Link>
                            </li>
                            {loginMenu}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


