// =========================================================================
// ADMIN DASHBOARD CONTROLLER (admin.js)
// Handles authentication & CRUD operations for sketpixel catalog assets
// =========================================================================

// State Management
const adminState = {
  session: null,
  assets: [],
  editingAssetId: null,
  isLoading: false
};

// DOM References
const authSection = document.getElementById('auth-section');
const dashboardSection = document.getElementById('dashboard-section');
const loadingOverlay = document.getElementById('loading-overlay');
const loginForm = document.getElementById('login-form');
const assetForm = document.getElementById('asset-form');
const assetsTableBody = document.getElementById('assets-table-body');
const assetCountBadge = document.getElementById('asset-count');
const adminUserEmailText = document.getElementById('admin-user-email');
const btnLogout = document.getElementById('btn-logout');
const btnCancelEdit = document.getElementById('btn-cancel-edit');
const formTitle = document.getElementById('form-title');
const btnSubmitText = document.getElementById('btn-submit-text');

// Form Input References
const inputDbId = document.getElementById('asset-db-id');
const inputId = document.getElementById('asset-id');
const inputTitle = document.getElementById('asset-title');
const inputCategory = document.getElementById('asset-category');
const inputPrice = document.getElementById('asset-price');
const inputIsFree = document.getElementById('asset-is-free');
const inputTags = document.getElementById('asset-tags');
const inputShortDesc = document.getElementById('asset-short-desc');
const inputLongDesc = document.getElementById('asset-long-desc');
const inputItchUrl = document.getElementById('asset-itch-url');
const inputVersion = document.getElementById('asset-version');
const inputGrid = document.getElementById('asset-grid');
const inputFormat = document.getElementById('asset-format');
const inputLicense = document.getElementById('asset-license');
const inputColors = document.getElementById('asset-colors');
const inputSvg = document.getElementById('asset-svg');

