let storeData = {
    name: "Seleção Recanto",
    phone: "5511999999999", // Número do WhatsApp
    address: "Recanto Formoso, S/N",
    hours: "Ter a Dom: 10h às 18h",
    status: "open" // "open" ou "closed"
};

let categories = [
    { id: "frescos", name: "🧀 Queijos Frescos" },
    { id: "curados", name: "🧀 Queijos Curados" }
];

let products = [
    // Maturados
    { 
        id: 1, 
        category: 'maturados', 
        name: 'Queijo Canastra Meia Cura', 
        price: 65.00, 
        desc: 'Peça aprox. 800g. Casca amarelada, interior macio. Perfeito com um café.', 
        image: 'https://cdn.sistemawbuy.com.br/arquivos/f90918cf526847bc1815e967a5b3a4a1/produtos/MNB1UG3/14-06-23-6489dc240a5a5-6712b32cd58dc_mini.jpg' 
    },
    { 
        id: 2, 
        category: 'maturados', 
        name: 'Queijo Parmesão Artesanal', 
        price: 85.00, 
        desc: 'Peça aprox. 500g. Maturação de 6 meses, cristais de sal, sabor intenso e picante.', 
        image: 'https://s2.glbimg.com/O6m7_kPnsy0Y2nF8-4Q17F72S5U=/e.glbimg.com/og/ed/f/original/2016/11/04/queijos.jpg' 
    },

    // Frescos
    { 
        id: 3, 
        category: 'frescos', 
        name: 'Queijo Minas Frescal', 
        price: 35.00, 
        desc: 'Peça aprox. 500g. Leve, molhadinho e com baixo teor de sal.', 
        image: 'https://vivarioma.com.br/wp-content/uploads/2018/11/receita_de_queijo_minas.jpg' 
    },
    { 
        id: 4, 
        category: 'frescos', 
        name: 'Requeijão de Corte', 
        price: 45.00, 
        desc: 'Peça aprox. 400g. Aquele tradicional requeijão moreno da roça.', 
        image: 'https://t2.rg.ltmcdn.com/pt/posts/9/5/6/requeijao_de_corte_com_queijo_prato_7659_orig.jpg' 
    },

    // Doces
    { 
        id: 5, 
        category: 'doces', 
        name: 'Doce de Leite na Palha', 
        price: 25.00, 
        desc: 'Barra de 300g. O acompanhamento perfeito para o Queijo Canastra.', 
        image: 'https://img.elo7.com.br/product/main/29F2573/doce-de-leite-na-palha-pacote-com-250g-doces.jpg' 
    },
    { 
        id: 6, 
        category: 'doces', 
        name: 'Goiabada Cascão', 
        price: 20.00, 
        desc: 'Peça de 400g. Para fazer aquele Romeu e Julieta inesquecível.', 
        image: 'https://static1.casapraticaqualita.com.br/articles/4/49/74/@/56230-o-queijo-com-goiabada-e-uma-das-sobremes-article_lead-1.jpg' 
    }
];
