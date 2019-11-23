const Home = (function() {

    return {

        giveHtml: function() {
            return `
            <div class="jumbotron animated slideInDown fast">
            <div class="row">



                <div class="col-md-1 mr-auto">
                    <img class="img-fluid rounded-circle ml-auto animated zoomIn slow" src="assets/Me.jpg" alt="">
                </div>
                <div class="col-md-11 mt-10">
                    <h1 class="display-4">Hello</h1>
                    <p class="lead">I'm a web developer and a game developer with a bachelor's degree in computer science and a whack coding experience</p>

                </div>
            </div>

            <hr class=" col-md-4 ">
            <p>
            I worked as a 3D programmer and web developer at a software development company and used various technologies and programming laguages to create a web application and an in house video game. <br> In 2019 I developed and published my own
            game. On top of that I do Freelance web development.
        </p>
        <p>
            I've enjoyed everything I've done so far, be it the challenges of front-end, backend and 3D development that I tackled at my former workplace, or the complexity of developing my own game, or the intricacy of making a website for a client.
        </p>
        <p>
            I'm always willing to learn new technologies and expand my knowledge of what I know.
        </p>

        </div>
        <div id="alert"></div>
        <div class="jumbotron animated slideInUp slow">
            <table style="height: 100px;">
                <tbody>
                    <tr class="tablerow">
                        <td class="align-middle" style="font-size: 30px;">
                            Contact:
                        </td>
                        <td class="align-middle">
                            <i class="far fa-envelope " style="font-size: 3em"> </i>
                        </td>
                        <td class="align-middle mail" id="mail" style="font-size: 20px;" data-toggle="tooltip" data-placement="top" title="" data-original-title="Copy to clipboard">&emsp; gabipaldavid@gmail.com

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
        </div>`
        }
    }
})()