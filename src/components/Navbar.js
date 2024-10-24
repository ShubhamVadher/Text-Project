import React,{useState} from 'react'
import './mycssfile.css';

export default function Navbar(props) {
    const [text,setMyText]=useState("Enter your text here");
    const [originalText, setOriginalText] = useState("Enter your text here");

    const to_upper=()=>{
        setMyText(text.toUpperCase());
    }
    const to_lower=()=>{
        setMyText(text.toLowerCase());
    }
    const rm_sym = () => {
        setMyText(text.replace(/[^a-zA-Z0-9 ]/g, ''));
    }

    

    const removeNumbers = () => {
        setMyText(text.replace(/[0-9]/g, '')); // Replaces any digit (0-9) with an empty string
    };

    const changed=(event)=>{
        setMyText(event.target.value);
        setOriginalText(event.target.value);
    }
    const clear=()=>{
        setMyText("");
    }
    const showOriginal = () => {
        setMyText(originalText); // Restore the original text
    }

  return (
    <>
        <link rel="shortcut icon" type="image/jpg" href="T.png"/>
        <div className="main-container">
            <nav className="nav-bar">
                <ul className="class1">
                    <li className='list-item site-name'>{props.name}</li>
                    <li className='list-item'>Home</li>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Contact</li>
                </ul>
                <button className='btn'>Dark Mode</button>
            </nav>

            <div className="container">
                <div className="text-box">
                    <textarea name="text" spellCheck="false" className='text-bb' value={text} cols={100} placeholder='Enter Text' onChange={changed} rows={30} ></textarea>
                </div>
                <div className="btns">
                    <button className='btn-text' onClick={to_upper}>Convert to upper case</button>
                    <button className='btn-text' onClick={to_lower}>Convert to lower case</button>
                    <button className='btn-text' onClick={rm_sym}>Remove Symbols</button>
                    <button className='btn-text' onClick={removeNumbers}>Remove Numbers</button>
                    <button className='btn-text' onClick={clear}>clear</button>
                    <button className='btn-text' onClick={showOriginal}>Original</button>
                </div>
            </div>

            <div className="info">
                
                <span className="words">Words:&nbsp;{text.split(' ').length}</span>
                <span className="chars">Characters:&nbsp;{text.length}</span>
                <span className="Lines">Lines:&nbsp;{text.split('\n').length}</span>
            </div>
        </div>
    
    </>
  )
}
