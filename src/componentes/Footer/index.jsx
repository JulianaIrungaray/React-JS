import "./Footer.css";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/JulianaIrungaray'>
                <img src="/img/github.png" alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/juliana-irungaray/'>
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://www.instagram.com/jukiirungaray/'>
                <img src="/img/instagram1.png" alt='Instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Juliana Irungaray</strong>
    </footer>
}

export default Footer;