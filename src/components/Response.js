import { useCallback, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Response.css";


import created from "./images/created.svg";
import surveyimg from "./images/surveyimg.svg";

import downloadimg from "./images/downloadimg.svg";


import liveimg from "./images/liveimg.svg";

import bgimg from "./images/bgimg.svg";
import expireimg from "./images/expireimg.svg";
import responseimg from "./images/responseimg.svg";

// const survey_id = localStorage.getItem("survey_id");
const survey_id = "64227e66e662f457dc670118";
// const survey_id = window.location.href.split('/')[7];
// alert(survey_id);
const Response = () => {
    const [myData, setmyData] = useState({}
    );
    const [response, setResponse] = useState([]
    );
    // const [questions,setQuestions] = useState([]);

    useEffect(() => {  // Whenever there is change in DOM o API request get exe 
        // use Effect wille get executed
        async function fetchPosts() {

            try {
                const response = await fetch('https://api.qa.gessa.io/cms/surveyForm?page=0&size=100', {
                    method: 'GET',
                    headers: {
                        // 'x-tenant-id': '63f72c9ef9dfbe6751b8881f',
                        // 'content-type':'application/json'
                    }
                });
                const resData = await response.json();
                console.log("data omg", resData);
                await setmyData(resData.result.data[0]);
                console.log("data omg", myData);

                // console.log(resData);
                // console.log(createdAt);  
            } catch (err) {
                console.log("Error", err);
            }
        }

        
        async function fetchResponses() {
            try {
                const response = await fetch('https://api.qa.gessa.io/cms/surveyForm?page=0&size=100', {
                    method: 'GET',
                    headers: {
                        // 'x-tenant-id': '63f72c9ef9dfbe6751b8881f',
                        // 'content-type':'application/json'
                    }
                });
                const resData = await response.json();
                setResponse(resData);
                console.log("resData",resData);

                // console.log(createdAt);  
            } catch (err) {
                console.log("Error", err);
            }
        }
        fetchPosts();
        fetchResponses();
    }, [])

    // console.log("Response :", response);

    //variables for form
    const createdAt = myData?.createdAt;
    const questionsCount =  myData?.questions?.length
    const expiresOn = myData?.expiry;
    const status = myData?.status;
    const surveyName = myData?.title;
    const updatedAt = myData?.updatedAt;
    // const navigate = useNavigate();


    //variables for response
    const responseObjects = response?.responses
    console.log(responseObjects)

    //useReducer
    function reducer(state, action) {
        if (action.type === 'click') {
            console.log(action.payload)
            return action.payload;

        }
    }
    const [state, dispatch] = useReducer(reducer, []);

    //get day , date ,Month  and year 
    const datetimeStr = "" + state.createdAt;
    // Create a Date object from the string
    const datetime = new Date(datetimeStr);

    // Define arrays for days of the week and months
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Extract day of the week, month, and date
    const dayOfWeek = weekdays[datetime.getUTCDay()];
    const month = months[datetime.getUTCMonth()];
    const date = datetime.getUTCDate();
    const year = datetime.getUTCFullYear();
    const time = datetime.getTime();


    // const onItem1TextClick = useCallback(() => {
    //     navigate("/");
    // }, [navigate]);

    // const onItem1Text1Click = useCallback(() => {
    //     navigate("/");
    // }, [navigate]);

    return (
        <div className="task-19">
            <div className="event-heading-creator-parent">
                <div className="event-heading-creator">
                    <div className="event-heading-creator-inner">
                        <div className="group-wrapper">
                            <div className="group-wrapper">
                                <img className="bg-icon" alt="" src={bgimg} />
                                <div className="label-parent">
                                    <div className="accepting-responses">Survey Name</div>
                                    <div className="h1-medium">{surveyName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-parent4">
                        <div className="group-wrapper1">
                            <div className="group-parent2">
                                <div className="input-parent2">
                                    <div className="input3">{new Date(createdAt).toLocaleDateString("IN")}</div>
                                    <div className="last-name">Created On</div>
                                </div>
                                <img className="group-item" alt="" src={created} />
                            </div>
                        </div>
                        <div className="group-wrapper1">
                            <div className="group-parent3">
                                <div className="input-parent3">
                                    <div className="input3">{questionsCount}</div>
                                    <div className="last-name">Survey Questions</div>
                                </div>
                                <img className="group-item" alt="" src={surveyimg} />
                            </div>
                        </div>
                        <div className="group-wrapper1">
                            <div className="group-parent4">
                                <div className="input-parent4">
                                    <div className="input3">{ response.totalResponses}</div>
                                    <div className="last-name">Total Responses</div>
                                </div>
                                <img className="group-item" alt="" src={responseimg} />
                            </div>
                        </div>
                        <div className="group-wrapper1">
                            <div className="group-parent2">
                                <div className="input-parent2">
                                    <div className="input3">{new Date(expiresOn).toLocaleDateString("IN")}</div>
                                    <div className="last-name">Expires On</div>
                                </div>
                                <img className="group-item" alt="" src={expireimg} />
                            </div>
                        </div>
                        <div className="live-parent">
                            <img className="live-icon" alt="" src={liveimg} />
                            <div className="input-parent8">
                                <b className="input1">{status}</b>
                                <div className="label79">Status</div>
                            </div>
                        </div>
                    </div>
                    <div className="event-heading-creator-item" />
                </div>
                <div className="top-departments-container">
                    <div className="top-departments1">
                        <div className="modal-header">
                            <div className="bg2" />
                            <div className="modal-header-child" />
                            <b className="title">Individual Responses</b>
                            <img
                                className="iconsarrow-back"
                                alt=""
                                src="/iconsarrow-back.svg"
                            />
                            <img className="openinnew-icon" alt="" src="/openinnew.svg" />
                        </div>

                        <div className="frame-parent67">
                            <div className="frame-parent68">
                                <div className="frame-parent69">
                                    <div className="frame-wrapper2">
                                        <div className="property-1rafiq-parent">
                                            <div className="property-1rafiq">
                                                <div className="add" />
                                                <div className="frame-parent73">
                                                    <div className="group-tile-parent">
                                                        {
                                                            responseObjects?.map((item) => (
                                                                <div key={item._id} className="group-tile" onClick={() => dispatch({ type: 'click', payload: item })}>
                                                                    <div className="name">{item.email}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="add" />
                                            </div>

                                            <div className="frame-child41" />
                                            <div className="model-header-parent">
                                                <div className="model-header2">
                                                    <div className="response-details-parent">
                                                        <b className="displaying-5-of">Response Details</b>
                                                        <div className="label139">Add New</div>
                                                    </div>
                                                    <div className="model-header-child" />
                                                </div>
                                                <div className="model-department-manager">
                                                    <div className="model-header3">
                                                        <div className="tab-data-item" />
                                                    </div>
                                                    <div className="bottom-divider-onoff-group">
                                                        <div className="bottom-divider-onoff" />
                                                        <div className="bottom-divider-onoff10" />
                                                        <div className="bottom-divider-onoff10" />
                                                        <div className="bottom-divider-onoff10" />
                                                        <div className="bottom-divider-onoff10" />
                                                        <div className="frame-parent88">
                                                            <div className="frame-parent89">
                                                                <div className="frame-parent90">
                                                                    <div className="frame-parent91">
                                                                        <div className="frame-parent38">
                                                                            <div className="table-data12">
                                                                                <img
                                                                                    className="table-data-child"
                                                                                    alt=""
                                                                                    src="/ellipse-1@2x.png"
                                                                                />
                                                                                <div className="name-parent">
                                                                                    <div className="name">
                                                                                        <span className="started-on">
                                                                                            Submitted On
                                                                                        </span>
                                                                                        <b> :</b>
                                                                                        {/* {dayOfWeek},{month} {date} ,{year} */}
                                                                                        {updatedAt}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="frame-parent94">
                                                                    <div className="frame-parent91">
                                                                        <div className="frame-parent38">
                                                                            <div className="table-data12">
                                                                                <div className="name-parent">
                                                                                    <div className="name">
                                                                                        <b>{`Collector :`}</b>
                                                                                        <span>Web Link</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bottom-divider-onoff10" />
                                                    </div>
                                                    <div className="frame-parent98">
                                                        <div className="bottom-divider-onoff-parent">
                                                            <div className="bottom-divider-onoff10" />

                                                            {
                                                                state.response?.map((item, index) => (
                                                                    <div key={index} className="frame-parent99">
                                                                        <div className="frame-parent79">
                                                                            <div className="frame-parent38">
                                                                                <div className="rank-parent">
                                                                                    <div className="rank">Rank</div>
                                                                                    <div className="div7">1</div>
                                                                                </div>
                                                                                <div className="table-data12">
                                                                                    <img
                                                                                        className="table-data-child"
                                                                                        alt=""
                                                                                        src="/ellipse-1@2x.png"
                                                                                    />
                                                                                    <div className="name-parent">
                                                                                        <div className="name10">Q{index + 1}.
                                                                                         {item.questionContent}
                                                                                            <div className="name-wrapper">
                                                                                                <div className="rank">
                                                                                                    <span>
                                                                                                        <div className="rank">
                                                                                                            {createdAt}
                                                                                                        </div>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }

                                                            <div className="bottom-divider-onoff" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-divider-onoff10" />
                            </div>
                            <div className="image-3-wrapper">
                                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
                            </div>
                        </div>
                        <img
                            className="download-outline-icon2"
                            alt=""
                            src={downloadimg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Response;

