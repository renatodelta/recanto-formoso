const storeData = {
    name: "Padaria do Formoso",
    phone: "5512997894423", // Coloque o número do WhatsApp aqui, com código do país (55) e DDD
    openingHours: {
        start: 7, // 07:00
        end: 19   // 19:00
    },
    version: "1.0.8"
};

const categories = [
    { id: 'paes', name: '🥖 Pães Fresquinhos' },
    { id: 'bolos', name: '🍰 Bolos Caseiros' },
    { id: 'cafe', name: '☕ Café da Manhã' },
    { id: 'bebidas', name: '🧃 Bebidas' },
    { id: 'kits', name: '🎁 Kits Promocionais' }
];

const products = [
    // Pães
    { id: 1, category: 'paes', name: 'Pão Francês (Unidade)', price: 1.00, desc: 'Sempre quentinho, assado na hora.', image: 'https://loremflickr.com/320/320/bread?lock=1' },
    { id: 2, category: 'paes', name: 'Pão de Queijo', price: 2.50, desc: 'Tradicional receita de Minas Gerais.', image: 'https://loremflickr.com/320/320/cheesebread?lock=2' },
    { id: 3, category: 'paes', name: 'Pão Doce com Creme', price: 3.00, desc: 'Massa macia com creme de baunilha.', image: 'https://loremflickr.com/320/320/sweetbread?lock=3' },

    // Bolos
    { id: 4, category: 'bolos', name: 'Bolo de Cenoura com Chocolate', price: 15.00, desc: 'Pedaço generoso com muita cobertura.', image: 'https://loremflickr.com/320/320/cake,chocolate?lock=4' },
    { id: 5, category: 'bolos', name: 'Bolo de Fubá com Erva Doce', price: 12.00, desc: 'Clássico para acompanhar o café.', image: 'https://loremflickr.com/320/320/cake,corn?lock=5' },
    { id: 6, category: 'bolos', name: 'Bolo de Chocolate (Fatia)', price: 8.00, desc: 'Massa fofinha e molhadinha.', image: 'https://loremflickr.com/320/320/chocolatecake?lock=6' },

    // Café da Manhã
    { id: 7, category: 'cafe', name: 'Misto Quente', price: 8.00, desc: 'Pão francês, queijo derretido e presunto.', image: 'https://loremflickr.com/320/320/sandwich?lock=7' },
    { id: 8, category: 'cafe', name: 'Pão na Chapa', price: 4.50, desc: 'Com manteiga Aviação.', image: 'https://loremflickr.com/320/320/toast?lock=8' },
    { id: 9, category: 'cafe', name: 'Ovos Mexidos', price: 6.00, desc: 'Acompanha uma torradinha.', image: 'https://loremflickr.com/320/320/eggs?lock=9' },

    // Bebidas
    { id: 10, category: 'bebidas', name: 'Café Coado (Copo)', price: 3.00, desc: 'Feito na hora, aroma irresistível.', image: 'https://loremflickr.com/320/320/coffee?lock=10' },
    { id: 11, category: 'bebidas', name: 'Pingado / Média', price: 4.50, desc: 'Café com leite quentinho.', image: 'https://loremflickr.com/320/320/latte?lock=11' },
    { id: 12, category: 'bebidas', name: 'Suco de Laranja (300ml)', price: 7.00, desc: 'Natural da fruta, sem açúcar.', image: 'https://loremflickr.com/320/320/orangejuice?lock=12' },
    { id: 13, category: 'bebidas', name: 'Refrigerante Lata', price: 6.00, desc: 'Coca-Cola, Guaraná, etc.', image: 'https://loremflickr.com/320/320/soda?lock=13' },

    // Kits
    { id: 14, category: 'kits', name: 'Kit Café Rápido', price: 10.00, desc: '1 Pingado + 1 Misto Quente.', image: 'https://loremflickr.com/320/320/breakfast,set?lock=14' },
    { id: 15, category: 'kits', name: 'Kit Família', price: 25.00, desc: '10 Pães + 1 Bolo de Fubá + 1 Refri 2L.', image: 'https://loremflickr.com/320/320/bakery,box?lock=15' }
];
