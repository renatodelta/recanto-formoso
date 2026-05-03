const storeData = {
    name: "Padaria do Formoso",
    phone: "5512991530244", // Coloque o número do WhatsApp aqui, com código do país (55) e DDD
    openingHours: {
        start: 7, // 07:00
        end: 19   // 19:00
    }
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
    { id: 1, category: 'paes', name: 'Pão Francês (Unidade)', price: 1.00, desc: 'Sempre quentinho, assado na hora.' },
    { id: 2, category: 'paes', name: 'Pão de Queijo', price: 2.50, desc: 'Tradicional receita de Minas Gerais.' },
    { id: 3, category: 'paes', name: 'Pão Doce com Creme', price: 3.00, desc: 'Massa macia com creme de baunilha.' },

    // Bolos
    { id: 4, category: 'bolos', name: 'Bolo de Cenoura com Chocolate', price: 15.00, desc: 'Pedaço generoso com muita cobertura.' },
    { id: 5, category: 'bolos', name: 'Bolo de Fubá com Erva Doce', price: 12.00, desc: 'Clássico para acompanhar o café.' },
    { id: 6, category: 'bolos', name: 'Bolo de Chocolate (Fatia)', price: 8.00, desc: 'Massa fofinha e molhadinha.' },

    // Café da Manhã
    { id: 7, category: 'cafe', name: 'Misto Quente', price: 8.00, desc: 'Pão francês, queijo derretido e presunto.' },
    { id: 8, category: 'cafe', name: 'Pão na Chapa', price: 4.50, desc: 'Com manteiga Aviação.' },
    { id: 9, category: 'cafe', name: 'Ovos Mexidos', price: 6.00, desc: 'Acompanha uma torradinha.' },

    // Bebidas
    { id: 10, category: 'bebidas', name: 'Café Coado (Copo)', price: 3.00, desc: 'Feito na hora, aroma irresistível.' },
    { id: 11, category: 'bebidas', name: 'Pingado / Média', price: 4.50, desc: 'Café com leite quentinho.' },
    { id: 12, category: 'bebidas', name: 'Suco de Laranja (300ml)', price: 7.00, desc: 'Natural da fruta, sem açúcar.' },
    { id: 13, category: 'bebidas', name: 'Refrigerante Lata', price: 6.00, desc: 'Coca-Cola, Guaraná, etc.' },

    // Kits
    { id: 14, category: 'kits', name: 'Kit Café Rápido', price: 10.00, desc: '1 Pingado + 1 Misto Quente.' },
    { id: 15, category: 'kits', name: 'Kit Família', price: 25.00, desc: '10 Pães + 1 Bolo de Fubá + 1 Refri 2L.' }
];
