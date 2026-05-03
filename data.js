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
    { id: 1, category: 'paes', name: 'Pão Francês (Unidade)', price: 1.00, desc: 'Sempre quentinho, assado na hora.', image: 'https://images.unsplash.com/photo-1509440159591-9475d9766553?auto=format&fit=crop&w=200&q=80' },
    { id: 2, category: 'paes', name: 'Pão de Queijo', price: 2.50, desc: 'Tradicional receita de Minas Gerais.', image: 'https://images.unsplash.com/photo-1598103358254-877c0400b411?auto=format&fit=crop&w=200&q=80' },
    { id: 3, category: 'paes', name: 'Pão Doce com Creme', price: 3.00, desc: 'Massa macia com creme de baunilha.', image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=200&q=80' },

    // Bolos
    { id: 4, category: 'bolos', name: 'Bolo de Cenoura com Chocolate', price: 15.00, desc: 'Pedaço generoso com muita cobertura.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80' },
    { id: 5, category: 'bolos', name: 'Bolo de Fubá com Erva Doce', price: 12.00, desc: 'Clássico para acompanhar o café.', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=200&q=80' },
    { id: 6, category: 'bolos', name: 'Bolo de Chocolate (Fatia)', price: 8.00, desc: 'Massa fofinha e molhadinha.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=200&q=80' },

    // Café da Manhã
    { id: 7, category: 'cafe', name: 'Misto Quente', price: 8.00, desc: 'Pão francês, queijo derretido e presunto.', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80' },
    { id: 8, category: 'cafe', name: 'Pão na Chapa', price: 4.50, desc: 'Com manteiga Aviação.', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=200&q=80' },
    { id: 9, category: 'cafe', name: 'Ovos Mexidos', price: 6.00, desc: 'Acompanha uma torradinha.', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80' },

    // Bebidas
    { id: 10, category: 'bebidas', name: 'Café Coado (Copo)', price: 3.00, desc: 'Feito na hora, aroma irresistível.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&q=80' },
    { id: 11, category: 'bebidas', name: 'Pingado / Média', price: 4.50, desc: 'Café com leite quentinho.', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=200&q=80' },
    { id: 12, category: 'bebidas', name: 'Suco de Laranja (300ml)', price: 7.00, desc: 'Natural da fruta, sem açúcar.', image: 'https://images.unsplash.com/photo-1613478223719-2ab30262b124?auto=format&fit=crop&w=200&q=80' },
    { id: 13, category: 'bebidas', name: 'Refrigerante Lata', price: 6.00, desc: 'Coca-Cola, Guaraná, etc.', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80' },

    // Kits
    { id: 14, category: 'kits', name: 'Kit Café Rápido', price: 10.00, desc: '1 Pingado + 1 Misto Quente.', image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=200&q=80' },
    { id: 15, category: 'kits', name: 'Kit Família', price: 25.00, desc: '10 Pães + 1 Bolo de Fubá + 1 Refri 2L.', image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=200&q=80' }
];
