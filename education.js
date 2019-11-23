const Education = (function() {

    return {

        giveHtml: function() {
            return `
            <div class="jumbotron">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-6 animated slideInDown fast" style="max-width: 90rem;">
                        <div class="card border-dark mb-3 z-depth-1 " style="max-width: 90rem;">
                            <div class="card-header" style="text-align: center;"><i class="fas fa-university" style="font-size: 3em"></i></div>
                            <div class="card-body">
                                <h4 class="card-title"> Polytechnic University of Timisoara</h4>
                                <h3 class="card-title">Computer Science</h3>
                                <p class="card-text" style="font-size: 20px;">I studied here for 1 year. Here I started my foundation in programming.</p>
                            </div>




                            <div class="card-header" style="text-align: center;"></div>
                            <div class="card-body">
                                <h4 class="card-title">VIA University College</h4>
                                <h3 class="card-title">ICT Engineering </h3>
                                <p class="card-text" style="font-size: 20px;">I jumped at the opportuniy to study in Denmark so I quit my last University. <br><br> Unfortunately I had to return back to Romania after one year for personal reasons</p>
                            </div>



                            <div class="card-header" style="text-align: center;"></div>
                            <div class="card-body">
                                <h4 class="card-title">West University of Timisoara</h4>
                                <h3 class="card-title">Computer Science</h3>
                                <p class="card-text" style="font-size: 20px;">I didn't want to abandon the idea of Computer Science so I enrolled here and graduated in 2017</p>
                                <p class="card-text" style="font-size: 18px;"><b> Thesis: Design Elements in Video Games in Real Time</b></p>
                                <p class="card-text" style="font-size: 18px;">The application is a top down 3D game made in Unity. <br> It offers randomly generated levels that have the aspect of a low poly cave system achieved using a combination of Cellular Automata algorithm, the Marching Squares
                                    algorithm and Flooding Fill algorithm. <br> The player is a cube that can move around the cave, generate a bright blue light and has a limited field of view.<br> The threats in this cave are small red cubes that will
                                    follow the player using the optimized A* pathfinding algorithm. Their movement has been made more organic by using the Box Blur algorithm.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card border-primary mb-3 z-depth-1 col-md-4  animated slideInDown fast" style="max-width: 90rem; max-height: 30rem;">
                        <div class="card-header" style="text-align: center;"><i class="fas fa-certificate" style="font-size: 3em"></i></div>
                        <div class="card-body">
                            <h4 class="card-title"> Diploma</h4>
                            <h3 class="card-title">Cambridge Certificate of Advanced English</h4>
                        </div>



                        <div class="card-header" style="text-align: center;"></div>
                        <div class="card-body">
                            <h4 class="card-title">Bachelor's Degree</h4>
                            <h3 class="card-title">Computer Science</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div id="alert"></div>
        <!-- Contact -->
        <div class="jumbotron animated slideInUp slow">
        <table style="height: 100px;">
            <tbody>
                <tr class="tablerow">
                    <td class="align-middle" style="font-size: 30px;">
                        Contact:
                    </td>
                    <td class="align-middle mail">
                        <span class="far fa-envelope clickable" id="mail" style="font-size: 3em" data-toggle="tooltip" data-placement="top" title="" data-original-title="Copy to clipboard gabipaldavid@gmail.com"> </span>
                    </td>
                </tr>
                <tr>
                    <td class="align-middle" style="font-size: 30px;">

                    </td>
                    <td class="align-middle">
                        <a href="https://www.linkedin.com/in/gabriel-palincas-4887b2129/"> <i class="fab fa-linkedin " style="font-size: 3em;"> </i></a>
                    </td>


                </tr>
            </tbody>
        </table>
    </div>

        <!-- ---- -->`
        }
    }
})()