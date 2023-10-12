import pikachuNotFound from "../assets/img/pikachuNotFound.gif";

const NotFound = () => {
    return (
        <section className="notFound">
            <h3>The page you are looking for doesn't exist</h3>
            <img
                className="notFoundImg"
                src={pikachuNotFound}
                alt="Sad Pikachu gif"
            />
        </section>
    );
};

export default NotFound;
