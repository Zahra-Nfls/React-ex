import PropTypes from 'prop-types';
import styles from './UserGreetings.module.css';
export default function UserGreetings(props){

    const welcomeMessage = <h2 className={styles.welcome} >Welcome back, {props.username}!</h2>
    const logInPrompt = <h2 className={styles.logInNeeded} >Please log in to see your greetings.</h2>

return(
    props.isLoggedIn? welcomeMessage : logInPrompt
);




    // if(props.isLoggedIn){
    //     return <h2>Welcome back, {props.username}!</h2>
    // }
    // else {
    //     return <h2>Please log in to see your greetings.</h2>
    // }

    //better ternary operator for cleaner and more readable code
    // 1 way
    //  return(
    // props.isLoggedIn? <h2 className={styles.welcome} >Welcome back, {props.username}!</h2> : <h2 className={styles.logInNeeded} >Please log in to see your greetings.</h2>
    // );
}

UserGreetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreetings.defaultProps = {  
    isLoggedIn: false,
    username: 'Guest',
};


