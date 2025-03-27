import { Link } from "react-router-dom"

export const HeroCard = ({heroe}) => {
    const heroImageUrl = `/assets/heroes/${heroe.id}.jpg`


    return (
        <div className="col animate__animated animate__fadeIn"  key={heroe.id} >
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroImageUrl} alt={heroe.superhero} />
                    </div>

                    <div className="col-8">
                        <h5 className="card-title">{heroe.superhero}</h5>
                        <p className="card-text">{heroe.alter_ego}</p>

                        <p>{heroe.characters !== heroe.alter_ego ? heroe.characters: '' }</p>

                        <p className="card-text">
                            <small className="text-muted">
                                {heroe.first_appearance}
                            </small>
                        </p>


                        <Link to={`/hero/${heroe.id}`}>
                            Más...
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
