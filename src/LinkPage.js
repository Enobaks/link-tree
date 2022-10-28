import React from "react";
import { Link } from "react-router-dom";
import profileImage from "./assets/profile__img.png";
import footerImage from "./assets/I4G.png";
// import Button from "./components/Button";

const LinkPage = () => {
  const btnList = [
    { title: "Twitter Link", id: "btn__twitter", redirect: "twitter#" },
    {
      title: "Zuri Team",
      id: "btn__zuri",
      redirect: "https://training.zuri.team/",
    },
    { title: "Zuri Books", id: "books", redirect: "http://books.zuri.team " },
    {
      title: "Python Books",
      id: "book__python",
      redirect: `http://books.zuri.team/python-for-beginners?ref_id=<yourslackname>`,
    },
    {
      title: "Background Check for Coders",
      id: "pitch",
      redirect: "https://background.zuri.team,",
    },
    {
      title: "Design Books",
      id: "book__design",
      redirect: "https://books.zuri.team/design-rules ",
    },
  ];
  return (
    <div className="wrap w-full h-screen">
      <div className="profile-section mt-16 flex flex-col justify-center items-center w-full relative">
        <div>
          <img
            src={profileImage}
            alt="Profile_Image"
            id="profile__img"
            className="w-20 h-20"
          />
        </div>
        <p
          className="username text-primary text-xl font-bold mt-6"
          id="twitter"
        >
          Annette Black
        </p>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-64"
        >
          <path
            d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z"
            stroke="#98A2B3"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="buttons-wrap w-4/5 m-auto h-auto flex flex-col gap-y-6 mt-14">
        {btnList &&
          btnList.map((button, i) => (
            <Link
              key={i}
              className="h-16 bg-stale border w-full rounded-lg flex justify-center items-center"
              to={button.redirect}
              id={button.id}
            >
              {button.title}
            </Link>
          ))}
      </div>
      <div className="social-links flex h-24 justify-center items-center gap-x-7 mt-4">
        <svg
          width="24"
          height="24"
          id="slack"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4104 21.75 9.37496C21.75 8.33952 20.9105 7.50012 19.8751 7.50012C18.8395 7.50012 18 8.33959 18 9.37512V11.2498H19.8752ZM14.625 11.2498C15.6605 11.2498 16.5 10.4103 16.5 9.3748V4.12512C16.5 3.08959 15.6605 2.25012 14.625 2.25012C13.5895 2.25012 12.75 3.08959 12.75 4.12512V9.3748C12.75 10.4103 13.5895 11.2498 14.625 11.2498Z"
            fill="#2EB67D"
          />
          <path
            d="M4.12484 12.7502C3.08939 12.7502 2.25 13.5896 2.25 14.625C2.25 15.6605 3.08947 16.4999 4.12492 16.4999C5.16045 16.4999 6 15.6604 6 14.6249V12.7502H4.12484ZM9.375 12.7502C8.33947 12.7502 7.5 13.5897 7.5 14.6252V19.8749C7.5 20.9104 8.33947 21.7499 9.375 21.7499C10.4105 21.7499 11.25 20.9104 11.25 19.8749V14.6252C11.25 13.5897 10.4105 12.7502 9.375 12.7502Z"
            fill="#E01E5A"
          />
          <path
            d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.625 21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5896 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625C21.7498 13.5895 20.9104 12.75 19.8748 12.75L14.6251 12.75C13.5896 12.75 12.7501 13.5895 12.7501 14.625Z"
            fill="#ECB22E"
          />
          <path
            d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375Z"
            fill="#36C5F0"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4627_392534)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_4627_392534">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="footer h-40 flex justify-between items-center">
        <p className="text-2xl text-black font-bold ml-28">
          Zuri
          <span className="rounded-lg bg-red-600 h-3 w-3 inline-block"></span>
          Internship
        </p>
        <p>HNG Internship 9 Frontend Task</p>
        <div className="mr-28">
          <img src={footerImage} alt="logo" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
