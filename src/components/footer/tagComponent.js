import './footer.css';

function TagComponent({ title, li }) {

    return (
        <div className='footerTagContainer'>
            <h1 className='footerHeader' style={{ fontWeight: 600 }}>{title}</h1>
            <ul className='footerUl'>
                {
                    li.map((item, i) => {
                        return <li key={i} className='footerLi'>{item}</li>
                    })
                }

            </ul>
        </div>
    );
}

export default TagComponent;
