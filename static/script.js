function openEncode() {
    const encodeForm = document.getElementById('encode-form');
    encodeForm.style.display = 'block';

    const decodeForm = document.getElementById('decode-form');
    decodeForm.style.display = 'none';
}

function openDecode() {
    const encodeForm = document.getElementById('encode-form');
    encodeForm.style.display = 'none';

    const decodeForm = document.getElementById('decode-form');
    decodeForm.style.display = 'block';
}