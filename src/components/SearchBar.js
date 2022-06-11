import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

   const onSubmit = (event) => {
        event.preventDefault();

       onFormSubmit(term);
    }

    return (
        <div className='search-bar ui segment'>
            <form  onSubmit = {onSubmit} className='ui form'>
                <div className='field'>
                    <h3>Video Search Start</h3>
                    <input 
                        type="text"
                        value= {term}
                        onChange={(event) => setTerm(event.target.value)}
                        //onChange = { e => this.setState({term : e.target.value}) }
                    />
                </div>
            </form>
        </div>
        );

}


export default SearchBar;
