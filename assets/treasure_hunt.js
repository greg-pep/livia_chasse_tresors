const eggCtnrArray = document.querySelectorAll(".eggCtnr");

if (eggCtnrArray) {
	eggCtnrArray.forEach(function(eggCtnr) {
		const eggBtn = eggCtnr.querySelector(".eggBtn");
		const eggMessage = eggCtnr.querySelector(".eggMessage");
		const answerInput = eggCtnr.querySelector(".answerInput");
		const answerBtn = eggCtnr.querySelector(".answerBtn");
		const eggWarning = eggCtnr.querySelector(".eggCtnr-warning");
		const photosBtn = eggCtnr.querySelector(".photosBtn");

		// Egg button
		eggBtn.addEventListener("click", () => {
			if (eggBtn.getAttribute("id") === "imgBtn") {
				setTimeout(function() {
					photosBtn.classList.remove("hidden");
					photosBtn.scrollIntoView({ behavior: 'smooth' });
				}, 30000);
			}
			if (eggMessage.classList.contains("hidden")) {
				eggMessage.classList.remove("hidden");
				eggMessage.classList.add("displayed");
				eggMessage.scrollIntoView({ behavior: 'smooth' });
			} else {
				eggMessage.classList.remove("displayed");
				eggMessage.classList.add("hidden");
			}
		});

		// Answer button
		answerBtn.addEventListener("click", () => {
			const btnAnswer = answerBtn.getAttribute("data-answer");
			const btnTarget = answerBtn.getAttribute("data-target");
			const inputValue = answerInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			const sentence1 = "en aout une grande nouvelle va arriver";
			const sentence2 = "une grande nouvelle va arriver en aout";
			const sentence3 = "en aout va arriver une grande nouvelle";


			if (answerBtn.classList.contains('sentenceBtn') ? (inputValue === sentence1 || inputValue === sentence2 || inputValue === sentence3) : inputValue === btnAnswer) {
				location.assign(btnTarget);
			}
			
			else {
				// Warning
				var warning = document.createElement("div");
				warning.className = "eggMessage-warning";
				warning.innerHTML = "Désolé. Mais ça nest pas la bonne réponse !";
				eggMessage.append(warning);
				setTimeout(function() {
					eggMessage.removeChild(warning);
				}, 2000);

				// Effect
				eggMessage.classList.add("noEffect");
				setTimeout(() => {
				  eggMessage.classList.remove('noEffect');
				}, 1000);
			}
		});
	});
}
