// Estado local (cópia dos dados do data.js)
let localStoreData = { ...storeData };
let localCategories = [ ...categories ];
let localProducts = [ ...products ];

// Inicialização
window.onload = () => {
    document.getElementById('store-title').textContent = localStoreData.name;
    renderTable();
    populateCategorySelect();
};

const formatPriceAdmin = (price) => {
    return parseFloat(price).toFixed(2);
};

const getCategoryName = (catId) => {
    const cat = localCategories.find(c => c.id === catId);
    return cat ? cat.name : catId;
};

// Renderiza a tabela
const renderTable = () => {
    const tbody = document.getElementById('product-list');
    tbody.innerHTML = '';
    
    localProducts.forEach(prod => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${prod.image || 'https://via.placeholder.com/50'}" class="prod-img-preview"></td>
            <td>
                <strong>${prod.name}</strong>
                <div style="font-size:0.85em; color:#666;">${prod.desc || ''}</div>
            </td>
            <td>${getCategoryName(prod.category)}</td>
            <td>R$ ${formatPriceAdmin(prod.price)}</td>
            <td>
                <button class="btn-edit" onclick="editProduct(${prod.id})">✏️ Editar</button>
                <button class="btn-danger" onclick="deleteProduct(${prod.id})">🗑️ Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Popula o select de categorias no Modal
const populateCategorySelect = () => {
    const select = document.getElementById('prod-category');
    select.innerHTML = '';
    localCategories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.name;
        select.appendChild(option);
    });
};

// Abrir Modal (vazio = novo produto)
const openModal = () => {
    document.getElementById('modal-title').textContent = 'Novo Produto';
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-name').value = '';
    document.getElementById('prod-price').value = '';
    document.getElementById('prod-desc').value = '';
    document.getElementById('prod-image').value = '';
    document.getElementById('product-modal').classList.add('active');
};

// Fechar Modal
const closeModal = () => {
    document.getElementById('product-modal').classList.remove('active');
};

// Editar Produto
const editProduct = (id) => {
    const prod = localProducts.find(p => p.id === id);
    if (!prod) return;
    
    document.getElementById('modal-title').textContent = 'Editar Produto';
    document.getElementById('prod-id').value = prod.id;
    document.getElementById('prod-name').value = prod.name;
    document.getElementById('prod-category').value = prod.category;
    document.getElementById('prod-price').value = prod.price;
    document.getElementById('prod-desc').value = prod.desc || '';
    document.getElementById('prod-image').value = prod.image || '';
    
    document.getElementById('product-modal').classList.add('active');
};

// Salvar (Adicionar ou Editar)
const saveProduct = () => {
    const id = document.getElementById('prod-id').value;
    const name = document.getElementById('prod-name').value.trim();
    const category = document.getElementById('prod-category').value;
    const price = parseFloat(document.getElementById('prod-price').value);
    const desc = document.getElementById('prod-desc').value.trim();
    const image = document.getElementById('prod-image').value.trim();
    
    if (!name || isNaN(price)) {
        alert("Preencha o nome e um preço válido.");
        return;
    }
    
    if (id) {
        // Editando
        const index = localProducts.findIndex(p => p.id == id);
        if (index > -1) {
            localProducts[index] = { id: parseInt(id), category, name, price, desc, image };
        }
    } else {
        // Novo
        const newId = localProducts.length > 0 ? Math.max(...localProducts.map(p => p.id)) + 1 : 1;
        localProducts.push({ id: newId, category, name, price, desc, image });
    }
    
    closeModal();
    renderTable();
};

// Excluir Produto
const deleteProduct = (id) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
        localProducts = localProducts.filter(p => p.id !== id);
        renderTable();
    }
};

// Salvar no Backend (api.php)
const saveData = async () => {
    const payload = {
        storeData: localStoreData,
        categories: localCategories,
        products: localProducts
    };
    
    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            alert("✅ Alterações salvas com sucesso no sistema!");
        } else {
            alert("❌ Erro ao salvar: " + result.message);
        }
    } catch (error) {
        alert("❌ Erro de comunicação com o servidor.");
        console.error(error);
    }
};
