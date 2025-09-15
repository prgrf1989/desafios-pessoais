        const getName = document.getElementById('name');
        let postResponse = document.getElementById('response');
        const postButton = document.getElementById('button');

        async function saudar() {
            const name = getName.value;
            if (!name) {
                postResponse.innerText = "❌Necessário digitar um texto‼️";
                postResponse.style.fontSize = '14px';
                postResponse.style.color = "red";
            } else {
                postResponse.innerText = `Bem-vindo ${name}! 🎉\nVoce acessou...✅ `;
                postResponse.style.color = "green";
            }
        };

        postButton.addEventListener('click', saudar);