function enableEditingTitle(id, textId) {
    const target = document.getElementById(id);
    target.readOnly = false;
    target.focus();

    target.addEventListener("keyup", e => {
        if (event.isComposing || event.keyCode === 13) {
            disableEditingElement(id);
            const textTarget = document.getElementById(textId);
            if (!textTarget.value) {
                enableEditingText(textId);
            }
        }
    });

    target.addEventListener("focusout", e => {
        disableEditingElement(id);
    })
}

function enableEditingText(id) {
    const target = document.getElementById(id);
    target.readOnly = false;
    target.focus();

    target.addEventListener("focusout", e => {
        disableEditingElement(id);
    })
}

function disableEditingElement(id) {
    const target = document.getElementById(id);
    target.readOnly = true;
    target.blur();
}
