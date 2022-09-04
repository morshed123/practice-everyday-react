import axios from "axios";
import { useState, useEffect } from "react";

const JsonPlaceHolderPosts = () => {
    // const [jsonPostsData, setJsonPostsData] = useState([]);
    // const [jsonPostsData2, setJsonPostsData2] = useState([]);

    // useEffect(() => {
    //     // fetch ke two way call in api
    //     //     //1.
    //     //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //     //         .then((response) => response.json())
    //     //         .then((jsonPostsData) => {
    //     //             console.log("jsonData", jsonPostsData);
    //     //             setJsonPostsData(jsonPostsData);
    //     //         })
    //     //         .catch((err) => {
    //     //             console.log(err.message);
    //     //         });
    //     // }, []);

    //     // //// 2.
    //     // async function getUsers() {
    //     //     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    //     //     let jsonPostsData2 = await response.json()
    //     //     return jsonPostsData2;
    //     // }
    //     // getUsers().then(
    //     //     jsonPostsData2 => 
    //     //     // console.log("JsonPostsData2", jsonPostsData2)
    //     //     setJsonPostsData2("JsonPostsData2", jsonPostsData2)
    //     //     )

    // }, []);

    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        //     .then(function (response) {
        //         // handle success
        //         // console.log("jsonPostsData3", response);
        //         if (response.status == 200) {
        //             console.log("Data", response.data);
        //             setData(response.data);
        //         }
        //     })
        //     .catch(function (error) {
        //         // console.log(error)
        //         if (error.response==200) {
        //             // console.log(error.response.data);
        //             setError(error.response.data);
        //         }
        //     })
        //     // .then(function () {
        //     //     // alawys exicuted
        //     // });
        // or 
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) =>{
                // handle success
                // console.log("jsonPostsData3", response);
                if (response.status == 200) {
                    console.log("Data", response.data);
                    setData(response.data);
                }
            })
            .catch((error) => {
                // console.log(error)
                if (error.response==200) {
                    // console.log(error.response.data);
                    setError(error.response.data);
                }
            })
            // .then(function () {
            //     // alawys exicuted
            // });
    }, []);


    return (
        <div className="container pt-5">
            <div className="row g-3">
                {
                    // jsonPostsData.length > 0 && jsonPostsData.map((item, id) => {
                    //     return (
                    //         <div className="col-md-4">
                    //             <div className="card text-center product">
                    //                 <div className="card-body mb-3">
                    //                     <h5 className="card-title">Id: {item.userId}</h5>
                    //                     <p className="card-text">{item.title}</p>
                    //                     <p className="card-text">{item.body}</p>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     )
                    // })
                    data.length > 0 && data.map((item, id) => {
                        return (
                            <div key={id} className="col-md-4">
                                <div className="card text-center product">
                                    <div className="card-body mb-3">
                                        <h5 className="card-title">Id: {item.userId}</h5>
                                        <p className="card-text">{item.title}</p>
                                        <p className="card-text">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default JsonPlaceHolderPosts;