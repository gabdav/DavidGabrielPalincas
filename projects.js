const Projects = (function() {

    return {

        giveHtml: function() {
            return `
            <div class="jumbotron">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card text-white bg-primary mb-3 animated slideInDown" style="max-width: 30rem;">

                            <div class="view">
                                <img src="assets/Insignety/insignety.jpg" class="hover-shadow img-fluid">
                                <div class="mask flex-center waves-effect waves-light rgba-black-light ml-auto" style="max-width: 50%;" onclick="Projects.createModal('Insignety',8,'insignety','jpg','');openModal('myModal');showSlides(1,'Insignety-Slides')">
                                    <p class="white-text" style="font-size: 30px;">8+</p>
                                </div>
                            </div>
                            <div class="card-header fontCr">Insignety</div>
                            <div class="card-body">
                                <h4 class="card-title">3D Programmer and Web developer</h4>
                                <p class="card-text text-light">A web application for creating custom jewlery made with Three.js. <br> I was responsible with implementing new 3D features like: complex changable waves, text messages, diamond positioning, automatic photorealistic image
                                    generation
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card text-white bg-primary mb-3 animated slideInDown" style="max-width: 30rem;">

                            <div class="view">
                                <img src="assets/Arome/arome.jpg" class="hover-shadow img-fluid">
                                <div class="mask flex-center waves-effect waves-light rgba-black-light ml-auto" style="max-width: 50%;" onclick="Projects.createModal('Arome',3,'arome','jpg','');openModal('myModal');showSlides(1,'Arome-Slides')">
                                    <p class="white-text" style="font-size: 30px;">3+</p>
                                </div>
                            </div>
                            <div class="card-header fontCr">Freelance</div>
                            <div class="card-body">
                                <h4 class="card-title">Web developer</h4>
                                <p class="card-text text-light">
                                    <a href="http://aromeproprii.ro/" style="font-size: 17px; color: rgb(255, 166, 0); "> Aromeproprii</a>
                                    <br><br> A website for agricultural producers made in Wordpress. <br> I implemented the map and the filters and improved the code all around the website</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-white bg-primary mb-3 animated slideInDown" style="max-width: 30rem;">

                            <div class="view">
                                <img src="assets/Cyber/cyber.jpg" class="hover-shadow img-fluid">
                                <div class="mask flex-center waves-effect waves-light rgba-white-slight ml-auto" style="max-width: 50%;" onclick="Projects.createModal('Cyber',5,'cyber','jpg','white');openModal('myModal');showSlides(1,'Cyber-Slides')">
                                    <p class="white-text" style="font-size: 30px;">5+</p>
                                </div>
                            </div>
                            <div class="card-header fontCr">Indie</div>
                            <div class="card-body">
                                <h4 class="card-title">Game developer</h4>
                                <p class="card-text text-light">A game I have developed and published. The game is available to download for free here: <br>
                                    <a href="https://thebudgeteers.itch.io/cyberblocks" style="font-size: 17px; color:rgb(255, 0, 149); "> Cyber<spans style="font-size: 17px; color:rgb(0, 204, 255); " >Blocks</span></a>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="card text-white bg-primary mb-3 animated slideInDown" style="max-width: 30rem;">

                            <div class="view">
                                <img src="assets/Thesis/thesis.jpg" class="hover-shadow img-fluid">
                                <div class="mask flex-center waves-effect waves-light rgba-white-slight ml-auto" style="max-width: 50%;" onclick="Projects.createModal('Thesis',3,'thesis','gif','white');openModal('myModal');showSlides(1,'Thesis-Slides')">
                                    <p class="white-text" style="font-size: 30px;">3+</p>
                                </div>
                            </div>
                            <div class="card-header fontCr">Thesis</div>
                            <div class="card-body">
                                <h4 class="card-title">Design Elements in Video Games</h4>
                                <p class="card-text text-light">This is the thesis used for my bachelor's degree. A game with randomly generated levels and enemies that follow you. <br> Numerous algorithms have been implemented to make this game. Read more about it here: <br>
                                    <a href="https://drive.google.com/file/d/1ePUa55bDNU5LnHIimXxbS4ALxzHAqN0Z/view?usp=sharing" style="font-size: 17px; color: rgb(78, 155, 255); "> Thesis</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Insignety Modal -->
                <div id="myModal" class="modal">
                   
                    <div class="modal-content">
                        <div class="ctn">

                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div id='alert'></div>
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
    </div>`
        },

        createModal: function(name, nrOfImg, nameSmall, imgType, color) {
            let mc = document.querySelector('.modal-content');
            mc.innerHTML = '';
            let ctn = document.createElement('div');
            ctn.className = "ctn";
            mc.appendChild(ctn);

            let holder = '';
            const span = `<span class="close cursor" style="color: ${color}" onclick="closeModal('myModal')">&times;</span>`;
            const a1 = `<a class="prev " style="color: ${color}" onclick="plusSlides(-1,'${name}-Slides') ">&#10094;</a>`;
            const a2 = `<a class="next " style="color: ${color}"onclick="plusSlides(1,'${name}-Slides') ">&#10095;</a>`;
            for (let i = 1; i <= nrOfImg; i++) {
                const nestDiv1 = document.createElement('div');
                nestDiv1.className = `${name}-Slides`;
                const nestDiv2 = document.createElement('div');
                nestDiv2.className = "numbertext";
                nestDiv2.style = `color: ${color}`;
                nestDiv2.innerHTML = `${i} / ${nrOfImg}`;
                const thumb = document.createElement('img');
                thumb.src = `assets/${name}/${nameSmall}-${i}.${imgType}`;
                if (imgType === 'gif') {
                    mc.style = 'width:44%; height:auto';
                } else {
                    mc.style = 'width:100%; height:auto';
                }

                thumb.style = 'width:100%';

                nestDiv1.appendChild(nestDiv2);
                nestDiv1.appendChild(thumb);
                holder += nestDiv1.outerHTML;
            }
            ctn.innerHTML = holder;
            ctn.parentNode.insertBefore(new DOMParser().parseFromString(span, 'text/html').body.firstElementChild, ctn);
            ctn.parentNode.insertBefore(new DOMParser().parseFromString(a2, 'text/html').body.firstElementChild, ctn.nextSibling);
            ctn.parentNode.insertBefore(new DOMParser().parseFromString(a1, 'text/html').body.firstElementChild, ctn.nextSibling);

        }
    }
})()