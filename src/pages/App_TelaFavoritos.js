import logo from '../images/logo.svg';
import logopizza from "../images/pizzate_logo.png";
import pessoa from "../images/pessoa.png";
import locate from "../images/image 3.png";
import '../pages/App_TelaFavoritos.css';
import ScrollToTopButton from '../styled-components/ScrollToTopButton';
import Headline from '../styled-components/Headline';
import StarButton from '../styled-components/StarButton'
import {useRef} from 'react';
function App_TelaFav() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const handleClick1= () =>{
    ref.current?.scrollIntoView({behavior:'smooth'});
  };
  const handleClick2= () =>{
    ref2.current?.scrollIntoView({behavior:'smooth'});
  };
  const handleClick3= () =>{
    ref3.current?.scrollIntoView({behavior:'smooth'});
  };
  const handleClick4= () =>{
    ref4.current?.scrollIntoView({behavior:'smooth'});
  };
  return (
    
    <div className="App">
   <ScrollToTopButton></ScrollToTopButton>
      <header>
          <div className="topo"> 
         <h1> <img class ="locate"src={locate}alt="logo da pizza" title="logo da pizza" />PRAÇA MAUÁ, 1 - SÃO<br /> CAETANO DO SUL </h1>

         <img class ="logo"src={logopizza}alt="logo da pizza" title="logo da pizza" />
         <button class ="button"><img class ="pessoa"src={pessoa}alt="pessoa" title="pessoa" />LOGIN</button>
          </div>
          </header>
           
          <div className="botoes">       
           <button onClick={handleClick1} class ="button">ENTRADAS</button>
           <button onClick={handleClick2}  class ="button">PIZZAS  </button>
           <button onClick={handleClick3} class ="button">DOCES  </button>
           <button onClick={handleClick4} class ="button">BEBIDAS</button>
           <a href="/" >   <button  class ="button">MENU</button></a> 
         </div>

          <div className="resto"> 







<Headline ref ={ref} text="ENTRADAS"/>
            

          <div className="menu-container">
         

      <div className="menu-container">
        <div className="menu-column">
          <h2></h2>
          <ul>
            <li>
          <StarButton></StarButton>
              <h3>Bruschettas</h3> 
              <p>Pão italiano regado com azeite e coberto de tomate, queijo e manjericão. </p>
          <span> R$15.00</span>
          </li>


          <li>
          <StarButton></StarButton>
              <h3>Antipasto</h3> 
              <p>Seleção de queijos, azeitonas, pimentões, picles e pães crocantes. </p>
          <span> R$23.00 </span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Calabresa Acebolada</h3> 
              <p>Linguiça calabresa grelhada com cebola, servidas com pão italiano fresco.</p>
          <span> R$18.00  </span>
          </li>

          </ul>
        </div>
        <div class="retangulo1"></div>
        <div className="menu-column">
          <h2></h2>
          <ul>
          <li>
          <StarButton></StarButton>
              <h3>Bolinho de bacalhau</h3> 
              <p>Bolinhos fritos de bacalhau.
</p>
          <span> R$30.00  </span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Canapés variados</h3> 
              <p>Fatias de pão cobertas com diferentes tipos de patês, queijos ou saladas.

</p>
          <span> R$25.00 </span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Canapés variados</h3> 
              <p>Brócolis cozido e gratinado com queijo derretido.


</p>
          <span> R$15.00 </span>
          </li>
          </ul>
        </div>
        <div class="retangulo1"></div>
        <div className="menu-column">
          <h2></h2>
          <ul>
           <li>
           <StarButton></StarButton>
              <h3>Batatas rústicas</h3> 
              <p>Batatas temperadas com ervas, alho e azeite.
</p>
          <span> R$20.00 </span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Grissini</h3> 
              <p>Pequenos bastões torrados e secos de pão.
</p>
          <span> R$15.00</span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Crostini</h3> 
              <p>Massa de pizza crocante servida com azeite e parmesão.

</p>
          <span> R$15.00 </span>
          </li>
          </ul>
        </div>    
          <div class="retangulo1"></div>
        <div className="menu-column">
          <h2></h2>
          <ul>
          <li>
          <StarButton></StarButton>
              <h3>Salada de quinoa</h3> 
              <p>Salada refrescante com quinoa, vegetais frescos, ervas e molho de limão. R$27.00
</p>
          <span> R$20.00 </span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Tábua de queijos</h3> 
              <p>Pequenos cubos de queijo parmesão, brie, mussarela, emental e gorgonzola. 
</p>
          <span> R$25.00</span>
          </li>
          <li>
          <StarButton></StarButton>
              <h3>Mix de folhas</h3> 
              <p>Sortido de alface roxa, americana e rúcula com tomates confitados. 

</p>
          <span> R$27.00 </span>
          </li>
          </ul>
        </div>
      </div>
    </div>

    
    <Headline ref ={ref2} text="PIZZAS"/>  

<div className="menu-container">


<div className="menu-container">

<div className="menu-column">
<h2></h2>
<ul>
  <li>
  <StarButton></StarButton>
    <h3>Mussarela</h3> 
    <p>Molho de tomate, mussarela e orégano. </p>
<span> R$79.00</span>
</li>


<li>
<StarButton></StarButton>
    <h3>Margherita  </h3> 
    <p>Molho de tomate, mussarela, tomate fatiado e manjericão fresco.
 </p>
<span> R$80.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Pepperoni </h3> 
    <p>Molho de tomate, mussarela e fatias de pepperoni.

 </p>
<span>  R$80.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Quatro Queijos </h3> 
    <p>Molho de tomate, mussarela, provolone, gorgonzola e parmesão.

 </p>
<span>   R$85.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Calabresa </h3> 
    <p>Molho de tomate, mussarela e fatias de calabresa.

 </p>
<span> R$79.00</span>
</li>

</ul>
</div>
<div class="retangulo"></div>
<div className="menu-column">
<h2></h2>
<ul>
<li>
<StarButton></StarButton>
    <h3>Frango com catupiry</h3> 
    <p>Molho de tomate, mussarela, frango desfiado e catupiry.</p>
<span>  R$80.00 </span>
</li>


<li>
<StarButton></StarButton>
    <h3>Portuguesa  </h3> 
    <p>Molho de tomate, mussarela, calabresa, ervilha, milho, cebola e ovo.
 </p>
<span>  R$82.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Catupiry </h3> 
    <p>Molho de tomate, catupiry e orégano.

 </p>
<span>   R$76.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Vegetariana</h3> 
    <p>Molho de tomate, pimentão, cebola, champignon, tomate e manjericão. 

 </p>
<span>   R$80.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Zucchini </h3> 
    <p>Molho de tomate, mussarela e fatias de abobrinha zucchini gratinadas.


 </p>
<span> R$89.00</span>
</li>

</ul>
</div>

<div class="retangulo"></div> 
<div className="menu-column">

<h2></h2>
<ul>
<li>
<b>
<StarButton></StarButton>
  <a>
    <h3>Presunto e Queijo </h3> 
    <p>Molho de tomate, queijo mussarela, tiras de presunto parma e orégano.
 </p>
<span> R$78.00  </span></a></b>
</li>

<li>      
   <StarButton></StarButton>
    <h3>Napolitana</h3> 
    <p>Molho de tomate, mussarela, alho frito e manjericão.</p>
<span>  R$80.00 </span>
</li>




<li>
<StarButton></StarButton>
    <h3>Mussarela de Búfala </h3> 
    <p>Molho de tomate, mussarela de búfala, tomates confitados e manjericão. 

 </p>
<span>   R$85.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Tomate seco</h3> 
    <p>Molho de tomate, mussarela, tomate seco e folhas de rúcula.

 </p>
<span>   R$81.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Atum </h3> 
    <p>Molho de tomate, atum desfiado com catupiry. 


 </p>
<span>R$79.00</span>
</li>

</ul>
</div>
<div class="retangulo"></div>
<div className="menu-column">
<h2></h2>
<ul>
<li>
<StarButton></StarButton>
    <h3>Cogumelos</h3> 
    <p>Molho de tomate, mussarela e combinado de cogumelos shimeji, shitake e champignon.</p>
<span>  R$89.00 </span>
</li>


<li>
<StarButton></StarButton>
    <h3>Escarola </h3> 
    <p>Molho de tomate, mussarela, escarola e cebola. 
 </p>
<span>  R$82.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Salmão </h3> 
    <p>Molho de tomate, cream cheese e salmão flambado fatiado. 

 </p>
<span>   R$90.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Hawaina</h3> 
    <p>Molho de tomate, mussarela, bacon, abacaxi e cebola. R$86.00

 </p>
<span>    R$86.00</span>
</li>

<li>
     <StarButton></StarButton>
    <h3> Lombo</h3> 
    <p>Molho de tomate, mussarela, calabresa, bacon e lombo suíno.


 </p>
<span> R$83.00</span>
</li>
</ul>
</div>
</div>
</div>
<Headline ref ={ref3} text="DOCES"/>   

<div className="menu-container">


<div className="menu-container">

<div className="menu-column">
<h2></h2>
<ul>

<li>
<StarButton></StarButton>
    <h3>Brigadeiro</h3> 
    <p>Brigadeiro com granulado. 


 </p>
<span> R$79.00</span>
</li>

</ul>
</div>
<div class="retangulo3"></div>
<div className="menu-column">
<h2></h2>
<ul>
<li>
<StarButton></StarButton>
    <h3>Chocolate e Morango</h3> 
    <p>Chocolate ao leite e morango.  </p>
<span> R$85.00</span>
</li>


</ul>
</div>

<div class="retangulo3"></div> 
<div className="menu-column">

<h2></h2>
<ul>

<li>
<StarButton></StarButton>
    <h3>Chocolate e Banana </h3> 
    <p>Chocolate ao leite, banana, açucar e canela. 


 </p>
<span>R$85.00</span>
</li>

</ul>
</div>

<div class="retangulo3"></div>
<div className="menu-column">
<h2></h2>
<ul>

<li>
<StarButton></StarButton>
    <h3> Banana</h3> 
    <p>Banana, açúcar e canela.



 </p>
<span> R$82.00</span>
</li>
</ul>
</div>
</div>
</div>
        
    
<Headline ref ={ref4} text="BEBIDAS"/>  

<div className="menu-container">


<div className="menu-container">



<div className="menu-column">
<h2></h2>
<ul>


<li>
<StarButton></StarButton>
    <h3>Sucos</h3> 
    <p>Limão, morango, abacaxi com hortelã, laranja, maracujá, acerola, melancia, uva. 

 </p>
<span>   R$12.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Cervejas </h3> 
    <p>Heineken, Spaten, Corona, Budweiser e Stella Artois.


 </p>
<span>  R$15.00</span>
</li>

</ul>
</div>

<div class="retangulo2"></div> 
<div className="menu-column">

<h2></h2>
<ul>

<li>
<StarButton></StarButton>
    <h3>Água</h3> 
    <p>Água mineral sem gás, água mineral com gás. 

 </p>
<span>  R$5.00</span>
</li>

<li>
<StarButton></StarButton>
    <h3>Vinho</h3> 
    <p>Tinto, branco e rosé. 


 </p>
 <StarButton></StarButton>
</li>

</ul>
</div>
<div class="retangulo2"></div>
<div className="menu-column">
<h2></h2>
<ul>
<li>
<StarButton></StarButton>
    <h3>Refrigerantes</h3> 
    <p>Coca Cola, Coca Cola Zero, Guaraná Antártida, Fanta Laranja, Fanta Uva, Sprite. </p>
<span>  R$8.00 </span>
</li>


<li>
<StarButton></StarButton>
    <h3>Choppes </h3> 
    <p>Claro ou Escuro.

 </p>
<span>  R$10.00</span>
</li>


</ul>
</div>
</div>
</div>


          </div>
        

        
    </div>
  );
}

export default App_TelaFav;
