const storeData = {
    name: "Recanto Formoso",
    phone: "5512997894423", // Coloque o número do WhatsApp aqui, com código do país (55) e DDD
    openingHours: {
        start: 5, // 05:00
        end: 24   // 00:00 (Fim do dia)
    },
    version: "1.4.1"
};

const categories = [
    { id: 'ofertas', name: '🔥 Super Ofertas' },
    { id: 'paes', name: '🥖 Pães Fresquinhos' },
    { id: 'bolos', name: '🍰 Bolos Caseiros' },
    { id: 'cafe', name: '☕ Café da Manhã' },
    { id: 'leites', name: '🥛 Leites' },
    { id: 'bebidas', name: '🧃 Bebidas' },
    { id: 'higiene', name: '🧽 Higiene' },
    { id: 'bebes', name: '🍼 Bebês' },
    { id: 'kits', name: '🎁 Kits Promocionais' }
];

const products = [
    // Pães
    { id: 1, category: 'paes', name: 'Pão Francês (Unidade)', price: 1.00, desc: 'Sempre quentinho, assado na hora.', image: 'https://static.wixstatic.com/media/8024f8_bac82cd0e1fd46a4966ef91db685dbf9~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8024f8_bac82cd0e1fd46a4966ef91db685dbf9~mv2.jpg' },
    { id: 2, category: 'paes', name: 'Pão de Queijo', price: 2.50, desc: 'Tradicional receita de Minas Gerais.', image: 'https://msabores.com/wp-content/uploads/2024/02/Design-sem-nome.webp' },
    { id: 3, category: 'paes', name: 'Pão Doce com Creme', price: 3.00, desc: 'Massa macia com creme de baunilha.', image: 'https://i.ytimg.com/vi/QMqo0yXDZ0Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVeotn8raSQVj9bR0rmKTxhjCOTQ' },

    // Bolos
    { id: 4, category: 'bolos', name: 'Bolo de Cenoura com Chocolate', price: 15.00, desc: 'Pedaço generoso com muita cobertura.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_EWtYJXZ7m2ZQibS0IeJ1Ie3dfOhL74wrw&s' },
    { id: 5, category: 'bolos', name: 'Bolo de Fubá com Erva Doce', price: 12.00, desc: 'Clássico para acompanhar o café.', image: 'https://receitatodahora.com.br/wp-content/uploads/2022/10/bolo-de-fuba-delicioso.jpg' },
    { id: 6, category: 'bolos', name: 'Bolo de Chocolate (Fatia)', price: 8.00, desc: 'Massa fofinha e molhadinha.', image: 'https://www.quater.com.br/wp-content/uploads/2024/07/Bolo-de-chocolate-1.png' },

    // Café da Manhã
    { id: 7, category: 'cafe', name: 'Misto Quente', price: 8.00, desc: 'Pão francês, queijo derretido e presunto.', image: 'https://guiadacozinha.com.br/wp-content/uploads/2015/01/misto-quente-gratinado.jpg' },
    { id: 8, category: 'cafe', name: 'Pão na Chapa', price: 4.50, desc: 'Com manteiga Aviação.', image: 'https://static.itdg.com.br/images/1200-675/6882c7b094fc49340a187edb065c4d44/shutterstock-2511230593.jpg' },
    { id: 9, category: 'cafe', name: 'Ovos Mexidos', price: 6.00, desc: 'Acompanha uma torradinha.', image: 'https://vocegastro.com.br/app/uploads/2022/05/receita-de-ovos-mexidos.jpg.webp' },

    // Bebidas
    { id: 10, category: 'bebidas', name: 'Café Coado (Copo)', price: 3.00, desc: 'Feito na hora, aroma irresistível.', image: 'https://meridiano.com.br/wp-content/uploads/2014/02/e242c57f9b75666e53553fc809b9443b-jpg.webp' },
    { id: 11, category: 'bebidas', name: 'Pingado / Média', price: 4.50, desc: 'Café com leite quentinho.', image: 'https://loremflickr.com/320/320/latte?lock=11' },
    { id: 12, category: 'bebidas', name: 'Suco de Laranja (300ml)', price: 7.00, desc: 'Natural da fruta, sem açúcar.', image: 'https://phygital-files.mercafacil.com/catalogo/uploads/produto/suco_de_laranja_prat_s_integral_900ml_8ad33694-3253-4b50-abe5-dd9f9efaef05.jpg' },
    { id: 13, category: 'bebidas', name: 'Refrigerante Lata', price: 6.00, desc: 'Coca-Cola, Guaraná, etc.', image: 'https://static-images.ifood.com.br/image/upload/t_high/pratos/09105613-ab31-4582-a612-e131cce76d9d/202103031100_3Ncw_.jpeg' },

    // Ofertas
    { id: 16, category: 'ofertas', name: 'Leite Condensado Moça', price: 6.50, desc: 'Lata 395g.', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_994532-MLA99832746535_112025-F.webp' },

    // Leites
    { id: 17, category: 'leites', name: 'Leite Integral (Litre)', price: 4.80, desc: 'Caixa 1L.', image: 'https://loremflickr.com/320/320/milk?lock=17' },
    { id: 18, category: 'leites', name: 'Iogurte Natural', price: 3.50, desc: 'Copo 170g.', image: 'https://loremflickr.com/320/320/yogurt?lock=18' },

    // Higiene
    { id: 19, category: 'higiene', name: 'Detergente Limpol', price: 2.20, desc: 'Frasco 500ml.', image: 'https://cdn.awsli.com.br/1397/1397216/produto/57513775/e75409eba5.jpg' },
    { id: 20, category: 'higiene', name: 'Papel Higiênico (4 rolos)', price: 5.50, desc: 'Folha dupla.', image: 'https://cdn.awsli.com.br/600x450/1795/1795392/produto/180060742c8f13db2bd.jpg' },

    // Bebês
    { id: 21, category: 'bebes', name: 'Fralda P (Pacote)', price: 25.00, desc: 'Pacote econômico.', image: 'https://images.tcdn.com.br/img/img_prod/1221238/fralda_pampers_confort_sec_tamanho_p_28_unidades_5765_1_9038f2345b40f6da7adbfef87d0eca4f.png' },
    { id: 22, category: 'bebes', name: 'Lenço Umedecido', price: 12.00, desc: 'Pacote com 50 unidades.', image: 'https://cdn.awsli.com.br/1652/1652384/produto/2689883388e15738fcd.jpg' },

    // Kits
    { id: 14, category: 'kits', name: 'Kit Café Rápido', price: 10.00, desc: '1 Pingado + 1 Misto Quente.', image: 'https://loremflickr.com/320/320/breakfast,set?lock=14' },
    { id: 15, category: 'kits', name: 'Kit Família', price: 25.00, desc: '10 Pães + 1 Bolo de Fubá + 1 Refri 2L.', image: 'https://loremflickr.com/320/320/bakery,box?lock=15' }
];
