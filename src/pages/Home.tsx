import {Link} from 'react-router-dom';

const Home =()=> {
    return(
        <>
        <button> <Link to='/cadastro'> Cadastro</Link></button>
        <button> <Link to='/login'>Login</Link></button>
        </>
    )
}

export default Home;