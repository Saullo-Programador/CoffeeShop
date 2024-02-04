import { ImageProps } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

 export interface PropsCategoria{
  categoria : number;
  title: string;
}

export const categories:PropsCategoria[] = [
  {
   categoria: 1,
    title: "Cappuccino",
  },
  {
   categoria: 2,
    title: "Latte",
  },
  {
   categoria: 3,
    title: "Espresso",
  },
  {
   categoria: 4,
    title: "Mocha",
  },
]

export interface PropsCaffee{
  name: string;
  image: any;
  desc: string;
  volume: number;
  stars: number;
  categoria: number;
  valor: number;
  id: number;
}

export const CoffeeList:PropsCaffee[] = [
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo.',
    volume: 80,
    stars: 5,
   categoria: 1,
    valor: 7.99,
    id: 1,
  },
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino2.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo.',
    volume: 90,
    stars: 5,
   categoria: 1,
    valor: 8.99,
    id:2, 
  },
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino3.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo.',
    volume: 100,
    stars: 4.8,
   categoria: 1,
    valor: 7.99,
    id: 3, 
  },
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino4.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo 2.',
    volume: 100,
    stars: 4.6,
   categoria: 1,
    valor: 6.50,
    id: 4, 
  },
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino5.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo.',
    volume: 60,
    stars: 5,
   categoria: 1,
    valor: 4.50,
    id: 5, 
  },
  {
    name: "Cappuccino",
    image: require('../Assets/Cappuccino/Cappuccino6.png'),
    desc: 'Um cappuccino é uma combinação de espresso e leite em um copo com uma camada de crema ou sumo...',
    volume: 90,
    stars: 4.9,
   categoria: 1,
    valor: 6.99,
    id: 6,
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso1.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 30,
    stars: 5,
   categoria: 2,
    valor: 4.50,
    id: 7, 
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso2.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 30,
    stars: 4,
   categoria: 2,
    valor: 3.99,
    id: 8, 
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso3.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 70,
    stars: 3.9,
   categoria: 2,
    valor: 5.99,
    id: 9, 
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso4.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 50,
    stars: 5,
   categoria: 2,
    valor: 4.50,
    id: 10, 
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso5.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 30,
    stars: 5,
   categoria: 2,
    valor: 3.50,
    id: 11, 
  },
  {
    name: 'Espresso',
    image: require('../Assets/Espresso/Espresso6.png'),
    desc: 'O espresso é uma forma concentrada de café italiano, preparado por extração rápida e sob pressão...',
    volume: 55,
    stars: 4.9,
   categoria: 2,
    valor: 4.50,
    id: 12, 
  },

  {
    name: 'Latte',
    image: require('../Assets/Latte/Latte.png'),
    desc: 'Latte é Feito com espresso e leite vaporizado, o latte é reconhecido pela sua textura cremosa e sabor suave.',
    volume: 90,
    stars: 4.3,
   categoria: 3,
    valor: 4.99,
    id: 13, 
  },
  {
    name: 'Latte',
    image: require('../Assets/Latte/Latte2.png'),
    desc: 'Latte é Feito com espresso e leite vaporizado, o latte é reconhecido pela sua textura cremosa e sabor suave.',
    volume: 90,
    stars: 4.8,
   categoria: 3,
    valor: 4.50,
    id: 14, 
  },
  {
    name: 'Latte',
    image: require('../Assets/Latte/Latte3.png'),
    desc: 'Latte é Feito com espresso e leite vaporizado, o latte é reconhecido pela sua textura cremosa e sabor suave.',
    volume: 90,
    stars: 4.9,
   categoria: 3,
    valor: 5.90,
    id: 15, 
  },
  {
    name: 'Latte',
    image: require('../Assets/Latte/Latte4.png'),
    desc: 'Latte é Feito com espresso e leite vaporizado, o latte é reconhecido pela sua textura cremosa e sabor suave.',
    volume: 90,
    stars: 4.8,
   categoria: 3,
    valor: 4.50,
    id: 16, 
  },
  {
    name: "Mocha",
    image: require("../Assets/Mocha/Mocha1.png"),
    desc: 'O Mocha é uma bebida da família Espresso, mas com a adição do chocolate ao longo do leite.',
    volume: 100,
    stars: 4.6,
   categoria: 4,
    valor: 5.30,
    id: 18,
  },
  {
    name: "Mocha",
    image: require("../Assets/Mocha/Mocha2.png"),
    desc: 'O Mocha é uma bebida da família Espresso, mas com a adição do chocolate ao longo do leite.',
    volume: 450,
    stars: 4.9,
   categoria: 4,
    valor: 8.60,
    id: 19,
  },
  {
    name: "Mocha",
    image: require("../Assets/Mocha/Mocha3.png"),
    desc: 'O Mocha é uma bebida da família Espresso, mas com a adição do chocolate ao longo do leite.',
    volume: 600,
    stars: 5,
   categoria: 4,
    valor: 11.99,
    id: 20,
  },
  {
    name: "Mocha",
    image: require("../Assets/Mocha/Mocha4.png"),
    desc: 'O Mocha é uma bebida da família Espresso, mas com a adição do chocolate ao longo do leite.',
    volume: 90,
    stars: 4.6,
   categoria: 4,
    valor: 5.50,
    id: 21,
  },
  {
    name: "Mocha",
    image: require("../Assets/Mocha/Mocha5.png"),
    desc: 'O Mocha é uma bebida da família Espresso, mas com a adição do chocolate ao longo do leite.',
    volume: 500,
    stars: 4.9,
   categoria: 4,
    valor: 10.50,
    id: 22,
  },

]