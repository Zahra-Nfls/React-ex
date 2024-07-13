import PropTypes from 'prop-types';
// import ClickImg from '../../assets/images/100.webp';


export default function Button(){
const btnStyles ={
    backgroundColor:'#EECEB9',
    color:'black',
    borderRadius:5,
    cursor:'pointer',
    boxShadow:'0 0 5px rgba(0,0,0,0.2)',
    transition:'background-color 0.3s ease',
    float:'right',
    marginBottom:20,
    marginRight:20,
    marginTop:20,
    fontSize:14,
}

// const imgStyle = {
//     width:'80px',
//     height:'30px',
//     borderRadius:'0.5rem',
//     marginLeft:'auto',
//     marginRight:'auto',
//     marginBottom:20,
//     cursor:'pointer',
// }
//ex1
// const handleClick = () => console.log("Nice Jooooob!!");
// const handleClick2 = (name) => console.log(`${name} stop clicking me!!`);


//ex 2
// let count = 0;

// const handleClick = () => {
//     if(count < 5){
//     count++;
//     console.log(`${name} You've clicked me ${count} times.`);
// }else{
//     console.log(`${name} You've reached the maximum number of clicks.`);
// }
// }

//ex 3
// const handleClick = (e) => console.log(e);
const handleClick = (e) => e.target.textContent = "Stop it Huurts! 😭";

//ex4
// const handleClick1 = (e) => e.target.style.display = "none";




    return(
        <>
        {/* // <button onClick={() => handleClick("YOUU")} style={styles}>ᴍᴏʀᴇ..</button> */}
    {/* //ex3 */}
        {/* <img src={ClickImg} onClick={(e)=> handleClick1(e)} style={imgStyle} alt="clickBtn" /> */}
        <button onDoubleClick={(e) => handleClick(e)} style={btnStyles}>ᴍᴏʀᴇ..</button>
        </>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
};

Button.defaultProps = {
    name: "Guest",
};