// Color and SVG Live Preview Containers
const formColorPreview = document.getElementById('form-color-preview');
const formSvgPreviewBox = document.getElementById('form-svg-preview-box');

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconName = type === 'success' ? 'check-circle' : 'alert-triangle';
  
  toast.innerHTML = `
    <div class="toast-icon">
      <i data-lucide="${iconName}" style="width: 18px; height: 18px; color: ${type === 'success' ? '#10b981' : '#ef4444'}"></i>
    </div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  lucide.createIcons();

  // Animasi Keluar setelah 3 detik
  setTimeout(() => {
    toast.style.animation = 'slide-in 0.25s reverse ease-in forwards';
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 3000);
}

// ==========================================
// LOADING STATE CONTROLLER
// ==========================================
function showLoading(show) {
  adminState.isLoading = show;
  if (show) {
    loadingOverlay.classList.remove('hidden');
  } else {
    loadingOverlay.classList.add('hidden');
  }
}

// ==========================================
// FORM PREVIEW LOGIC
// ==========================================
function updateLivePreviews() {
  // 1. Live Preview SVG
  const svgCode = inputSvg.value.trim();
  if (svgCode) {
    // Sanitasi minimal untuk mencegah XSS dasar jika diperlukan, namun karena ini admin dashboard
    // kita membolehkan SVG ter-render penuh untuk melihat hasilnya.
    formSvgPreviewBox.innerHTML = svgCode;
  } else {
    formSvgPreviewBox.innerHTML = '<span class="preview-placeholder">Live Preview Aset</span>';
  }

  // 2. Live Preview Palet Warna
  const colorsText = inputColors.value.trim();
  formColorPreview.innerHTML = '';
  if (colorsText) {
    const colorArray = colorsText.split(',').map(c => c.trim()).filter(c => c.startsWith('#'));
    colorArray.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-preview-swatch';
      swatch.style.backgroundColor = color;
      swatch.title = color;
      formColorPreview.appendChild(swatch);
    });
  }
}

// Setup Event Previews
inputSvg.addEventListener('input', updateLivePreviews);
inputColors.addEventListener('input', updateLivePreviews);

// IsFree Checkbox logic
inputIsFree.addEventListener('change', () => {
  if (inputIsFree.checked) {
    inputPrice.value = '0.00';
    inputPrice.disabled = true;
  } else {
    inputPrice.disabled = false;
    if (parseFloat(inputPrice.value) === 0) {
      inputPrice.value = '1.00';
    }
  }
});

// ==========================================
// USER AUTHENTICATION & LOGIN LOGIC
// ==========================================
async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!window.supabaseClient) {
    showToast("Supabase Client belum terkonfigurasi. Cek config.js!", "error");
    return;
  }

  showLoading(true);
  try {
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    
    showToast("Login Berhasil! Selamat datang admin.", "success");
  } catch (error) {
    console.error("Auth error:", error);
    showToast(error.message || "Gagal login. Periksa email & password Anda.", "error");
  } finally {
    showLoading(false);
  }
}

async function handleLogout() {
  if (!window.supabaseClient) return;
  
  showLoading(true);
  try {
    const { error } = await window.supabaseClient.auth.signOut();
    if (error) throw error;
    showToast("Anda telah keluar dari sistem.", "success");
  } catch (error) {
    console.error("Logout error:", error);
    showToast("Gagal melakukan logout.", "error");
  } finally {
    showLoading(false);
  }
}

// ==========================================
// DATABASE / CRUD OPERATIONS
// ==========================================

// 1. Ambil Data (SELECT)
async function fetchAssets() {
  if (!window.supabaseClient) return;

  try {
    const { data, error } = await window.supabaseClient
      .from('assets')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    adminState.assets = data || [];
    renderAssetsTable();
  } catch (error) {
    console.error("Gagal menarik data:", error);
    showToast("Gagal mengambil daftar aset dari database.", "error");
  }
}

// 2. Tampilkan ke Tabel
function renderAssetsTable() {
  assetsTableBody.innerHTML = '';
  assetCountBadge.textContent = `${adminState.assets.length} Paket`;

  if (adminState.assets.length === 0) {
    assetsTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px 10px;">
          <i data-lucide="package-open" style="width: 24px; height: 24px; margin-bottom: 8px; display: block; margin-left: auto; margin-right: auto;"></i>
          Belum ada paket aset di database.
        </td>
      </tr>
    `;
    lucide.createIcons();
    return;
  }

  adminState.assets.forEach(asset => {
    const row = document.createElement('tr');
    
    const isFree = asset.is_free;
    const priceText = isFree ? 'FREE' : `$${parseFloat(asset.price).toFixed(2)}`;

    row.innerHTML = `
      <td>
        <div class="admin-table-preview-cell">
          ${asset.svg_preview}
        </div>
      </td>
      <td>
        <div class="admin-table-title">${asset.title}</div>
        <div class="admin-table-cat">${asset.category} <span style="opacity: 0.5;">(#${asset.id})</span></div>
      </td>
      <td>
        <span class="admin-table-price">${priceText}</span>
      </td>
      <td>
        <div class="admin-action-row">
          <button class="btn-retro-accent btn-edit-asset" data-id="${asset.id}" style="padding: 4px 8px; font-size: 8px;">
            <i data-lucide="edit-3" style="width: 10px; height: 10px;"></i>
            EDIT
          </button>
          <button class="btn-retro-danger btn-delete-asset" data-id="${asset.id}" style="padding: 4px 8px; font-size: 8px;">
            <i data-lucide="trash-2" style="width: 10px; height: 10px;"></i>
            HAPUS
          </button>
        </div>
      </td>
    `;
    assetsTableBody.appendChild(row);
  });

  lucide.createIcons();
  setupTableActionListeners();
}

// 3. Setup listener Edit & Delete di tabel
function setupTableActionListeners() {
  // Edit Buttons
  document.querySelectorAll('.btn-edit-asset').forEach(btn => {
    btn.addEventListener('click', () => {
      const assetId = btn.getAttribute('data-id');
      const asset = adminState.assets.find(a => a.id === assetId);
      if (asset) startEditAsset(asset);
    });
  });

  // Delete Buttons
  document.querySelectorAll('.btn-delete-asset').forEach(btn => {
    btn.addEventListener('click', () => {
      const assetId = btn.getAttribute('data-id');
      confirmDeleteAsset(assetId);
    });
  });
}

