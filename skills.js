const Skills = (function() {

    return {

        giveHtml: function() {
            return `
            <div class="container-fluid">
            <div class="row">
                <div class="jumbotron col-md-9" id="div1">
                    <h1 class="display-4">Main skills</h1>
                    <br><br>
                    <div class="animated slideInLeft faster">
                        <p><i class="fab fa-js-square" style="color: rgb(228, 174, 13);font-size: 2em"></i> JavaScript </p>
                        <div class="progress ">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 70%; background-color: rgb(228, 174, 13);" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br>
                    <div class="animated slideInRight faster">
                        <p><i class="fab fa-html5" style="color: #CB4B16;font-size: 2em"></i> HTML </p>
                        <div class="progress bg-bar">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 60%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br>
                    <div class="animated slideInLeft">
                        <p><i class="fab fa-css3-alt" style="color: #268BD2;font-size: 2em"></i> CSS </p>
                        <div class="progress bg-bar">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 60%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br>
                    <div class="animated slideInRight">
                        <p><i class="fab fa-bootstrap" style="color: #553C7B;font-size: 2em"></i> Bootstrap </p>
                        <div class="progress bg-bar">
                            <div class="progress-bar progress-bar-striped boot-color" role="progressbar" style="width: 65%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br>
                    <div class="animated slideInLeft slow">
                        <p><i class="fas fa-cube" style="color: black;font-size: 2em"></i> Unity </p>
                        <div class="progress bg-bar">
                            <div class="progress-bar progress-bar-striped black" role="progressbar" style="width: 70%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <br>
                    <div class="animated slideInRight slow">
                        <p><i class="fab fa-java" style="color: #bf3030;font-size: 2em"></i> Java </p>
                        <div class="progress bg-bar">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 60%; background-color: #bf3030;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="jumbotron col-md-3" style="text-align: center;" id="div2">
                    <h1 class="display-4">Other skills</h1>
                    <br><br>
                    <span class="badge badge-dark animated zoomInDown dmicon">AJAX</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">Php</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInLeft dmicon">MySql</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">REST</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInLeft dmicon">SCALA</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">Git</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInLeft dmicon">GitHub</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">Three.js</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInLeft dmicon">Lua</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">Wordpress</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInLeft dmicon">Debugging</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInRight dmicon">JSON</span> &emsp;<br><br>
                    <span class="badge badge-dark animated zoomInUp dmicon">Agile</span> &emsp;
                </div>
            </div>
        </div>
        <div class="jumbotron animated slideInUp slow">
            <h3 class="display-4">Competencies</h4>
                <table class="table mt-5">
                    <tbody>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Ability to code in multiple languages</td>
                        </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Experienced in web development</td>
                        </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Experienced in dealing with development issues</td>
                        </tr>
                        <tr class="table-default">
                        <td style="font-size: 20px;">Experienced in game development</td>
                    </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Problem solving inclination</td>
                        </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Strong ability to work independently and as part of a team</td>
                        </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Able to work under pressure, meet deadlines and multitask</td>
                        </tr>
                        <tr class="table-default">
                            <td style="font-size: 20px;">Highly organized and able to prioritize own work schedule</td>
                        </tr>
                    </tbody>
                </table>
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
        </div>
`
        }
    }
})()