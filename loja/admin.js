const STORAGE_KEY = 'recanto_loja_data';

// Load from LocalStorage OR fallback to data.js global variables
let localStoreData, localCategories, localProducts;

const loadData = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        localStoreData = parsed.storeData;
        localCategories = parsed.categories;
        localProducts = parsed.products;
    } else {
        // From data.js
        localStoreData = { ...storeData };
        localCategories = [ ...categories ];
        localProducts = [ ...products ];
        persistData(); // save initial state
    }
};

const persistData = () => {
    const payload = {
        storeData: localStoreData,
        categories: localCategories,
        products: localProducts
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

// Initialize
window.onload = () => {
    loadData();
    document.getElementById('store-title').textContent = localStoreData.name;
    renderTable();
    populateCategorySelect();
};

const formatPriceAdmin = (price) => {
    return parseFloat(price).toFixed(2);
};

const getCategoryName = (catId) => {
    const cat = localCategories.find(c => c.id === catId);
    return cat ? cat.name.replace(/[^\w\sÀ-ú]/g, '').trim() : catId; // Remove emojis if any exist in data.js
};

// Render Products
const renderTable = () => {
    const container = document.getElementById('product-list');
    const emptyState = document.getElementById('empty-state');
    
    container.innerHTML = '';
    
    if (localProducts.length === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        return;
    }
    
    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
    
    localProducts.forEach(prod => {
        const row = document.createElement('div');
        row.className = "flex flex-col md:grid md:grid-cols-12 gap-4 p-4 md:p-6 items-start md:items-center hover:bg-slate-50/50 transition-colors";
        
        row.innerHTML = `
            <div class="col-span-1 hidden md:block">
                <div class="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shadow-inner flex-shrink-0">
                    <img src="${prod.image || 'https://via.placeholder.com/100'}" class="w-full h-full object-cover" alt="" onerror="this.src='https://via.placeholder.com/100'">
                </div>
            </div>
            <div class="col-span-5 flex gap-4 w-full md:w-auto items-center md:items-start">
                <div class="w-16 h-16 md:hidden rounded-xl bg-slate-100 overflow-hidden shadow-inner flex-shrink-0">
                    <img src="${prod.image || 'https://via.placeholder.com/100'}" class="w-full h-full object-cover" alt="" onerror="this.src='https://via.placeholder.com/100'">
                </div>
                <div>
                    <h3 class="font-medium text-slate-900 line-clamp-1">${prod.name}</h3>
                    <p class="text-sm text-slate-500 line-clamp-1 mt-0.5">${prod.desc || 'Sem descrição'}</p>
                </div>
            </div>
            <div class="col-span-2 w-full flex justify-between md:block">
                <span class="md:hidden text-sm text-slate-400">Categoria:</span>
                <span class="inline-flex px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">${getCategoryName(prod.category)}</span>
            </div>
            <div class="col-span-2 w-full flex justify-between md:block">
                <span class="md:hidden text-sm text-slate-400">Preço:</span>
                <span class="font-mono text-slate-700 font-medium">R$ ${formatPriceAdmin(prod.price)}</span>
            </div>
            <div class="col-span-2 w-full flex justify-end gap-2 mt-2 md:mt-0 pt-3 md:pt-0 border-t border-slate-100 md:border-0">
                <button onclick="editProduct(${prod.id})" class="p-2 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors btn-press flex items-center justify-center" aria-label="Editar">
                    <i class="ph ph-pencil-simple text-lg"></i>
                </button>
                <button onclick="deleteProduct(${prod.id})" class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors btn-press flex items-center justify-center" aria-label="Excluir">
                    <i class="ph ph-trash text-lg"></i>
                </button>
            </div>
        `;
        container.appendChild(row);
    });
};

// Populate Select
const populateCategorySelect = () => {
    const select = document.getElementById('prod-category');
    select.innerHTML = '';
    localCategories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.name.replace(/[^\w\sÀ-ú]/g, '').trim();
        select.appendChild(option);
    });
};

// Modal Logic
const modal = document.getElementById('product-modal');

const openModal = () => {
    document.getElementById('modal-title').textContent = 'Novo Produto';
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-name').value = '';
    document.getElementById('prod-price').value = '';
    document.getElementById('prod-desc').value = '';
    document.getElementById('prod-image').value = '';
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => document.getElementById('prod-name').focus(), 50);
};

const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

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
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
};

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
        const index = localProducts.findIndex(p => p.id == id);
        if (index > -1) {
            localProducts[index] = { id: parseInt(id), category, name, price, desc, image };
        }
    } else {
        const newId = localProducts.length > 0 ? Math.max(...localProducts.map(p => p.id)) + 1 : 1;
        localProducts.push({ id: newId, category, name, price, desc, image });
    }
    
    persistData();
    closeModal();
    renderTable();
};

const deleteProduct = (id) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
        localProducts = localProducts.filter(p => p.id !== id);
        persistData();
        renderTable();
    }
};
