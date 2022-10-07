import React, { Component } from 'react'
import p_Interior from '../../image/project/Interior.jpg'
import p_MusicStyle from '../../image/project/MusicStyle.png'
import p_Chanel from '../../image/project/Chanel.jpg'

export default class ProjectComponentSample extends Component {
    render() {
        return (
            <div>
                <h1>운영 및 개발 진행 프로젝트</h1>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">ClNewze</h3>
                    <div class="col-md-4">
                        <img src="" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2022.03 ~ </p>
                        <p class="card-text">링크 : 개발중</p>
                        <p class="card-text">운영 시작 일 : </p>
                        <p class="card-text">사용기술 : Java, Spring boot, HTML, CSS, JavaScript, MySQL, My-Batis, Gradle, AWS, ReactJS</p>
                        <p class="card-text">프로젝트 인원 : 1명</p>
                        <p class="card-text">프로젝트 설명 : MusicStyle 프로젝트에서 리뉴얼한 형태의 프로그램, 개인 홈페이지를 직접 개발함과 동시에 React+Spring boot를 활용과 동시에 추가적인 기술을 습득 및 개선점을 보강하는 것이 목적으로 기존의 JQuery와 Spring boot 없이 진행한 프로젝트에서 Spring boot + React 형태의 개발을 진행 중이며 최종적인 목적으로 유지보수 편한 프로젝트형으로 리팩토링 진행중입니다. 또한 개발을 하면서 컨텐츠 개편에 예정중입니다.</p>
                        </div>
                    </div>
                    </div>
                </div>

                <h1>진행 이력 프로젝트</h1>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">Interior</h3>
                    <div class="col-md-4">
                        <img src={p_Interior} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2018.06 ~ 2018.08</p>
                        <p class="card-text">링크 : 필요시 개방해드립니다.</p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, JQuery, MySQL, Aphach-Tomcat, My-Batis, Gradle, AWS, Handlebarsjs</p>
                        <p class="card-text">프로젝트 인원 : 6명 </p>
                        <p class="card-text">프로젝트 설명 : 지금까지 알려진 공방 사이트에서의 바탕으로 하여 소통 부재면이나, 공방 체험의 대한 컨텐츠 부족 등이 많다보니 그러한 것들 것 채우기 위해 직접 구현해 보았다.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">C사 부천 물류센터 스마트 팩토리 AGV 피킹 시스템 설치</h3>
                    <div class="col-md-4">
                        <img src={p_Chanel} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2019.08 ~ 2019.11</p>
                        <p class="card-text">링크 : -</p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, MySQL, nGinX, AutoCAD, SLAM, QR code</p>
                        <p class="card-text">프로젝트 인원 : 3명</p>
                        <p class="card-text">프로젝트 설명 : 웹과 로봇을 연동하는 프로젝트로 부천 물류 현장 센터에서 AGV를 이용하여 선반을 운반하여 물건을 가져오는 시스템 구축 S/W로 AGV 로봇을 제어하고 이에 필요한 자재들을 만들어 진행을 하였다. 개발 완료 후 인건비 감소 및 작업시간 단축의 효율을 보았다.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">MusicStyle</h3>
                    <div class="col-md-4">
                        <img src={p_MusicStyle} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2018.10 ~ 개발중단</p>
                        <p class="card-text">링크 : 운영 중단</p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, MySQL, Aphach-Tomcat, My-Batis, Gradle, AWS, Handlebarsjs</p>
                        <p class="card-text">프로젝트 인원 : 1명</p>
                        <p class="card-text">프로젝트 설명 : 악기연주를 취미로 하거나 악기연주의 대한 전공을 하는 사람들에게 초점을 맞춰 음악적인 이야기와 악기연주를 위한 질 좋은 악보 제공, 자기가 연주한 것들과 취미생끼리 공유하기 위한 연습방법을 위해 영상을 통해 공유를 하고, 부가적인 옵션으로 음악으로 생계로 활동하고 있는 레스너 구하는 카테고리와 악기연주를 위한 연습실을 공유를 하여 악기를 연주하는 사람들을 위해 제작을 하였다. 보다 질 높은 프로젝트를 만들기 위해 리뉴얼 합니다.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}