import { useState } from "react";
import "./App.css";


export default function Home() {
  const [Animal, setAnimal] = useState([
     {
        id: 1,
        nome: "Golfinho",
        imagemUrl:
          "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-golfinho-um-exemplo-animal-pertencente-ao-grupo-dos-mamiferos-5bd334f3235f1.jpg",
        caracteristicas: "Outra particulariedade na comunicação dos golfinhos é o sonar, que lhes permite determinar as reacções internas de outros golfinhos, humanos, peixes, etc. Imaginem sabermos como se sentem todas as pessoas à nossa volta, se estão alegres, tristes, zangadas. Ninguém poderia enganar ou mentir.",
        },
      {
        id: 2,
        nome: "Morcego",
        imagemUrl:
          "https://s1.static.brasilescola.uol.com.br/be/2020/12/morcego.jpg",
        caracteristicas:"As colônias de morcegos facilitam o controle de pestes. Quando existe uma grande colônia de morcegos na região, não é necessário investir em pesticidas nocivos para a agricultura.",
        
        },
      {
        id: 3,
        nome: "Canguru",
        imagemUrl:
          "https://s1.static.brasilescola.uol.com.br/be/2020/12/canguru.jpg",
        caracteristicas:"Um canguru pode pular, aproximadamente, nove metros em um único salto e atingir uma altura de quase dois metros. Esse animal atinge, em média, 30 quilômetros por hora.",
        },
      {
        id: 4,
        nome: "Cachorro",
        imagemUrl:
          "https://th.bing.com/th/id/OIP.Hf0ZaY_J7Vlklow0ECb0-gHaD4?pid=ImgDet&rs=1",
        caracteristicas:" Um cachorro adulto tem 42 dentes. 2. Os cães são onívoros, eles precisam comer mais do que apenas carne. 3. O olfato dos cachorros é 1 milhão de vezes melhor do que o dos seres humanos. O olfato dos cães é um dos melhores da natureza.",
        },
      {
        id: 5,
        nome: "Gato",
        imagemUrl:
          "https://th.bing.com/th/id/R.d05ac5323786de9f2d62f9c20b6b6e51?rik=CX2vtzHXUIsxdw&pid=ImgRaw&r=0",
        caracteristicas:"Gatos são extremamente sensíveis a sons e vibrações. Eles conseguem perceber um terremoto com 15 minutos de antecedência.",
        },
    ]);
  const [nomeAnimal, setNomeAnimal] = useState("");
  const [imagemUrlAnimal, setImagemUrlAnimal] = useState("");
  const [caracteristicasAnimal, setCaracteristicasAnimal] = useState("");
 
  const onSubmit = (e) => {
    e.preventDefault();
    setAnimal([
      ...Animal,
      {
        nome: nomeAnimal,
        imagemUrl: imagemUrlAnimal,
        caracteristicas: caracteristicasAnimal,
      },
    ]);
    setNomeAnimal("");
    setImagemUrlAnimal("");
    setCaracteristicasAnimal("");
  };


  const deletar = (index) => {
    setAnimal(Animal.filter((f, i) => i !== index));
  };

  return (
    <div className="container">
      <main className="main">
        <h1>Animais</h1>
        <hr />
        <h2>Cadastre um novo Animal</h2>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Nome"
            value={nomeAnimal}
            onChange={(e) => {
              setNomeAnimal(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Url da Imagem"
            value={imagemUrlAnimal}
            onChange={(e) => {
              setImagemUrlAnimal(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Caracteristicas"
            value={caracteristicasAnimal}
            onChange={(e) => {
              setCaracteristicasAnimal(e.target.value);
            }}
          />
          <br />
          <button type="submit">Salvar</button>
        </form>
        <hr />
        <h2>Animais</h2>
        <ul>
          {Animal.map((f, index) => (
            <li key={index}>
              <h3>{f.nome}</h3>
              <img src={f.imagemUrl} alt={f.nome}/>
              <h4>{f.caracteristicas}</h4>
              <br />
              <button onClick={() => deletar(index)}>Deletar</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}