// 4. Masuk ke Mode Edit Aset
function startEditAsset(asset) {
  adminState.editingAssetId = asset.id;
  
  // Populate form fields
  inputDbId.value = asset.id; // slug key
  inputId.value = asset.id;
  inputId.disabled = true; // Jangan boleh ganti slug ID di database karena itu primary key
  
  inputTitle.value = asset.title;
  inputCategory.value = asset.category;
  
  inputPrice.value = parseFloat(asset.price).toFixed(2);
  inputIsFree.checked = asset.is_free;
  
  if (asset.is_free) {
    inputPrice.disabled = true;
  } else {
    inputPrice.disabled = false;
  }

  inputTags.value = asset.tags ? asset.tags.join(', ') : '';
  inputShortDesc.value = asset.short_desc;
  inputLongDesc.value = asset.long_desc;
  inputItchUrl.value = asset.itch_url;
  
  inputVersion.value = asset.specs?.version || 'v1.0';
  inputGrid.value = asset.specs?.grid || '16x16';
  inputFormat.value = asset.specs?.format || 'PNG';
  inputLicense.value = asset.specs?.license || 'CC BY 4.0';
  
  inputColors.value = asset.colors ? asset.colors.join(', ') : '';
  inputSvg.value = asset.svg_preview;

  // Visual Form State
  formTitle.innerHTML = `<i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--accent);"></i> Edit Paket: ${asset.title}`;
  btnSubmitText.textContent = "UPDATE PAKET ASET";
  btnCancelEdit.classList.remove('hidden');
  
  // Update Previews
  updateLivePreviews();
  
  // Scroll to Form editor
  document.querySelector('.admin-panel-right').scrollIntoView({ behavior: 'smooth' });
  
  lucide.createIcons();
}

// Batal Edit
function cancelEdit() {
  adminState.editingAssetId = null;
  assetForm.reset();
  
  inputDbId.value = '';
  inputId.value = '';
  inputId.disabled = false;
  
  inputPrice.disabled = false;
  
  formTitle.innerHTML = `<i data-lucide="plus-circle" style="width: 16px; height: 16px; color: var(--accent);"></i> Tambah Paket Baru`;
  btnSubmitText.textContent = "SIMPAN PAKET ASET";
  btnCancelEdit.classList.add('hidden');
  
  updateLivePreviews();
  lucide.createIcons();
}

btnCancelEdit.addEventListener('click', cancelEdit);

// 5. Simpan Data Baru / Edit (INSERT / UPDATE)
async function handleFormSubmit(e) {
  e.preventDefault();

  if (!window.supabaseClient) {
    showToast("Supabase belum terkonfigurasi!", "error");
    return;
  }

  const idVal = inputId.value.trim().toLowerCase().replace(/[^a-z0-9\-]+/g, '-');
  const titleVal = inputTitle.value.trim();
  const categoryVal = inputCategory.value;
  const isFreeVal = inputIsFree.checked;
  const priceVal = isFreeVal ? 0 : parseFloat(inputPrice.value) || 0;
  
  const tagsVal = inputTags.value.split(',').map(t => t.trim()).filter(Boolean);
  const shortDescVal = inputShortDesc.value.trim();
  const longDescVal = inputLongDesc.value.trim();
  const itchUrlVal = inputItchUrl.value.trim();
  
  const specsVal = {
    grid: inputGrid.value.trim(),
    format: inputFormat.value.trim(),
    license: inputLicense.value.trim(),
    version: inputVersion.value.trim()
  };
  
  const colorsVal = inputColors.value.split(',').map(c => c.trim()).filter(Boolean);
  const svgVal = inputSvg.value.trim();

  // Validasi Dasar
  if (!idVal || !titleVal || !shortDescVal || !longDescVal || !itchUrlVal || !svgVal) {
    showToast("Mohon lengkapi seluruh field formulir!", "error");
    return;
  }

  showLoading(true);

  // Buat Payload
  const payload = {
    title: titleVal,
    category: categoryVal,
    tags: tagsVal,
    price: priceVal,
    is_free: isFreeVal,
    short_desc: shortDescVal,
    long_desc: longDescVal,
    itch_url: itchUrlVal,
    release_date: new Date().toISOString().split('T')[0], // Gunakan tanggal hari ini
    specs: specsVal,
    colors: colorsVal,
    svg_preview: svgVal
  };

  try {
    if (adminState.editingAssetId) {
      // MODE EDIT (UPDATE)
      const { error } = await window.supabaseClient
        .from('assets')
        .update(payload)
        .eq('id', adminState.editingAssetId);

      if (error) throw error;
      showToast(`Sukses memperbarui aset "${titleVal}"!`, "success");
    } else {
      // MODE TAMBAH BARU (INSERT)
      payload.id = idVal; // Set ID/slug baru
      
      const { error } = await window.supabaseClient
        .from('assets')
        .insert([payload]);

      if (error) throw error;
      showToast(`Sukses menambahkan aset baru "${titleVal}"!`, "success");
    }

    cancelEdit();
    await fetchAssets();
  } catch (error) {
    console.error("Save error:", error);
    showToast(error.message || "Gagal menyimpan aset ke database.", "error");
  } finally {
    showLoading(false);
  }
}

