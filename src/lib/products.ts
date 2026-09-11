import latte from "@/assets/prod-latte.jpg";
import iced from "@/assets/prod-iced.jpg";
import sweet from "@/assets/prod-sweet.jpg";
import savory from "@/assets/prod-savory.jpg";
import tea from "@/assets/prod-tea.jpg";
import espresso from "@/assets/prod-espresso.jpg";

export type CategoryId =
  | "cafes"
  | "tematicas"
  | "geladas"
  | "chas"
  | "doces"
  | "salgados"
  | "combos";

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  short: string;
  description: string;
  ingredients: string[];
  image: string;
  imageAlt: string;
  sizes?: boolean | undefined;
  extras?: boolean | undefined;
  badge?: string | undefined;
};

export const categories: { id: CategoryId; label: string; icon: string }[] = [
  { id: "cafes", label: "Cafés", icon: "☕" },
  { id: "tematicas", label: "Bebidas temáticas", icon: "🌙" },
  { id: "geladas", label: "Bebidas geladas", icon: "🧊" },
  { id: "chas", label: "Chás", icon: "🍵" },
  { id: "doces", label: "Doces", icon: "🍰" },
  { id: "salgados", label: "Salgados", icon: "🥪" },
  { id: "combos", label: "Combos", icon: "🍪" },
];

export const sizeOptions = [
  { id: "p", label: "Pequeno", delta: 0 },
  { id: "m", label: "Médio", delta: 3 },
  { id: "g", label: "Grande", delta: 5.5 },
];

export const extraOptions = [
  { id: "chantilly", label: "Chantilly", price: 3 },
  { id: "vegetal", label: "Leite vegetal", price: 4 },
  { id: "calda", label: "Calda extra", price: 2.5 },
  { id: "canela", label: "Canela", price: 1 },
  { id: "chocolate", label: "Raspas de chocolate", price: 2.5 },
];

const drink = (
  id: string,
  name: string,
  category: CategoryId,
  price: number,
  short: string,
  description: string,
  ingredients: string[],
  image: string,
  imageAlt: string,
  badge?: string,
): Product => ({
  id,
  name,
  category,
  price,
  short,
  description,
  ingredients,
  image,
  imageAlt,
  sizes: true,
  extras: true,
  badge,
});

const food = (
  id: string,
  name: string,
  category: CategoryId,
  price: number,
  short: string,
  description: string,
  ingredients: string[],
  image: string,
  imageAlt: string,
  badge?: string,
): Product => ({
  id,
  name,
  category,
  price,
  short,
  description,
  ingredients,
  image,
  imageAlt,
  badge,
});

