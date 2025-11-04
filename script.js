document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
    handleFormSubmit();
    addSmoothAnimations();
    console.log('✨ Sistem pratinjau live aktif!'); });
    
function updatePreview() {
    //input nama
    const namaInput = document.getElementById('form-name');
    const previewNama = document.getElementById('preview-name');
    if (namaInput && previewNama) {
        namaInput.addEventListener('input', function() {
            previewNama.innerHTML = `<li>${this.value || 'Belum diisi'}</li>`;});}
    //input email
    const emailInput = document.getElementById('form-email');
    const previewEmail = document.getElementById('preview-email');
    if (emailInput && previewEmail) {
        emailInput.addEventListener('input', function() {
            previewEmail.innerHTML = `<li>${this.value || 'Belum diisi'}</li>`;});}
    //input telepon
    const telpInput = document.getElementById('form-telp');
    const previewTelp = document.getElementById('preview-telp');
    if (telpInput && previewTelp) {
        telpInput.addEventListener('input', function() {
            previewTelp.innerHTML = `<li>${this.value || 'Belum diisi'}</li>`;});}
    //input sesi
    const sesiInput = document.getElementById('form-category');
    const previewSesi = document.getElementById('preview-sesi');
    if (sesiInput && previewSesi) {
        sesiInput.addEventListener('input', function() {
            previewSesi.innerHTML = `<li>${this.value || 'Belum memilih sesi'}</li>`;});
        sesiInput.addEventListener('change', function() {
            previewSesi.innerHTML = `<li>${this.value || 'Belum memilih sesi'}</li>`;});}
    //input alasan
    const inputAlasan = document.querySelector('#for-alasan');
    const previewAlasan = document.getElementById('preview-alasan');
    if (inputAlasan && previewAlasan) {
        inputAlasan.addEventListener('input', function() {
            const teksInputan = inputAlasan.value;
            if (teksInputan === "") {
                previewAlasan.innerHTML = "Belum ada alasan yang diinput...";} 
            else {
                previewAlasan.innerHTML = teksInputan;}});
        console.log("✅ Live preview alasan aktif!");} 
    else {
        console.log("❌ Elemen alasan tidak ditemukan");}
    //input antusias
    const antusiasInput = document.getElementById('antusias');
    const previewMeter = document.getElementById('preview-difficulty');
    const meteranText = document.getElementById('meteran');
        if (antusiasInput && previewMeter && meteranText) {
            antusiasInput.addEventListener('input', function() {
                const value = parseInt(this.value);
                previewMeter.value = value;
                const texts = {
                    1: "sedikit antusias 😴",
                    2: "cukup antusias 🙂", 
                    3: "antusias 😊",
                    4: "sangat antusias! 🤩",
                    5: "LUAR BIASA ANTUSIAS!!! 🚀"};
                meteranText.textContent = texts[value] || "silahkan pilih tingkat antusiasme";
                updateMeterColor(value, meteranText);});
            const initialValue = parseInt(antusiasInput.value);
            updateMeterColor(initialValue, meteranText);}}
        function updateMeterColor(value, meteranElement) {
        meteranElement.className = '';
        switch(value) {
            case 1:
                meteranElement.classList.add('level-1');
                break;
            case 2:
                meteranElement.classList.add('level-2');
                break;
            case 3:
                meteranElement.classList.add('level-3');
                break;
            case 4:
                meteranElement.classList.add('level-4');
                break;
            case 5:
                meteranElement.classList.add('level-5');
                break;
            default:
                meteranElement.classList.add('level-default');}}
    //fungsi kirim
    function handleFormSubmit() {
        const form = document.querySelector('form');
        const submitButton = document.querySelector('button[type="submit"]');
        if (form && submitButton) {
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                // Validasi form sederhana
                const nama = document.getElementById('form-name').value;
                const email = document.getElementById('form-email').value;
                const telp = document.getElementById('form-telp').value;
                if (!nama || !email || !telp) {
                    alert('Harap lengkapi data diri Anda!');
                    return;}
                alert('🎉 Pendaftaran berhasil! Terima kasih telah mendaftar workshop kami.');
                form.reset();});}}