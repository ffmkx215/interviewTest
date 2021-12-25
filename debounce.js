const debounce = (func, delay) => {
    let timer = null;
    return (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(e), delay);
    };
};

