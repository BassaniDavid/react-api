export default function Card(props) {
    const actress = props.actress

    return (
        <>
            {actress.map((actres) => (
                <div key={actres.id}>
                    <h3>{actres.name}</h3>
                    <p>data di nascita:{actres.birth_year}</p>
                    <p>nazionalità: {actres.nationality}</p>
                    <p>biografia: {actres.biography}</p>
                    <p>awards: {actres.awards}</p>
                    <img src={actres.image} alt={actres.name} />
                </div>
            ))}
        </>
    )
}