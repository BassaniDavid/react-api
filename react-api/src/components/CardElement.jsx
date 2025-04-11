export default function Card(props) {
    // aumento leggibilità
    const act = props.act

    return (
        <>
            {/* div container generale */}
            <div className='container'>
                {/* funzione per generare tutte le card dall'array passato come props */}
                {act.map((att, index) => (
                    <div key={index}>
                        <h3>{att.name}</h3>
                        <p>data di nascita:{att.birth_year}</p>
                        <p>nazionalità: {att.nationality}</p>
                        <p>biografia: {att.biography}</p>
                        <p>awards: {att.awards}</p>
                        <img src={att.image} alt={att.name} />
                    </div>
                ))}
            </div>
        </>
    )
}