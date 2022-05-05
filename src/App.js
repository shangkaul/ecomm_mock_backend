import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function App() {

const [cat,setCat]=useState([]);


useEffect(()=>{


 
   
  const get_cat = async () =>{
    try{
    let res= await axios.get("/api/categories");
    setCat(cat.concat(res.data.categories));

}
catch(err){
  console.log(err);
}
}
get_cat();
},[])

console.log(cat);
  return (
  <div className='App'>
    <section className="featured-bar">
      {
      cat.map((item)=>

        (<Link to="/listing" key={item._id}><div className="feat-card">
        <img src={item.img_src} alt="category_img"/>
        <span className="cat-label">{item.categoryName}</span>
        </div></Link>))
        
      }
                                               
      </section>
        <section className="hero">
            <Link to="/listing"><img alt="hero_img" className="hero-img" src="assets/img/hero.webp"/></Link>
        </section>

        <section className="hot-list">
            <div className="card img-card card-horizontal hot-card">
                  <div className="card-img">
                    <img alt="Hot Items" src="https://picsum.photos/200/300" />
                  </div>
                  <div className="horizontal-content">        
                  <div className="card-title">New Arrivals
                  </div>
                  <div className="card-content">
                    lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                    dolor set imaat
                  </div>
                </div>
                </div>
                <div className="card img-card card-horizontal hot-card">
                    <div className="card-img">
                      <img alt="Hot Items" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="horizontal-content">        
                    <div className="card-title">New Arrivals
                    </div>
                    <div className="card-content">
                      lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                      dolor set imaat
                    </div>
                  </div>
                  </div>
                  <div className="card img-card card-horizontal hot-card">
                    <div className="card-img">
                      <img alt="Hot Items" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="horizontal-content">        
                    <div className="card-title">New Arrivals
                    </div>
                    <div className="card-content">
                      lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                      dolor set imaat
                    </div>
                  </div>
                  </div>
                  <div className="card img-card card-horizontal hot-card">
                    <div className="card-img">
                      <img alt="Hot Items" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="horizontal-content">        
                    <div className="card-title">New Arrivals
                    </div>
                    <div className="card-content">
                      lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                      dolor set imaat
                    </div>
                  </div>
                  </div>
                  <div className="card img-card card-horizontal hot-card">
                    <div className="card-img">
                      <img alt="Hot Items" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="horizontal-content">        
                    <div className="card-title">New Arrivals
                    </div>
                    <div className="card-content">
                      lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                      dolor set imaat
                    </div>
                  </div>
                  </div>
                  <div className="card img-card card-horizontal hot-card">
                    <div className="card-img">
                      <img alt="Hot Items" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="horizontal-content">        
                    <div className="card-title">New Arrivals
                    </div>
                    <div className="card-content">
                      lorem ipsum dolor set imaat. lorem ipsum dolor set imaat. lorem ipsum
                      dolor set imaat
                    </div>
                  </div>
                  </div>
        </section>
        </div>
  );
}

export default App;
