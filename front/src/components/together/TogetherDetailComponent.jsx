import React, { Component } from 'react'
import { createPortal } from "react-dom";
// import { connect } from 'react-redux'

export default class TogetherDetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOn: false,
        };
    }

    render() {
        return (
            <div>
                 
                <div className="title"><h4>함께 할 IT 기업을 구합니다.</h4></div>
                <div className="content">지원부분 1) Web programmer , 2) AGV Engineer, 3) WMS Developer</div>
            </div>

        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TogetherDetailComponent)

