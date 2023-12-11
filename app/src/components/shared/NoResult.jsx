import './NoResult.scss'

const NoResult = () => {
  return (
    <div className="no-result">
      <p className="no-result-message">No hay publicaciones que coincidan con tu búsqueda.</p>

      <p>Revisa la ortografía de la palabra. Utiliza palabras más genéricas o menos palabras.</p>
    </div>
  )
}

export default NoResult
