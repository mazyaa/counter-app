import image from '../assets/image.jpg';

export default function Container ({children}) {
    return (
        <div className="parent">
            <header>
                <img className='img' src={image} alt="logo"/>
                <h1>Counter App!</h1>
            </header>

            {children}

            <footer>
                <p>Created By Mazyaa💌</p>
            </footer>
        </div>

        

    )
}