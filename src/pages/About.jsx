import React from "react";

function About() {
  const Img =
    "https://th.bing.com/th/id/OIP.VXUN1mmg-iRRxP4Lt0f3mQHaD4?pid=ImgDet&rs=1";

  const user = (
    <div className=" md:w-1/4">
      <img className=" w-full " src={Img} alt="" />

      <article className="flex flex-col">
        <p>user</p>
      </article>
    </div>
  );

  const about = (
    <>
      <div className="my-2 flex flex-col  hideen  ">
        <p>userId : </p>
        <p>Name: </p>
        <p>Email : </p>
        <p>Phone : </p>
        <p>Profession : </p>
      </div>
    </>
  );

  const userInfo = (
    <div className="" style={{ minHeight: "100px", height: "auto" }}>
      <div className="flex justify-between">
        <div>userDetails :</div>
        <button className=" px-4 py-2 rounded-md bg-green-300 hover:bg-green-700">
          Edit profile
        </button>
      </div>
      {/* actions */}
      <div className="">
        <div>
          <div className="flex justify-around my-3">
            <span>About</span>
            <span>Timeline</span>
          </div>
          <hr />

          <div>{about}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className=" grid md:grid-cols-2 md:px-10 px-3 py-5  grid-cols-1">
        {user}
        {userInfo}
      </div>
    </>
  );
}

export default About;
