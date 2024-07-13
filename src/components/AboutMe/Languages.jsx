import PropTypes from 'prop-types';
import styles from './Languages.module.css';
import languagesImg from '../../assets/images/languages.png';
import code from '../../assets/images/code1.png';

export default function Languages(){
    const devLanguages = ["Javascript", "HTML", "CSS", "React", "Git", "Php", "SQL"];

    const devLanguageItems = devLanguages.map(language => <li key={language}>{language}</li>);
    
    const languages = [{id:1, name:"Arabic", level:"Mother-Tongue", value:10}, 
                        {id:2, name:"English", level:"Native", value:10}, 
                        {id:3 , name:"Spanish", level:"Advanced", value:7}, 
                        {id:4, name:"French", level:"Native", value:10}, 
                        {id:5, name:"Dutch", level:"Basic",value:5}, 
                        {id:6, name:"Italian", level:"Mother-Tongue",value:10},
                        {id:7, name:"Japanese", level:"Beginner", value:3},
                        {id:8, name:"Korean", level:"Beginner", value:2},
                        {id:9, name:"Chinese", level:"Beginner", value:0.5}];
    
                        
        languages.sort((a, b) => a.name.localeCompare(b.name));//alphabetical order
        // languages.sort((a, b) => b.name.localeCompare(a.name));// reverse alphabetical order
        // languages.sort((a, b) => a.value - b.value); // sort by level 
        // languages.sort((a, b) => a.level.localeCompare(b.level));//reverse level order
        // const learning= languages.filter(language => language.value < 5);//level less than 5
    
        const languagesItems = languages.map(language => <li key={language.id}>{language.name} :&nbsp; {language.level} - {language.value}</li>);
        // const languagesItems = learning.map(learning => <li key={learning.id}>{learning.name} :&nbsp; {learning.level} - {learning.value}</li>);
        

    
    return(
        <>
        <div className={styles.container}>
        <div>
            <h2 className="title">Languages I speak:</h2>
            <ul  className={styles.lang}>
            <img src={languagesImg} className={styles.img} alt="lang" />
                {languagesItems}
            </ul>
        </div>
            <div  >
            <h2 className="title">Languages I know:</h2>
            <ul className={styles.lang}>
            <img src={code} className={styles.img} alt="lang" />
                {devLanguageItems}
            </ul>
        </div>
        </div>
        </>
    );
}

Languages.propTypes = {
    items: PropTypes.array,
        id: PropTypes.number,
        name: PropTypes.string,
};

Languages.defaultProps = {
    items: [],
    id: 0,
    name: '',
}