window.addEventListener('DOMContentLoaded', () => {

	const menuItem = document.querySelectorAll('button');

	menuItem.forEach(btn => {
		btn.addEventListener("click", (e) => {
			if (e.target.classList.contains("promo_btn_red"))
			{
				new Audio("../audio/small.mp3").play();
			}
			else
			{
				new Audio("../audio/big.mp3").play();
			}
		})
	})
})