import PropTypes from 'prop-types';
import styles from './AboutMe.module.css'
import countries from '../../assets/images/countries.png';


export default function AboutMe(props){
    const category = props.category;  
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}{item.population}</li>);

    return(
        <>
        <div className={styles.div}>
            <h2 className='title'>
                {category}
            </h2>
            <ul className={styles.container}>
                <img src={countries} className={styles.img} alt="world" />
                {listItems}
            </ul>
        </div>
        </>
    )
}

AboutMe.propTypes = {
    category: PropTypes.string,
    items: PropTypes.array,
};

AboutMe.defaultProps = {
    category: 'About Me',
    items: [],
};