assetForm.addEventListener('submit', handleFormSubmit);

// 6. Hapus Data (DELETE)
async function confirmDeleteAsset(assetId) {
  const asset = adminState.assets.find(a => a.id === assetId);
  if (!asset) return;

  const confirmMsg = `APAKAH ANDA YAKIN AKAN MENGHAPUS PAKET ASET INI?\n\nJudul: "${asset.title}"\nID: #${asset.id}\n\nTindakan ini tidak dapat dibatalkan!`;
  
  if (confirm(confirmMsg)) {
    showLoading(true);
    try {
      const { error } = await window.supabaseClient
        .from('assets')
        .delete()
        .eq('id', assetId);

      if (error) throw error;
      
      showToast(`Aset "${asset.title}" berhasil dihapus dari database.`, "success");
      await fetchAssets();
      
      // Jika yang dihapus sedang diedit, batalkan edit
      if (adminState.editingAssetId === assetId) {
        cancelEdit();
      }
    } catch (error) {
      console.error("Delete error:", error);
      showToast(error.message || "Gagal menghapus aset.", "error");
    } finally {
      showLoading(false);
    }
  }
}

// ==========================================
// UI & SESSION LISTENER SETUP
// ==========================================
function updateUIForSession(session) {
  adminState.session = session;
  
  if (session) {
    // Pengguna Terautentikasi (Admin)
    authSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    adminUserEmailText.textContent = `Masuk sebagai: ${session.user.email}`;
    fetchAssets();
  } else {
    // Belum Login
    authSection.classList.remove('hidden');
    dashboardSection.classList.add('hidden');
    adminUserEmailText.textContent = '';
    assetsTableBody.innerHTML = '';
  }
}

// Inisialisasi Auth Listener
function initAuthListener() {
  if (!window.supabaseClient) {
    showLoading(false);
    // Tampilkan pesan warning di panel login bahwa Supabase belum di-setup
    const authHeader = document.querySelector('.auth-header p');
    if (authHeader) {
      authHeader.innerHTML = '<span style="color: #ef4444; font-weight: bold;">PERINGATAN: Supabase URL/Key belum dikonfigurasi di config.js!</span>';
    }
    return;
  }

  // Cek sesi aktif saat pertama kali buka
  window.supabaseClient.auth.getSession().then(({ data: { session } }) => {
    updateUIForSession(session);
    showLoading(false);
  });

  // Dengarkan perubahan status login/logout
  window.supabaseClient.auth.onAuthStateChange((_event, session) => {
    updateUIForSession(session);
  });
}

// Event Listeners
loginForm.addEventListener('submit', handleLogin);
btnLogout.addEventListener('click', handleLogout);

// Mulai Pemuatan Aplikasi
document.addEventListener('DOMContentLoaded', () => {
  initAuthListener();
  lucide.createIcons();
});
