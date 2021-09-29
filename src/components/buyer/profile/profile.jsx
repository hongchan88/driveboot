import cogoToast from "cogo-toast";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import Imageupload from "../../service/imageupload";
import styles from "./profile.module.css";

const imageupload = new Imageupload();
const Profile = ({ user, updateProfile, profile }) => {
  const { register, handleSubmit } = useForm();
  const [editToggle, setEdit] = useState(false);
  const [Saveprofile, setSaveprofile] = useState();
  const uploadRef = useRef();
  const [imageUrl, setImage] = useState(null);
  const [isloading, setisLoading] = useState(false);

  useEffect(() => {
    setSaveprofile(profile);
  }, [profile]);

  useEffect(() => {
    if (profile?.profileimage) {
      setImage(profile?.profileimage);
    } else {
      setImage(
        "https://res.cloudinary.com/dwbsxpk82/image/upload/v1632378336/boy_xkri9o.png"
      );
    }
  }, [profile]);

  const onSubmit = (data, event) => {
    setEdit(false);
    setSaveprofile(data);

    const newData = {
      ...Saveprofile,
      id: user.uid,
      profileimage: imageUrl,
    };
    updateProfile(newData);
    cogoToast.success("Success saved!");
  };

  const uploadImg = (e) => {
    uploadRef.current.click();
  };

  const onChangeValue = (e) => {
    setEdit(true);
    const newData = {
      ...Saveprofile,

      [e.currentTarget.name]: e.currentTarget.value,
    };
    setSaveprofile(newData);
  };
  const submitData = () => {
    updateProfile(Saveprofile);
  };

  const onChange = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const file = e.target.files[0];
    if (file) {
      const imgUrl = await imageupload.upload(file);
      setImage(imgUrl.url);
      setEdit(true);
    }
    setisLoading(false);
  };

  return (
    <>
      <section className="w-5/6 max-w-xl">
        <div className="mt-10 sm:mt-0">
          <div className="mt-5 md:mt-0">
            <div className="flex flex-col items-center px-4 mb-10 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                My detail
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-start-2 col-end-6 h-28 ">
                      <div className={styles.loadingCotainer}>
                        <div className={styles.loading}>
                          <ClipLoader
                            color="gray"
                            loading={isloading}
                            size="25"
                          />
                        </div>
                      </div>
                      <div className="flex w-full justify-center">
                        <div className="flex justify-center w-28 h-28 rounded-full overflow-hidden">
                          <input
                            type="file"
                            className="hidden"
                            id="img"
                            ref={uploadRef}
                            onChange={onChange}
                          />

                          <div className={styles.container}>
                            <img
                              alt="profileimg"
                              onClick={isloading ? null : () => uploadImg()}
                              src={
                                imageUrl ||
                                "https://res.cloudinary.com/dwbsxpk82/image/upload/v1632378336/boy_xkri9o.png"
                              }
                              className="cursor-pointer w-32 h-32 hover:opacity-75"
                            />
                            <div className={styles.overlay}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 right-0 cursor-pointer"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                onClick={isloading ? null : () => uploadImg()}
                              >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        {...register("firstname")}
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={Saveprofile?.firstname || ""}
                        onChange={onChangeValue}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        {...register("lastname")}
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={Saveprofile?.lastname || ""}
                        onChange={onChangeValue}
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        name="email"
                        id="email"
                        value={Saveprofile?.email || ""}
                        onChange={onChangeValue}
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Car number plate
                      </label>
                      <input
                        {...register("plate")}
                        type="text"
                        name="plate"
                        id="plate"
                        onChange={onChangeValue}
                        value={Saveprofile?.plate || ""}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={submitData}
                    type="submit"
                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      editToggle
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "bg-gray-600 hover:bg-gray-700 cursor-not-allowed "
                    } `}
                    disabled={editToggle ? null : true}
                  >
                    {editToggle ? "Save" : "Saved"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