export const products: Product[] = [
  // Cafés
  drink(
    "espresso",
    "Espresso",
    "cafes",
    8.5,
    "Curto, intenso e sem rodeios.",
    "Dose única de café especial, extraída na hora. Corpo denso, crema aveludada e final achocolatado — o começo de toda uivada.",
    ["Café especial moído na hora", "Água filtrada"],
    espresso,
    "Espresso em xícara escura com grãos de café ao redor",
  ),
  drink(
    "cappuccino",
    "Cappuccino",
    "cafes",
    13.9,
    "Espresso, leite vapor e espuma sedosa.",
    "Equilíbrio clássico entre espresso e leite vaporizado, com uma camada generosa de espuma e um toque de canela por cima.",
    ["Espresso duplo", "Leite vaporizado", "Espuma de leite", "Canela"],
    latte,
    "Cappuccino visto de cima com desenho no leite",
  ),
  drink(
    "latte",
    "Latte",
    "cafes",
    14.5,
    "Suave, cremoso, café de conversa longa.",
    "Mais leite, menos pressa. Nosso latte é feito para durar o tempo de um capítulo inteiro do seu livro.",
    ["Espresso", "Leite vaporizado"],
    latte,
    "Latte com arte no leite sobre fundo escuro",
  ),
  drink(
    "mocha",
    "Mocha",
    "cafes",
    16.5,
    "Café com chocolate meio amargo.",
    "Espresso encontrando chocolate 60% e leite cremoso. Doce na medida, escuro na atitude.",
    ["Espresso", "Chocolate 60%", "Leite", "Chantilly"],
    latte,
    "Mocha cremoso em xícara escura",
  ),
  drink(
    "filtrado",
    "Café filtrado",
    "cafes",
    9.9,
    "Coado na hora, notas frutadas.",
    "Método coado com grãos de origem única. Leve, aromático e perfeito para acompanhar um doce.",
    ["Café de origem única", "Água filtrada"],
    espresso,
    "Café filtrado servido em xícara escura",
  ),
  drink(
    "macchiato",
    "Macchiato",
    "cafes",
    10.9,
    "Espresso marcado com espuma.",
    "Um espresso com apenas uma colher de espuma — para quem gosta de café com um leve carinho.",
    ["Espresso", "Espuma de leite"],
    espresso,
    "Macchiato em xícara pequena",
  ),

  // Temáticas
  drink(
    "moonlight-latte",
    "Moonlight Latte",
    "tematicas",
    18.9,
    "Latte de baunilha com brilho de lua.",
    "Nosso carro-chefe: latte de baunilha com leve toque floral e um pó comestível prateado que faz a espuma parecer luar.",
    ["Espresso", "Leite", "Xarope de baunilha", "Pó comestível prateado"],
    latte,
    "Moonlight Latte com espuma clara e brilho prateado",
    "Mais pedido",
  ),
  drink(
    "dark-forest-mocha",
    "Dark Forest Mocha",
    "tematicas",
    19.9,
    "Mocha escuro com cereja preta.",
    "Chocolate amargo, espresso encorpado e calda de cereja preta. A trilha sonora sugerida é pesada.",
    ["Espresso duplo", "Chocolate 70%", "Calda de cereja preta", "Leite"],
    iced,
    "Dark Forest Mocha com calda escura",
    "Favorito da casa",
  ),
  drink(
    "purple-night",
    "Purple Night",
    "tematicas",
    19.5,
    "Café com ube e lavanda.",
    "Doce, floral e absurdamente roxo. Feito com creme de ube e um sussurro de lavanda.",
    ["Espresso", "Creme de ube", "Lavanda", "Leite"],
    iced,
    "Bebida roxa gelada com camadas",
  ),
  drink(
    "wolf-vanilla-latte",
    "Wolf Vanilla Latte",
    "tematicas",
    17.9,
    "Baunilha bourbon e caramelo salgado.",
    "O abraço da alcateia em forma de bebida: baunilha bourbon, fio de caramelo salgado e espuma bem densa.",
    ["Espresso", "Baunilha bourbon", "Caramelo salgado", "Leite"],
    latte,
    "Wolf Vanilla Latte com caramelo",
  ),
  drink(
    "midnight-coffee",
    "Midnight Coffee",
    "tematicas",
    16.9,
    "Café preto com carvão ativado.",
    "Preto absoluto, levemente adocicado, com um toque cítrico no final. Servido depois das 20h com bolachinha de lua.",
    ["Café especial", "Carvão ativado comestível", "Xarope de laranja"],
    espresso,
    "Café preto intenso em xícara escura",
  ),

  // Geladas
  drink(
    "iced-latte",
    "Iced Latte",
    "geladas",
    16.9,
    "Espresso gelado com leite e gelo.",
    "Espresso resfriado na hora sobre leite e gelo. Simples, refrescante, direto ao ponto.",
    ["Espresso", "Leite", "Gelo"],
    iced,
    "Iced latte em copo alto com gelo",
  ),
  drink(
    "iced-mocha",
    "Iced Mocha",
    "geladas",
    18.5,
    "Chocolate gelado com café.",
    "Mocha servido bem gelado, com chantilly e raspas de chocolate por cima.",
    ["Espresso", "Chocolate", "Leite", "Gelo", "Chantilly"],
    iced,
    "Iced mocha com chantilly",
  ),
  drink(
    "cold-brew",
    "Cold Brew",
    "geladas",
    17.5,
    "18 horas de extração a frio.",
    "Extração lenta que resulta em um café doce naturalmente, com baixa acidez e muita cafeína.",
    ["Café especial", "Água filtrada", "Gelo"],
    iced,
    "Cold brew servido em copo com gelo",
  ),
  drink(
    "frappe",
    "Frappé da Alcateia",
    "geladas",
    20.9,
    "Cremoso, batido e coberto de chantilly.",
    "Café batido com gelo e leite, finalizado com chantilly e calda de chocolate escuro.",
    ["Café", "Leite", "Gelo", "Chantilly", "Calda de chocolate"],
    iced,
    "Frappé cremoso com chantilly",
  ),

  // Chás
  drink(
    "cha-frutas-vermelhas",
    "Chá de frutas vermelhas",
    "chas",
    12.9,
    "Ácido, doce e bem vermelho.",
    "Blend de hibisco, amora e framboesa. Ótimo quente ou gelado.",
    ["Hibisco", "Amora", "Framboesa", "Morango desidratado"],
    tea,
    "Chá servido em xícara de vidro",
  ),
  drink(
    "cha-lavanda",
    "Chá de lavanda",
    "chas",
    13.5,
    "Floral e calmante.",
    "Lavanda com camomila e um toque de mel. O chá oficial das noites tranquilas.",
    ["Lavanda", "Camomila", "Mel"],
    tea,
    "Chá de lavanda com flores em copo de vidro",
    "Vegano",
  ),
  drink(
    "cha-baunilha",
    "Chá de baunilha",
    "chas",
    12.5,
    "Chá preto com baunilha real.",
    "Chá preto encorpado com fava de baunilha. Combina perfeitamente com o Cookie da Lua.",
    ["Chá preto", "Fava de baunilha"],
    tea,
    "Chá de baunilha em xícara transparente",
  ),
  drink(
    "cha-noturno",
    "Chá noturno",
    "chas",
    13.9,
    "Sem cafeína, para fechar a noite.",
    "Melissa, erva-cidreira e maçã. Servido com um biscoitinho em formato de estrela.",
    ["Melissa", "Erva-cidreira", "Maçã desidratada"],
    tea,
    "Chá noturno em copo de vidro",
  ),

  // Doces
  food(
    "cookie-da-lua",
    "Cookie da Lua",
    "doces",
    11.9,
    "Cookie de baunilha com glacê lilás.",
    "Nosso cookie assinatura em formato de lua crescente, com massa amanteigada e glacê lilás de amora.",
    ["Farinha", "Manteiga", "Baunilha", "Glacê de amora"],
    sweet,
    "Cookie em formato de lua com glacê lilás",
    "Assinatura",
  ),
  food(
    "brownie-alcateia",
    "Brownie da Alcateia",
    "doces",
    14.9,
    "Denso, com nozes e chocolate 70%.",
    "Brownie de chocolate meio amargo com nozes tostadas e flor de sal. Pede um espresso do lado.",
    ["Chocolate 70%", "Nozes", "Ovos", "Flor de sal"],
    sweet,
    "Brownie de chocolate em prato escuro",
  ),
  food(
    "bolo-chocolate",
    "Bolo de chocolate",
    "doces",
    16.9,
    "Três camadas, ganache escura.",
    "Fatia generosa de bolo de chocolate com ganache e uma estrelinha de açúcar por cima.",
    ["Chocolate", "Farinha", "Ovos", "Creme de leite"],
    sweet,
    "Fatia de bolo de chocolate",
  ),
  food(
    "cheesecake",
    "Cheesecake de amora",
    "doces",
    18.5,
    "Cremoso com calda de amora.",
    "Base crocante, recheio cremoso e calda de amora bem roxa escorrendo pelas laterais.",
    ["Cream cheese", "Biscoito", "Amora", "Açúcar"],
    sweet,
    "Cheesecake com calda de amora",
  ),
  food(
    "cupcake-wolf",
    "Cupcake Wolf",
    "doces",
    12.9,
    "Com orelhinhas de chocolate.",
    "Cupcake de baunilha com buttercream lilás, orelhinhas de chocolate e um laço de açúcar.",
    ["Baunilha", "Buttercream", "Chocolate", "Corante natural"],
    sweet,
    "Cupcake decorado com orelhas de chocolate",
  ),

  // Salgados
  food(
    "croissant",
    "Croissant",
    "salgados",
    13.9,
    "Folhado, amanteigado, quentinho.",
    "Croissant artesanal de fermentação lenta, assado várias vezes ao dia.",
    ["Farinha", "Manteiga francesa", "Fermento natural"],
    savory,
    "Croissant dourado em prato escuro",
  ),
  food(
    "sanduiche-artesanal",
    "Sanduíche artesanal",
    "salgados",
    26.9,
    "Pão de fermentação natural.",
    "Pão de fermentação natural com queijo, tomate assado, rúcula e maionese de ervas.",
    ["Pão natural", "Queijo", "Tomate assado", "Rúcula", "Maionese de ervas"],
    savory,
    "Sanduíche artesanal em prato escuro",
    "Vegetariano",
  ),
  food(
    "pao-de-queijo",
    "Pão de queijo",
    "salgados",
    8.9,
    "Porção com 3 unidades.",
    "Feitos na casa, com queijo canastra. Crocante por fora, elástico por dentro.",
    ["Polvilho", "Queijo canastra", "Ovos"],
    savory,
    "Pães de queijo em prato escuro",
  ),
  food(
    "torta-salgada",
    "Torta salgada da casa",
    "salgados",
    19.9,
    "Recheio de legumes assados.",
    "Massa quebradiça com recheio de legumes assados e queijo derretido. Vegetariana.",
    ["Massa", "Abobrinha", "Berinjela", "Queijo"],
    savory,
    "Fatia de torta salgada",
    "Vegetariano",
  ),

  // Combos
  food(
    "combo-luar",
    "Combo Luar",
    "combos",
    27.9,
    "Moonlight Latte + Cookie da Lua.",
    "A dupla mais pedida da casa por um preço melhor: um Moonlight Latte médio e um Cookie da Lua.",
    ["Moonlight Latte médio", "Cookie da Lua"],
    latte,
    "Combo de latte com cookie",
    "Economize R$ 6",
  ),
  food(
    "combo-madrugada",
    "Combo Madrugada",
    "combos",
    31.9,
    "Midnight Coffee + Brownie da Alcateia.",
    "Para virar a noite estudando: café preto intenso e brownie denso de chocolate.",
    ["Midnight Coffee grande", "Brownie da Alcateia"],
    espresso,
    "Combo de café preto com brownie",
  ),
  food(
    "combo-matilha",
    "Combo Matilha",
    "combos",
    39.9,
    "Dois cafés + dois doces.",
    "Feito para dividir: dois cafés à escolha (até R$ 17) e dois doces do balcão.",
    ["2 cafés", "2 doces"],
    sweet,
    "Combo com dois cafés e dois doces",
  ),
  food(
    "combo-manha",
    "Combo Manhã de Lobo",
    "combos",
    24.9,
    "Cappuccino + croissant.",
    "Começo de dia clássico: cappuccino quentinho e croissant amanteigado.",
    ["Cappuccino", "Croissant"],
    savory,
    "Combo de cappuccino com croissant",
  ),
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
