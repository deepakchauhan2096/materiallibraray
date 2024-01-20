import React, { useState } from "react";
import "./Category.css";
// import Data from "./category.json";

const SelectMaterial = [
   "Bulding Material"
  , "Plumbing"
  , "Electricals"
  , "Wood Work"
  , "Windows"
  , "Doors"
  , "Tiles"
]

const BuildingMaterial = [
  "Bricks"
 , "cement"
 , "reinforcement"
 , "aggrigate"
 , "Concrete"
 , "Bitumen"
 , "White cement"
 , "Stone block"
 , "Metal"
 , "Paints"
 , "Soil"
 ,
]


const Bricks = [
  "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 , "Bricks"
 ,
]



const SelectServices = [
  "Bulding Material"
  , "Plumbing"
  , "Furnishing"
  , "painting"
]


export default function CategoryComponents() {


  const [showList, setShow] = useState(false)
  const [showSub, setSub] = useState(false)



  return (
    <>
      <div className="container-fluid dis-container" >
        {/* heading */}
        <div className="row pad">
          <div className="col-8">
            <div className="row dis-title">Category</div>
            <div className="row dis-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-4 pr-0">
            <button type="button" className="submit-top-button float-right">Submit</button>
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="headline"></div></div>
        {/* headline */}
        <div className="row border category-field-height">
          <div className="col subcategory-list-area">
            <div className="row category-search-field-area">
              <form className="search-field-area">
                <input class="nosubmit" type="search" placeholder="Search..." />
              </form>
            </div>
            <div className="row category-subcategory-area">
              <div className="col sub-category-list-field">
                <div className="row category-list-area">
                  <div className="col category">
                    <div className="row category-list">
                      <p className="materials">Materials</p>
                      <div className="nolist-material-category">
                        {SelectMaterial.map((item) =>
                          <span className="list-text"><input className="category-checkbox" type="radio" name="checkbox" onClick={() => setShow(!showList)} placeholder="hello" /> {item}</span>
                        )}
                      </div>
                      <p className="services">Services</p>
                      <div className="nolist-service-category">
                        {SelectServices.map((item) =>
                          <span className="list-text"><input className="category-checkbox" type="radio" onClick={() => setShow(!showList)} placeholder="hello" /> {item}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col sub-category">
                  <div className="nolist-material-sub-category">
                    {showList ? <div className="row sub-category-list">
                    {BuildingMaterial.map((item) =>
                        <span className="list-text"><input className="sub-category-checkbox" type="radio" onClick={() => setSub(!showSub)} placeholder="hello" /> {item}</span>)}
                    </div> : null}
                    </div>
                  </div>
                  <div className="col sub-sub-category">
                    {showList ? <div className="row sub-sub-category-list">
                      {showSub ? <>
                        {Bricks.map((item) => <span className="list-text"><input type="radio" placeholder="hello" /> {item}</span>)}
                        </> : null}
                    </div> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col border show-subcategory-area">
            show selected list
          </div>
        </div>
      </div>

    </>
  );
}
