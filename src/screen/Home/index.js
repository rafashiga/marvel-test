import React, { Component } from 'react'
import HomeHero from '../../components/Hero'
import Comics from '../../components/Home/Comics';
import backgroundImage from '../../assets/home.jpg'
import News from '../../components/Home/News';
import Characters from '../../components/Home/Characters';
class Home extends Component{

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render(){
        return(
            <div className="home">
                <HomeHero title="BEM-VINDO" backgroundImage={backgroundImage}/>
                <News />              
                <Comics />  
                <Characters />
            </div>
        )
    }

}

export default Home;