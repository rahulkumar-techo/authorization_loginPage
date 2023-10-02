import React from "react";

function Home() {
  return (
    <div className="custom__homePage ">
      <div className=" backdrop-blur-3xl text-white items-center px-5 py-2 h-auto" >
        <h3 className="text-center font-extrabold ">WELCOME TO MY AUTHENTICATION PAGE THANKS TO VISIT HERE ! </h3>

        <div className="md:flex justify-center items-center gap-2 ">
          <div className=" md:w-1/2 flex justify-center items-center " style={{minHeight:"70vh"}}>
            <img
              className=" md:w-1/3 w-96"id="loading"
              src="https://th.bing.com/th/id/R.f620109cf09c199e74ff5cdc68609608?rik=NH%2ftiz7F1TZBTw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2016%2f05%2fvector-logo-templates_403097.png&ehk=noSy1RiiCIO3MC3VGzniSWAzCKvExLFgJe4zLJu6dMg%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div className=" md:w-1/2">
            <article className=" font-sans">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                cumque molestias perspiciatis illum maiores recusandae, quia
                voluptatibus temporibus distinctio sed quis officia explicabo
                hic accusamus ad numquam exercitationem enim nostrum pariatur
                dolore! Possimus, quasi. Totam dolores autem libero ad velit
                sunt, nulla, voluptate excepturi quo iste eveniet expedita
                fugiat odio nemo eos inventore temporibus iure quaerat eius
               
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
