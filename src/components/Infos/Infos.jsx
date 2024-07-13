import styles from './Infos.module.css';
import PropTypes from 'prop-types';
export default function Infos(props){

    return (
        <>
        <div className={styles.infosContainer} >
            <h1 className="title">Ⓜⓨ Ⓘⓝⓕⓞⓢ</h1>
            <p className={styles.p}>My Name is: {props.name}; </p>
            <p>My age is: {props.age} yo;</p>
            <p>Am i a student?: {props.isStudent ? "Yes!" : "No!"} </p>
        </div>
        </>
    );
}

Infos.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
};

// Infos.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
//     // additional props...  (if needed)  // e.g. profilePic: PropTypes.string
//  //                             //      isEmployed: PropTypes.bool
// };


// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"
