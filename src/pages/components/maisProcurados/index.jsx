export default function DestinosProcurados() {
    const maisProcurados = [ {
        nome: "São Paulo",
        src: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2022/09/o-que-fazer-em-sao-paulo-a-noite-topo.jpg"
    }, {
        nome: "Gramado",
        src: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg"
    }, {
        nome: "Foz do Iguaçu",
        src: "https://www.viagensecaminhos.com/wp-content/uploads/2010/08/foz-do-iguacu-cataratas-do-iguacu.jpg"
    }, {
        nome: "Rio de Janeiro",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg"
    }, ];

    async function carrosel() {
        for(let i = 0; i < maisProcurados.length; i++) {
            return maisProcurados[i].src;
        }
        
        setTimeout(2000);
    }
    console.log(carrosel())
    return (
        <aside>
            <h2>Destinos Mais Procurados</h2>
            <img src={maisProcurados.map((item) => {
                item.src
            })} alt="" />
        </aside>
    )
}

