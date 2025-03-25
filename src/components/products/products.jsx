import React from "react";
import './products.css'

export default function Products(){

    return(
        <div className="productSection">
            <div className="header">
            <h1 className="titleHeader">Our Meats</h1>
            </div>
            <div className="MeatCards">
                <h1 className="title">Cow Meat</h1>
                <div className="meatCard">
                    <img src="src/assets/cowmeat1.PNG" alt="cow meat jpg" />
                    <h2 className="title">Cow Meat 20 way share </h2>
                    <p className="description">The cow is shared equally amongst 20 people</p>
                    <h2 className="price">60000</h2>
                    <button>Purchase</button>
                </div>
                <div className="meatCard">
                    <img src="src/assets/cowmeat2.PNG" alt="cow meat jpg" />
                    <h2 className="title">Cow Meat 10 way share </h2>
                    <p className="description">The cow is shared equally amongst 10 people</p>
                    <h2 className="price">110000</h2>
                    <button>Purchase</button>
                </div>
                <div className="meatCard">
                    <img src="src/assets/cowmeat3.PNG" alt="cow meat jpg" />
                    <h2 className="title">Cow Meat 5 way share </h2>
                    <p className="description">The cow is shared equally amongst 5 people</p>
                    <h2 className="price">238000</h2>
                    <button>Purchase</button>
                </div>
            </div>
            <div className="GoatCards">
            <div className="header">
                <h1 className="title">Goat Meat</h1>
            </div>
                <div className="meatCard2">
                    <img src="src/assets/goatmeat2.PNG" alt="cow meat jpg" />
                    <h2 className="title">Goat Meat 2 way share</h2>
                    <p className="description">The goat is shared equally amongst 2 people</p>
                    <h2 className="price">39000</h2>
                    <button>Purchase</button>

                </div>
                <div className="meatCard2">
                    <img src="src/assets/goatmeat3.PNG" alt="cow meat jpg" />
                    <h2 className="title">Goat Meat 4 way share </h2>
                    <p className="description">The goat is shared equally amongst 4 people</p>
                    <h2 className="price">20000</h2>
                    <button>Purchase</button>
                </div>
                <div className="meatCard2">
                    <img src="src/assets/goatmeat1.PNG" alt="cow meat jpg" />
                    <h2 className="title">One Full Goat</h2>
                    <p className="description">You get one Full Goat</p>
                    <h2 className="price">77000</h2>
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    )
}
