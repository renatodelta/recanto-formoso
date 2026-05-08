let storeData = {
    name: "Delícias da Sobrinha",
    phone: "5511999999999", // Número do WhatsApp
    address: "Recanto Formoso, S/N",
    hours: "Ter a Dom: 14h às 20h",
    status: "open" // "open" ou "closed"
};

let categories = [
    { id: "bolos", name: "🍰 Bolos Caseiros" },
    { id: "festas", name: "🎂 Bolos de Festa" }
];

let products = [
    {
        id: 1,
        category: "bolos",
        name: "Cenoura com cobertura de chocolate",
        price: 35.00,
        desc: "Bolo fofinho de cenoura com cobertura cremosa de chocolate.",
        image: "https://69fd4cf6867076fb670c5e56.imgix.net/IMG_0168.jpg?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 2,
        category: "bolos",
        name: "Limão com cobertura de limão",
        price: 25.00,
        desc: "Bolo cítrico e refrescante com cobertura deliciosa de limão.",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 3,
        category: "bolos",
        name: "Fubá com cobertura de goiabada",
        price: 25.00,
        desc: "O clássico bolo de fubá de vó, com deliciosa cobertura de goiabada derretida.",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 4,
        category: "bolos",
        name: "Chocolate com cobertura de chocolate",
        price: 30.00,
        desc: "Massa fofinha de chocolate com cobertura cremosa, para os amantes de cacau.",
        image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 5,
        category: "bolos",
        name: "Maçã com canela",
        price: 28.00,
        desc: "Bolo artesanal de maçã com um toque super especial de canela.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 6,
        category: "festas",
        name: "Bolo Ninho com Morango",
        price: 85.00,
        desc: "Massa branca recheada com brigadeiro de Leite Ninho e morangos frescos. (1kg)",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 7,
        category: "festas",
        name: "Bolo de Brigadeiro",
        price: 80.00,
        desc: "Massa de chocolate, recheio e cobertura de brigadeiro trufado. (1kg)",
        image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 8,
        category: "festas",
        name: "Bolo Red Velvet",
        price: 95.00,
        desc: "Massa vermelha aveludada com recheio de cream cheese. (1kg)",
        image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=200&h=200"
    }
];
