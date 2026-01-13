// src/data/plants.js

// 1. Importación de imágenes (asegúrate de que los nombres coincidan exactamente)
import lengua from '../assets/Lengua_suegra.png';
import dragon from '../assets/Dragon.png';
import areca from '../assets/arecaceae.png';
import ravenea from '../assets/Ravenea.png';
import perenne from '../assets/árbol de hoja perenne.png';
import higo from '../assets/Maceta de higo.png';

import lavanda from '../assets/lavanda.png';
import jazmin from '../assets/jazmín de cabo.png';
import pino from '../assets/pino norfolk.png';
import arreglos from '../assets/arreglos florales.png';
import ficus from '../assets/ficus retusa.png';
import margarita from '../assets/margarita de Transvaal.png';

import yucca from '../assets/Yucca.png';
import paraiso from '../assets/Planta de ave del paraíso.png';
import anturio from '../assets/laceleaf.png';
import cactus from '../assets/cactaceae.png';
import suculenta from '../assets/suculentas.png';
import suculentasMix from '../assets/Tres variedades de plantas verdes suculentas.png';

const plantsArray = [
  // --- CATEGORÍA 1: Purificadoras de Aire (6 Plantas) ---
  {
    id: 1,
    name: "Lengua de Suegra",
    price: 25,
    description: "Campeona en purificar el aire y muy resistente.",
    image: lengua, 
    category: "Purificadoras"
  },
  {
    id: 2,
    name: "Dracaena Marginata",
    price: 10,
    description: "Elimina toxinas y decora con elegancia.",
    image: dragon,
    category: "Purificadoras"
  },
  {
    id: 3,
    name: "Palma Areca",
    price: 30,
    description: "Humidifica el ambiente y purifica intensamente.",
    image: areca,
    category: "Purificadoras"
  },
  {
    id: 4,
    name: "Palma Ravenea",
    price: 35,
    description: "Majestuosa y excelente filtradora de aire.",
    image: ravenea,
    category: "Purificadoras"
  },
  {
    id: 5,
    name: "Árbol Perenne",
    price: 45,
    description: "Follaje denso que atrapa polvo y partículas.",
    image: perenne,
    category: "Purificadoras"
  },
  {
    id: 6,
    name: "Ficus Lyrata (Higo)",
    price: 40,
    description: "Hojas grandes que oxigenan tu sala.",
    image: higo,
    category: "Purificadoras"
  },

  // --- CATEGORÍA 2: Aromáticas y Medicinales (6 Plantas) ---
  {
    id: 7,
    name: "Lavanda Francesa",
    price: 20,
    description: "Aroma relajante ideal para dormitorios.",
    image: lavanda,
    category: "Aromáticas"
  },
  {
    id: 8,
    name: "Jazmín del Cabo",
    price: 18,
    description: "Fragancia dulce y flores blancas hermosas.",
    image: jazmin,
    category: "Aromáticas"
  },
  {
    id: 9,
    name: "Pino Norfolk",
    price: 25,
    description: "Aroma fresco a bosque, ideal para interiores.",
    image: pino,
    category: "Aromáticas"
  },
  {
    id: 10,
    name: "Ramo Floral",
    price: 15,
    description: "Mezcla de flores estacionales con suave perfume.",
    image: arreglos,
    category: "Aromáticas"
  },
  {
    id: 11,
    name: "Laurel de Indias",
    price: 22,
    description: "Arbusto clásico con hojas aromáticas.",
    image: ficus, // Reutilizando la imagen del ficus retusa
    category: "Aromáticas"
  },
  {
    id: 12,
    name: "Gerbera / Manzanilla",
    price: 12,
    description: "Color vibrante y propiedades naturales.",
    image: margarita,
    category: "Aromáticas"
  },

  // --- CATEGORÍA 3: Decorativas (6 Plantas) ---
  {
    id: 13,
    name: "Yucca Gigante",
    price: 50,
    description: "Impacto visual y requiere muy pocos cuidados.",
    image: yucca,
    category: "Decorativas"
  },
  {
    id: 14,
    name: "Ave del Paraíso",
    price: 55,
    description: "Flores exóticas que parecen pájaros en vuelo.",
    image: paraiso,
    category: "Decorativas"
  },
  {
    id: 15,
    name: "Anturio Rojo",
    price: 28,
    description: "Flores brillantes y duraderas todo el año.",
    image: anturio,
    category: "Decorativas"
  },
  {
    id: 16,
    name: "Cactus Desértico",
    price: 15,
    description: "Formas esculturales y mantenimiento cero.",
    image: cactus,
    category: "Decorativas"
  },
  {
    id: 17,
    name: "Suculenta Jade",
    price: 12,
    description: "Pequeña joya verde de hojas carnosas.",
    image: suculenta,
    category: "Decorativas"
  },
  {
    id: 18,
    name: "Trío de Suculentas",
    price: 25,
    description: "Variedad de texturas en un solo arreglo.",
    image: suculentasMix,
    category: "Decorativas"
  }
];

export default plantsArray;