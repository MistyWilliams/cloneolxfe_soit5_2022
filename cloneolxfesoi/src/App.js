import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import { BrouserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Template } from './components/MainComponents';
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

const Page = (props) => {
  return (
    <BrouserRouter>
      <Template>
       <Header />
       <Routes />
       <Footer />
      </Template>
    </BrouserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Page)