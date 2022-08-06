import React from "react";

const MyAccount = () => {
  return (
    <>
      <div className="mt-[80px] md:flex">
        <div className="h-[2px]"></div>
        <div className="flex justify-center bg-blue-500 pt-[50px] pb-[10px] mx-[10px] rounded md:w-[40vh] h-[100%] mt-[10px]">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-40 "
            alt="Avatar"
          />
        </div>
        <div className="flex-col md:w-[100%] text-center bg-blue-300 mx-[10px] mt-[10px] md:mr-[40px] rounded">
          <p>Account Info</p>
          <p>Fullname</p>
          <p>Bernard Mendiola</p>
          <p>Contact</p>
          <p>911</p>
          <p>Email</p>
          <p>bernie@gmail.com</p>
          <i class="fa-solid fa-user-pen fa-3x"></i>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
