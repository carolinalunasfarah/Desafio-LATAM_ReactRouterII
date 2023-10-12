import pikachuImg from "../assets/img/pikachu.svg";

const Home = () => {
    return (
        <section className="home">
            <h1>Welcome Pokemon Master</h1>
            <img className="pikachuImg" src={pikachuImg} alt="Pikachu image" />
        </section>
    );
};

export default Home;
