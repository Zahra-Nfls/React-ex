import React, {useState} from "react";
// import React from "react";

const btnDiscover = {
    backgroundColor: "#EECEB9",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.1)"
    
}



export default function UpDateH1() {
const [h1, setH1] = useState("");
// const [h1, setH1] = React.useState("");
const [btnVisible, setBtnVisible] = React.useState(true);
const upDateH1 = () => {
    setH1("React ⚛️!");
    setBtnVisible(false);
}

    return(
        <>
        <h1 className="title">ʟᴇᴛ`s ᴘʀᴀᴄᴛɪᴄᴇ sᴏᴍᴇ: {h1}
            {btnVisible &&<button style={btnDiscover} onClick={upDateH1}>Discover</button>}</h1>
        </>
    );
}