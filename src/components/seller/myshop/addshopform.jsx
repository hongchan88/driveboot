import cogoToast from "cogo-toast";
import React, { useRef, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Imageupload from "../../service/imageupload";
import SellerProducts from "../sellerProducts/sellerproducts";
import styles from "./addshopform.module.css";

const imageupload = new Imageupload();

const Addshopform = ({
  shop,
  editShop,
  id,
  updateTradingTime,
  tradingToggle,
  tradingTime,
  filteredSearch,
  optionSearch,
  filtered,
  searchOption,
  deleteProduct,
  addProduct,
  setFiltered,
}) => {
  const [isloading, setisLoading] = useState(false);

  const infoRef = useRef();
  const pickupRef = useRef();

  const productImgUpload = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const imgUrl = await imageupload.upload(file);

      cogoToast.success("Success uploaded the image!");
      return imgUrl.url;
    }
  };

  const imageNewUpload = async (e) => {
    e.preventDefault();

    setisLoading(true);
    const file = e.target.files[0];

    if (file) {
      const imgUrl = await imageupload.upload(file);

      cogoToast.success("Success saved the image!");

      const updated = {
        ...shop,
        [e.target.name]: imgUrl.url,
      };
      editShop(id, updated);
    }
    setisLoading(false);
  };

  const imageChange = (e, productImgRef) => {
    switch (e.target.name) {
      case "infoImg":
        infoRef.current.click();
        break;
      case "pickupImg":
        pickupRef.current.click();
        break;
      case "productImg":
        productImgRef.current.click();

        break;
      default:
        break;
    }
  };

  const onChange = ({ name, value }) => {
    const updated = {
      ...shop,
      [name]: value,
    };

    editShop(id, updated);
  };

  const tradingToggleOn = (e) => {
    const date = e.currentTarget.name;

    const updated = { ...tradingToggle };

    if (updated[date]) {
      updated[date] = false;
    } else {
      updated[date] = true;
    }

    updateTradingTime(id, updated, "opencloseDate");
  };

  const timeOnChange = (e) => {
    const date = e.currentTarget.id;
    const openOrclose = e.currentTarget.name;
    const time = e.currentTarget.value;

    const updated = { ...tradingTime };
    updated[date][openOrclose] = time;

    updateTradingTime(id, updated, "opencloseTime");
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Info</Tab>
        <Tab>Pick Up location</Tab>
        <Tab>Trading Hours</Tab>
        <Tab>Products</Tab>
      </TabList>

      <TabPanel>
        <section className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  <EditText
                    onSave={onChange}
                    name="name"
                    defaultValue={shop?.name}
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>

                <div className="mt-4 text-gray-500 dark:text-gray-400 ">
                  <EditTextarea
                    onSave={onChange}
                    name="desc"
                    defaultValue={shop?.desc}
                    rows={7}
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>
                <span className="text-xl font-bold">
                  Add tags to your store
                </span>
                <div className="flex mt-4 text-gray-500 dark:text-gray-400 ">
                  <EditTextarea
                    onSave={onChange}
                    name="hashtag1"
                    defaultValue={shop?.hashtag1}
                    placeholder="tag"
                    rows={1}
                    style={{ border: "1px solid #ccc" }}
                  />
                  <EditTextarea
                    onSave={onChange}
                    name="hashtag2"
                    placeholder="tag"
                    defaultValue={shop?.hashtag2}
                    rows={1}
                    style={{ border: "1px solid #ccc" }}
                  />
                  <EditTextarea
                    onSave={onChange}
                    name="hashtag3"
                    placeholder="tag"
                    defaultValue={shop?.hashtag3}
                    rows={1}
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>
              </div>

              <div className="mt-8 lg:mt-0 w-full">
                <div className="flex items-center justify-center lg:justify-end lg:ml-5 ">
                  <div className="max-w-lg ">
                    <div className={styles.container}>
                      <div className={styles.loading}>
                        <ClipLoader
                          color="gray"
                          loading={isloading}
                          size="50"
                        />
                      </div>

                      <img
                        className="object-cover object-center w-full h-64 rounded-md shadow cursor-pointer hover:opacity-75"
                        src={
                          shop?.infoImg
                            ? shop.infoImg
                            : "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631881307/default/fikri-rasyid-ezeC8-clZSs-unsplash_dynpg4.jpg"
                        }
                        onClick={isloading ? null : imageChange}
                        alt=""
                        name="infoImg"
                      />
                      {!isloading ? (
                        <div className={styles.overlay}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 right-0 cursor-pointer"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      name="infoImg"
                      ref={infoRef}
                      onChange={isloading ? null : imageNewUpload}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Pick up location
                </h2>

                <div className="mt-4 text-gray-500 dark:text-gray-400 ">
                  <EditTextarea
                    onSave={onChange}
                    name="pickupdesc"
                    defaultValue={shop?.pickupdesc}
                    style={{ border: "1px solid #ccc" }}
                    rows={7}
                  />
                </div>
                <div className="flex items-center w-full">
                  <Link to={{ pathname: `${shop?.location}` }} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                  <EditText
                    onSave={onChange}
                    name="location"
                    defaultValue={
                      shop.location
                        ? shop.location !== ""
                          ? shop.location
                          : false
                        : "Google Map URL include https://.."
                    }
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>
              </div>

              <div className="mt-8 lg:mt-0 w-full lg:ml-5">
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="max-w-lg  ">
                    <div className={styles.container}>
                      <div className={styles.loading}>
                        <ClipLoader
                          color="gray"
                          loading={isloading}
                          size="50"
                        />
                      </div>

                      <img
                        className="object-cover object-center w-full h-64 rounded-md shadow cursor-pointer hover:opacity-75"
                        src={
                          shop.pickupImg
                            ? shop.pickupImg
                            : "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631882811/default/scott-webb-nJZbmL6pvDY-unsplash_y1c83w.jpg"
                        }
                        onClick={isloading ? null : imageChange}
                        alt=""
                        name="pickupImg"
                      />
                      {!isloading ? (
                        <div className={styles.overlay}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 right-0 cursor-pointer"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      name="pickupImg"
                      ref={pickupRef}
                      onChange={isloading ? null : imageNewUpload}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Trading Hours
                </h2>

                <div className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  <ul>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="monday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Monday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["monday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["monday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="monday"
                            className="cursor-pointer "
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.monday?.open}
                          />
                          &#160; - &#160;
                          <input
                            name="close"
                            type="time"
                            className="cursor-pointer "
                            id="monday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.monday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="tuesday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Tuesday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["tuesday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["tuesday"] ? (
                        <span>
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="tuesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.tuesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="tuesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.tuesday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="wednesday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Wednesday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["wednesday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["wednesday"] ? (
                        <span>
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="wednesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="wednesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="thursday"
                          className={styles.button}
                          onClick={tradingToggleOn}
                        >
                          <span className={styles.date}>Thursday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["thursday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["thursday"] ? (
                        <span>
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="thursday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="thursday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="friday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Friday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["friday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["friday"] ? (
                        <span>
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="friday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.friday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="friday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.friday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="saturday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Saturday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["saturday"] ? "Closing " : "Open"}
                          </span>
                          :
                        </button>
                      </span>
                      {tradingToggle?.["saturday"] ? (
                        <span>
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="saturday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.saturday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="saturday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.saturday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span className="inline-block w-28">
                        <button
                          name="sunday"
                          onClick={tradingToggleOn}
                          className={styles.button}
                        >
                          <span className={styles.date}>Sunday:</span>
                          <span className={styles.openclose}>
                            {tradingToggle?.["sunday"] ? "Closing " : "Open"}
                          </span>
                        </button>
                      </span>
                      {tradingToggle?.["sunday"] ? (
                        <span className="font-bold">
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="open"
                            id="sunday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.sunday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            className="cursor-pointer "
                            name="close"
                            id="sunday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.sunday?.close}
                          />
                        </span>
                      ) : (
                        <span className="inline-block">Closed</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="flex items-center justify-center ">
                  <div className="max-w-lg">
                    <img
                      className="object-fit object-center w-full h-64 rounded-md shadow"
                      src="../img/openclose.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="">
                <div className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-4xl	">
                  <SellerProducts
                    shop={shop}
                    filteredSearch={filteredSearch}
                    optionSearch={optionSearch}
                    filtered={filtered}
                    searchOption={searchOption}
                    deleteProduct={deleteProduct}
                    addProduct={addProduct}
                    setFiltered={setFiltered}
                    imageChange={imageChange}
                    productImgUpload={productImgUpload}
                  />
                </div>
              </div>

              {/* <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="max-w-lg">
                    <img
                      className="object-fit object-center w-full h-64 rounded-md shadow"
                      src="../img/pickup.png"
                      alt=""
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </TabPanel>
    </Tabs>
  );
};

export default Addshopform;
