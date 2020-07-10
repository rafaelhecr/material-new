import React from 'react';
import '../../App.css'

class Modal extends React.Component
{
    constructor(){
        super();
        this.myModal = React.createRef();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleCLickOutside = this.handleCLickOutside.bind(this)
    }


    componentDidMount(){
        document.addEventListener('mousedown',this.handleCLickOutside)
    }

    componentWillUnmount(){
        document.addEventListener('mousedown', this.handleCLickOutside)
    }

    componentDidUpdate(prevProps){
        if(prevProps.open !== this.props.open)
            if(this.props.open)
                this.openModal()
            else
                this.closeModal()
    }

    handleCLickOutside(e){
        if(e.target.className === "GNP-modal" && this.myModal.current.style.display === "block"){
            this.closeModal()
        }
    }

    openModal(){
        this.myModal.current.style.display = "block";
    }

    closeModal(){
        this.props.closeModalFromChild(false);
        this.myModal.current.style.display = "none";
    }

    render(){
        return(
            <div ref={this.myModal} className="GNP-modal">
                <div className="GNP-modal-content">
                    <div className="GNP-modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;