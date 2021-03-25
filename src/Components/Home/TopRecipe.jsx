import React from 'react'

function TopRecipe(props){
return(
<section>
    <div className="container">

        <div className="row" data-aos="fade-up">
            <div className="col-md-12">
                <div className="main-heading">

                    <h2>Find top Recipies of <span>Week</span></h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div class="row extra-mrg">
                <div class="col-md-4 col-sm-6">
                    <div class="grid-view brows-job-list">
                        <div class="card-img-top">
                            <img src={props.data[0].image} class="img-responsive" alt="" />
                        </div>
                        <div class="brows-job-position">
                            <h3><a href="job-detail.html">{props.data[0].title}</a></h3>
                        </div>
                        <div class="job-position">
                            <span class="job-num"><i class="fa fa-heart"></i> {props.data[0].likes}</span>
                        </div>
                        
                        <ul class="grid-view-caption">
                            <li>
                                
                                    <p className="usedIngredient"><i class="fa fa-check"></i>Used Ingredient : {props.data[0].usedIngredientCount} </p>
                            </li>
                            <li>
                            <p className="missedIngredient"><i class="fa fa-times"></i>Missed Ingredient : {props.data[0].missedIngredientCount} </p>
                            </li>
                        </ul>
                     
                    </div>
                </div>
            </div>


        </div>

    </div>
</section>


);
}

export default TopRecipe