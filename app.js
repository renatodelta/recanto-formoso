// Estado do Carrinho
let cart = [];

// Formata preço para Real (R$)
const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// Verifica se a loja está aberta
const checkStoreStatus = () => {
    const statusBadge = document.getElementById('store-status');
    const closedBanner = document.getElementById('closed-banner');
    
    // Obtém a hora atual local
    const now = new Date();
    const currentHour = now.getHours();
    
    const { start, end } = storeData.openingHours;
    
    if (currentHour >= start && currentHour < end) {
        statusBadge.textContent = '🟢 Aberto agora';
        statusBadge.classList.add('open');
        statusBadge.classList.remove('closed');
        closedBanner.classList.add('hidden');
    } else {
        statusBadge.textContent = '🔴 Fechado';
        statusBadge.classList.add('closed');
        statusBadge.classList.remove('open');
        closedBanner.classList.remove('hidden');
    }
};

// Renderiza o cardápio
const renderMenu = () => {
    const menuSection = document.getElementById('menu-section');
    menuSection.innerHTML = ''; // limpa a seção

    categories.forEach(category => {
        // Filtra os produtos desta categoria
        const categoryProducts = products.filter(p => p.category === category.id);
        
        if (categoryProducts.length === 0) return;

        // Cria container da categoria
        const categoryBlock = document.createElement('div');
        categoryBlock.classList.add('category-block');
        
        // Título da categoria
        const categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.name;
        categoryBlock.appendChild(categoryTitle);

        // Grid de produtos
        const productGrid = document.createElement('div');
        productGrid.classList.add('product-grid');

        categoryProducts.forEach(prod => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            // Verifica se produto está no carrinho
            const cartItem = cart.find(item => item.id === prod.id);
            const isInCart = !!cartItem;

            productCard.innerHTML = `
                <img src="${prod.image}" alt="${prod.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${prod.name}</h3>
                    <p class="product-unit">Unidade: 1</p>
                    <div class="product-price">${formatPrice(prod.price)}</div>
                </div>
                ${isInCart ? `
                    <div class="qty-selector">
                        <button class="btn-qty-card" onclick="changeQty(${prod.id}, -1)">
                            ${cartItem.qty === 1 ? '🗑️' : '-'}
                        </button>
                        <span class="card-qty-value">${cartItem.qty}</span>
                        <button class="btn-qty-card" onclick="changeQty(${prod.id}, 1)">+</button>
                    </div>
                ` : `
                    <button class="btn-add" onclick="addToCart(${prod.id})">
                        Adicionar 🛒
                    </button>
                `}
            `;
            
            productGrid.appendChild(productCard);
        });

        categoryBlock.appendChild(productGrid);
        menuSection.appendChild(categoryBlock);
    });
};

// Adiciona produto ao carrinho
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    
    // Pequeno feedback visual no mobile (pode ser útil)
    const floatBtn = document.getElementById('floating-cart');
    floatBtn.style.transform = 'translateX(-50%) scale(1.1)';
    setTimeout(() => {
        floatBtn.style.transform = 'translateX(-50%) scale(1)';
    }, 200);
};

// Altera quantidade no carrinho
const changeQty = (productId, delta) => {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        updateCartUI();
    }
};

// Atualiza a interface do carrinho
const updateCartUI = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const cartCount = document.getElementById('cart-count');
    const floatCount = document.getElementById('floating-cart-count');
    const totalPriceEl = document.getElementById('total-price');

    // Limpa lista
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio.</p>';
        cartSummary.classList.add('hidden');
        cartCount.textContent = '0';
        floatCount.textContent = '0';
        return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.qty;
        totalPrice += (item.price * item.qty);

        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        
        itemEl.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
            </div>
            <div class="cart-controls">
                <button class="btn-qty" onclick="changeQty(${item.id}, -1)">-</button>
                <span class="cart-qty">${item.qty}</span>
                <button class="btn-qty" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(itemEl);
    });

    cartCount.textContent = totalItems;
    floatCount.textContent = totalItems;
    totalPriceEl.textContent = formatPrice(totalPrice);
    
    cartSummary.classList.remove('hidden');
    
    // Sincroniza os botões do cardápio
    renderMenu();
};

// Alterna exibição do campo de endereço baseado no tipo de entrega
const toggleAddress = () => {
    const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;
    const addressGroup = document.getElementById('address-group');
    const addressInput = document.getElementById('customer-address');
    
    if (deliveryType === 'retirada') {
        addressGroup.classList.add('hidden');
        addressInput.removeAttribute('required');
    } else {
        addressGroup.classList.remove('hidden');
        addressInput.setAttribute('required', 'true');
    }
};

// Envia pedido para o WhatsApp
const sendToWhatsApp = () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const name = document.getElementById('customer-name').value.trim();
    if (!name) {
        alert("Por favor, preencha seu nome.");
        document.getElementById('customer-name').focus();
        return;
    }

    const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;
    const address = document.getElementById('customer-address').value.trim();
    
    if (deliveryType === 'entrega' && !address) {
        alert("Por favor, preencha o endereço de entrega.");
        document.getElementById('customer-address').focus();
        return;
    }

    const notes = document.getElementById('order-notes').value.trim();

    // Monta a mensagem
    let message = `*Novo Pedido - ${storeData.name}*\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Tipo:* ${deliveryType === 'entrega' ? '🛵 Entrega' : '🏪 Retirada'}\n`;
    
    if (deliveryType === 'entrega') {
        message += `*Endereço:* ${address}\n`;
    }
    
    message += `\n*Itens do Pedido:*\n`;
    
    let total = 0;
    cart.forEach(item => {
        message += `• ${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}\n`;
        total += (item.price * item.qty);
    });
    
    message += `\n*Total da Compra:* ${formatPrice(total)}\n`;
    
    if (notes) {
        message += `\n*Observações:* ${notes}\n`;
    }

    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeData.phone}?text=${encodedMessage}`;
    
    // Redireciona
    window.open(whatsappUrl, '_blank');
};

// Rolar a tela para o carrinho (útil para o botão flutuante mobile)
const scrollToCart = () => {
    document.querySelector('.cart-section').scrollIntoView({ behavior: 'smooth' });
};

// Inicialização
window.onload = () => {
    checkStoreStatus();
    renderMenu();
    toggleAddress(); // Ajusta estado inicial do endereço
    
    // Atualiza status a cada minuto
    setInterval(checkStoreStatus, 60000);
};
