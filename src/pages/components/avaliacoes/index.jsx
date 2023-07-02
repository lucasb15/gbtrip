function Avaliacoes() {
    const avaliacao = [
        {
            foto: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
            nome: "Avaliador 1",
            comentario: "Não é atoa que são os melhores, essas sem duvidas foram as melhores férias em família!!!"
        }, {
            foto: "https://cdn-icons-png.flaticon.com/512/4842/4842456.png",
            nome: "Avaliador 2",
            comentario: "Se eu soubesse que era tão barato teria viajado antes!!!"
        }, {
            foto: "https://cdn-icons-png.flaticon.com/512/145/145866.png",
            nome: "Avaliador 3",
            comentario: "Que site lindoooo"
        }, {
            foto: "https://cdn-icons-png.flaticon.com/512/4842/4842456.png",
            nome: "Avaliador 4",
            comentario: "Viajo com eles todo ano e sempre foi sensacional"
        }, {
            foto: "https://cdn-icons-png.flaticon.com/512/3220/3220877.png",
            nome: "Avaliador 5",
            comentario: "Não gostei, fazem o serviço bem demais para o meu gosto"
        }]
    return (
        <aside>
            <h2>Nossas Avaliações</h2>

            <ul>
                {avaliacao.map((item, index) => (
                    <li key={index}>
                        <img src={item.foto}></img>
                        <h2> {item.nome} </h2>
                        <p> {item.comentario} </p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Avaliacoes;