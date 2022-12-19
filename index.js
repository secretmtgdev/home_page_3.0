const constants = {
    classes: {
        SNOWFLAKE: "snowflake"
    }
};

let createSnowflakes = (count=100) => {
    const snowflakes = [];
    for (let i = 0; i < count; i++) {
        let snowflake = document.createElement("div");
        snowflake.className = constants.classes.SNOWFLAKE;
        snowflakes.push(snowflake);
    }

    return snowflakes;
}

let renderSnowflakes = () => {
    const snowflakes = createSnowflakes();
    let container = document.querySelector('#background');
    for (const snowflake of snowflakes) {
        container.appendChild(snowflake);
    }
}

(function() {
    function init() {
        renderSnowflakes();
    }

    init();
})();