const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    // Always store as number → avoid mismatch later
    const numericId = Number(id);

    if (storedBookData.includes(numericId)) {
        alert("bhai er id already exist");
    } else {
        storedBookData.push(numericId);

        const json = JSON.stringify(storedBookData);
        localStorage.setItem("readList", json);
    }
};

export { addToStoredDB, getStoredBook };
